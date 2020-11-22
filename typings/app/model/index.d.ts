// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCategory from '../../../app/model/category';
import ExportResource from '../../../app/model/resource';
import ExportSystem from '../../../app/model/system';
import ExportUser from '../../../app/model/user';
import ExportVip from '../../../app/model/vip';

declare module 'egg' {
  interface IModel {
    Category: ReturnType<typeof ExportCategory>;
    Resource: ReturnType<typeof ExportResource>;
    System: ReturnType<typeof ExportSystem>;
    User: ReturnType<typeof ExportUser>;
    Vip: ReturnType<typeof ExportVip>;
  }
}
