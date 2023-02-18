import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as md5 from 'md5';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    const ts = Date.now().toString();
    const apikey = environment.publicKey;
    const hash = md5(ts + environment.secretKey + environment.publicKey);

    const authorizedReq = req.clone({
      params: req.params.appendAll({ ts, apikey, hash })
    });

    return next.handle(authorizedReq);
  }
}
