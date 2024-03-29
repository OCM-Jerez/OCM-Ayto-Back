// https://docs.nestjs.com/exception-filters#exception-filters-1
// https://docs.nestjs.com/fundamentals/execution-context
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
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const errorResponse = {
      method: request.method,
      path: request.url,
      body: request.body,
      response: exception.getResponse(),
    };

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      errorResponse: errorResponse.response
    });

    Logger.error(JSON.stringify(errorResponse), '', 'http-exception.filter', false);
  }
}
