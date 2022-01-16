import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  // constructor(private errorMessage: string) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('NotFoundInterceptor');
    // console.log('context: ', context);

    return next.handle().pipe(
      tap((data) => {
        if (!data) {
          console.log('No existe data, por tanto lanza un error');
          // throw new NotFoundException();
          throw new NotFoundException('string or object describing the error condition.', 'Mi mensaje personalizado');
        }
        if (data.affected == 0) {
          console.log('data.affected = 0');
          throw new NotFoundException();
        }
      }),
    );
  }
}
