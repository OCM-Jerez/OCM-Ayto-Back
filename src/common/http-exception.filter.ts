import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

// @Catch(HttpException)
// export class HttpExceptionFilter implements ExceptionFilter {
//   catch(exception: HttpException, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse<Response>();
//     const request = ctx.getRequest<Request>();
//     const status = exception.getStatus()
//       ? exception.getStatus()
//       : HttpStatus.INTERNAL_SERVER_ERROR;

//     const errorResponse = {
//       code: status,
//       timestamp: new Date().toLocaleDateString(),
//       path: request.url,
//       method: request.method,
//       message:
//         status !== HttpStatus.INTERNAL_SERVER_ERROR
//           ? exception.message || exception.message || null
//           : 'Internal server error',
//     };

//     if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
//       Logger.error(
//         `${request.method} ${request.url}`,
//         exception.stack,
//         'ExceptionFilter',
//       );
//     } else {
//       Logger.error(
//         `${request.method} ${request.url}`,
//         JSON.stringify(errorResponse),
//         'ExceptionFilter',
//       );
//     }

//     // response.status(status).json(errorResponse);
//   }

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    // const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    // const status = exception.getStatus();
    // const message = exception.getResponse();

    const errorResponse = {
      // code: exception.getStatus(),
      // timestamp: new Date().toLocaleDateString(),
      method: request.method,
      path: request.url,
      response: exception.getResponse(),
    };

    Logger.error(
      // `${request.method} ${request.url}`,
      JSON.stringify(errorResponse),
      '',
      'ExceptionFilter',
      false,
    );
  }
}
