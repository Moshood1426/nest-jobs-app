import { Injectable, CanActivate, ExecutionContext} from "@nestjs/common";
import { Observable } from "rxjs"

@Injectable()
class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): Observable<boolean> {
        const req = context.switchToHttp().getRequest()

        
    }
}