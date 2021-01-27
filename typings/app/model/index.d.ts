// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCategory from '../../../app/model/category';
import ExportResource from '../../../app/model/resource';
import ExportScore from '../../../app/model/score';
import ExportSign from '../../../app/model/sign';
import ExportSystem from '../../../app/model/system';
import ExportUser from '../../../app/model/user';
import ExportVip from '../../../app/model/vip';

declare module 'egg' {
  interface IModel {
    Category: ReturnType<typeof ExportCategory>;
    Resource: ReturnType<typeof ExportResource>;
    Score: ReturnType<typeof ExportScore>;
    Sign: ReturnType<typeof ExportSign>;
    System: ReturnType<typeof ExportSystem>;
    User: ReturnType<typeof ExportUser>;
    Vip: ReturnType<typeof ExportVip>;
  }
}
