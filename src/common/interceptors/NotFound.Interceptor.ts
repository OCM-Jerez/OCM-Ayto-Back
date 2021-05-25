/* Diferecias entre Interceptors, Middleware y Exceptions Filters
https://stackoverflow.com/questions/54863655/whats-the-difference-between-interceptor-vs-middleware-vs-filter-in-nest-js
https://docs.nestjs.com/middleware
https://docs.nestjs.com/middleware#middleware
https://docs.nestjs.com/exception-filters#exception-filters

Este ejemplo de Intenceptor esta en:
https://stackoverflow.com/questions/49709429/decorator-to-return-a-404-in-a-nest-controller/51918372#51918372
*/

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  NotFoundException,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  constructor(private errorMessage: string) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((data) => {
        console.log('data', data);
        switch (data) {
          case undefined:
            throw new NotFoundException(this.errorMessage);
          case 1:
            console.log('Registro borrado con exito');
            break;
          case 0:
            throw new NotFoundException(this.errorMessage);
          default:
            break;
        }
      }),
    );
  }
}
