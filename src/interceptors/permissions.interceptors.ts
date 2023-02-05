import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Handler } from 'express';
import { Observable } from 'rxjs';

class CheckPermissions implements NestInterceptor {
  constructor() {}

  intercept(
    ctx: ExecutionContext,
    handler: CallHandler,
  ): Observable<any> | Promise<Observable<any>> {

    const req = ctx.switchToHttp().getRequest()

    
    return handler.handle().pipe()
  }
}
