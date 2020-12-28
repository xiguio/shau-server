// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth from '../../../app/controller/auth';
import ExportCategory from '../../../app/controller/category';
import ExportHome from '../../../app/controller/home';
import ExportResource from '../../../app/controller/resource';
import ExportScore from '../../../app/controller/score';
import ExportSign from '../../../app/controller/sign';
import ExportSystem from '../../../app/controller/system';
import ExportUser from '../../../app/controller/user';
import ExportVip from '../../../app/controller/vip';

declare module 'egg' {
  interface IController {
    auth: ExportAuth;
    category: ExportCategory;
    home: ExportHome;
    resource: ExportResource;
    score: ExportScore;
    sign: ExportSign;
    system: ExportSystem;
    user: ExportUser;
    vip: ExportVip;
  }
}
