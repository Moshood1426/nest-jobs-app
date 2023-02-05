import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map, Observable } from 'rxjs';


export class SerializeInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {

    return next.handle().pipe(map((data) => {
        
    }))
  }
}
