/*
 * @Author: xigu.io
 * @Date: 2018-07-09 15:26:01
 * @Last Modified by: yarn🤡
 * @Last Modified time: 2018-07-09 15:27:18
 * 分页接口
 */

export interface IPage {
  count: number;
  totalPages: number;
  pageSize: number;
  currentPage: number;
  list: any[];
}
