import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { environment } from '@env/environment';
import { githubAPIConfig } from '@app/app.config';
import { HttpResponse } from 'selenium-webdriver/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private token = environment.GITHUB_API_TOKEN;

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `token ${this.token}`
      }
      // setParams: {
      //   'per_page': githubAPIConfig.perPage
      // }
    });

    return next.handle(request);
  }
}
