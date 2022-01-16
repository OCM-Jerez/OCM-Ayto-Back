import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request, Response } from 'express';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Obtenemos todos los datos del Request    
    const req: Request = context.switchToHttp().getRequest();
    // console.log(req);

    Logger.debug(
      `${context.getClass().name}.${context.getHandler().name}() : ${req.method
      } : ${req.url}`,
      'LoggingInterceptor',
      false,
    );

    // Obtenemos todos los datos de la Response   
    // const res: Response = context.switchToHttp().getResponse();
    // console.log(res);

    return next.handle();
  }
}
