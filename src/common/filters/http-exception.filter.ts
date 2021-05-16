/* eslint-disable prettier/prettier */
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();

    const errorResponse = {
      method: request.method,
      path: request.url,
      response: exception.getResponse(),
    };

    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    response
    .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });

      Logger.error(JSON.stringify(errorResponse), '', 'ExceptionFilter', false);

    }


}
