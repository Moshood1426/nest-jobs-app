import {
  NestInterceptor,
  Injectable,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class GenTokenInterceptor implements NestInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    return handler.handle().pipe(
      map((data) => {
        const payload = { userId: data.id, email: data.email };
        return {
          ...data,
          token: this.jwtService.sign(payload),
        };
      }),
    );
  }
}
