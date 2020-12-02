/*
 * @Author: xigu.io
 * @Date: 2018-07-15 15:43:28
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-15 20:24:53
 * 鉴权控制器
 */
import { Controller } from 'egg';
import { StatusError } from '../entity/status_error';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

export default class AuthCtrl extends Controller {
  
  public async loginBySms() {
    const { helper, request, response, app: { config }, model, service } = this.ctx;
    const params = {
      mobile: { type: 'numberString', field: 'mobile', required: true },
      inviter: { type: 'string', field: 'inviter', required: false, allowEmpty: true },
      code: { type: 'numberString', field: 'code', required: true },
    };
    const { mobile, inviter, code } = helper.validateParams(
      params,
      request.body,
      this.ctx,
    );
    await service.sms.checkSmsCode(code, mobile);
    let user = await model.User.findOne({
      where: { mobile },
      attributes:['id', 'nickname', 'mobile', 'avatar'],
      raw: true
    });
    if (!user) {
      const now = Date.now();
      user = await model.User.create({
        gender: 0,
        birthday: now,
        registerTime: now,
        lastLoginTime: now,
        nickname: mobile,
        mobile: mobile,
        amount: 0,
        score: 0,
        inviter,
        inviterCode: helper.randomWord(false, 9, 9).toUpperCase(),
      });
    }
    const sessionData = {
      userId: user.id,
      mobile
    }
    const token = jwt.sign(sessionData, config.jwtSession.secret);
    response.body = {
      token,
      userInfo: user,
    };
  }

  public async wechatMPLogin() {
    const { helper, request, response, logger, app: { httpclient, config }, service, model } = this.ctx;
    const { code, inviter, userInfo: fullUserInfo } = helper.validateParams({
      code: { type: 'string' },
      inviter: { type: 'string', field: 'inviter', required: false, allowEmpty: true },
      userInfo: { type: 'object' },
    }, request.body, this.ctx);
    const userInfo = fullUserInfo.userInfo;
    const clientIp = ''; // 暂时不记录 ip

    logger.info('code: ' + code);
    logger.info('inviter: ' + inviter);
    logger.info('fullUserInfo: ');
    logger.info(fullUserInfo);

    // 向微信服务器请求登录会话信息
    const sessionData = await httpclient.request('https://api.weixin.qq.com/sns/jscode2session', {
      method: 'GET',
      data: {
        grant_type: 'authorization_code',
        js_code: code,
        secret: config.wechat.secret,
        appid: config.wechat.appid,
      },
      dataType: 'json',
    }).then(res => res.data) as {
      session_key: string;
      openid: string;
      unionid: string;
      userId?: number;
    };

    logger.info('sessionData: ');
    logger.info(sessionData);

    if (!sessionData || !sessionData.openid) {
      throw new StatusError('登录失败', StatusError.ERROR_STATUS.SERVER_ERROR);
    }

    // 验证用户信息完整性
    const sha1 = crypto.createHash('sha1').update(fullUserInfo.rawData + sessionData.session_key).digest('hex');
    if (fullUserInfo.signature !== sha1) {
      throw new StatusError('登录失败', StatusError.ERROR_STATUS.SERVER_ERROR);
    }

    // 根据微信服务返回的会话信息解密用户数据
    const weixinUserInfo = await service.wechat.decryptUserInfoData(sessionData.session_key,
      fullUserInfo.encryptedData,
      fullUserInfo.iv) as {
        openId: string;
        nickName: string;
        gender: string;
        language: string;
        city: string;
        province: string;
        country: string;
        avatarUrl: string;
        watermark: {
          timestamp: number;
          appid: string;
        }
      };
    logger.info('weixinUserInfo: ');
    logger.info(weixinUserInfo);

    if (!weixinUserInfo) {
      throw new StatusError('登录失败', StatusError.ERROR_STATUS.SERVER_ERROR);
    }

    // 根据openid查找用户是否已经注册
    let user = await model.User.findOne({
      where: { weixinOpenid: sessionData.openid },
      attributes: ['id', 'nickname', 'gender', 'avatar', 'birthday', 'amount', 'mobile', 'score', 'signAt', 'signCount', 'inviter', 'inviterCode'],
      raw: true,
    });
    const now = Date.now();
    if (!user) {
      // 注册
      user = await model.User.create({
        registerTime: now,
        registerIp: clientIp,
        registerFrom: 1,
        lastLoginTime: now,
        lastLoginIp: clientIp,
        mobile: '',
        weixinOpenid: sessionData.openid,
        unionid: sessionData.unionid,
        avatar: userInfo.avatarUrl || '',
        gender: userInfo.gender || 1,
        nickname: userInfo.nickName,
        amount: 0,
        score: 0,
        inviter,
        inviterCode: helper.randomWord(false, 9, 9).toUpperCase(),
      });
    }

    sessionData.userId = user.id;

    // 更新登录信息
    model.User.update({
      lastLoginIp: clientIp,
      lastLoginTime: now,
    }, {
      where: { id: user.id },
    });

    // 创建token
    const token = jwt.sign(sessionData, config.jwtSession.secret);

    response.body = {
      token,
      userInfo: user,
    };
  }

  public async qqMPLogin() {
    const { helper, request, response, logger, app: { httpclient, config }, model } = this.ctx;
    const { code, inviter, userInfo: fullUserInfo } = helper.validateParams({
      code: { type: 'string' },
      inviter: { type: 'string', field: 'inviter', required: false, allowEmpty: true },
      userInfo: { type: 'object' },
    }, request.body, this.ctx);
    const userInfo = fullUserInfo.userInfo;
    const clientIp = ''; // 暂时不记录 ip

    logger.info('code: ' + code);
    logger.info('inviter: ' + inviter);
    logger.info('fullUserInfo: ');
    logger.info(fullUserInfo);

    // 向qq服务器请求登录会话信息
    const sessionData = await httpclient.request('https://api.q.qq.com/sns/jscode2session', {
      method: 'GET',
      data: {
        grant_type: 'authorization_code',
        js_code: code,
        secret: config.qq.secret,
        appid: config.qq.appid,
      },
      dataType: 'json',
    }).then(res => res.data) as {
      session_key: string;
      openid: string;
      unionid: string;
      userId?: number;
    };

    logger.info('sessionData: ');
    logger.info(sessionData);

    if (!sessionData || !sessionData.openid) {
      throw new StatusError('登录失败', StatusError.ERROR_STATUS.SERVER_ERROR);
    }

    // 根据openid查找用户是否已经注册
    let user = await model.User.findOne({
      where: { qqOpenid: sessionData.openid },
      attributes: ['id', 'nickname', 'gender', 'avatar', 'birthday', 'amount', 'mobile', 'score', 'signAt', 'signCount', 'inviter', 'inviterCode'],
      raw: true,
    });
    const now = Date.now();
    if (!user) {
      // 注册
      user = await model.User.create({
        registerTime: now,
        registerIp: clientIp,
        registerFrom: 2,
        lastLoginTime: now,
        lastLoginIp: clientIp,
        mobile: '',
        qqOpenid: sessionData.openid,
        unionid: sessionData.unionid,
        avatar: userInfo.avatarUrl || '',
        gender: userInfo.gender || 1,
        nickname: userInfo.nickName,
        amount: 0,
        score: 0,
        inviter,
        inviterCode: helper.randomWord(false, 9, 9).toUpperCase(),
      });
    }

    sessionData.userId = user.id;

    // 更新登录信息
    model.User.update({
      lastLoginIp: clientIp,
      lastLoginTime: now,
    }, {
      where: { id: user.id },
    });

    // 创建token
    const token = jwt.sign(sessionData, config.jwtSession.secret);

    response.body = {
      token,
      userInfo: user,
    };
  }
}
