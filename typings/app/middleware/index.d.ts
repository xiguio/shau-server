// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportJwtSession from '../../../app/middleware/jwt_session';
import ExportResponseHandler from '../../../app/middleware/response_handler';

declare module 'egg' {
  interface IMiddleware {
    jwtSession: typeof ExportJwtSession;
    responseHandler: typeof ExportResponseHandler;
  }
}
