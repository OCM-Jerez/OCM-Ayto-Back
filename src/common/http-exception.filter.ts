import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Request } from 'express';
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

    Logger.error(JSON.stringify(errorResponse), '', 'ExceptionFilter', false);
  }
}
