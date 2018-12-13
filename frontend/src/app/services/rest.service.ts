import { Injectable } from '@angular/core';
import { ResponseMap } from '../response.map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http/src/params';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';


@Injectable()
export class RestService {

    private headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });

    constructor(private httpClient: HttpClient,
                private notifierToastr: ToastrService ) {

    }

    private static resolve(path: string): string {
        return `${environment.endpoints.baseUrl}/${path}`;
    }

    public get<T>(url: string, queryString?: HttpParams): ResponseMap<T> {
        return new ResponseMap<T>(this.notifierToastr, this.httpClient.get<T>(RestService.resolve(url), {
            headers: this.headers,
            observe: 'body',
            params: queryString,
            responseType: 'json'
        }));
    }

    public delete<T>(url: string, queryString?: any): ResponseMap<T> {
        return new ResponseMap<T>(this.notifierToastr, this.httpClient.delete<T>(RestService.resolve(url), {
            headers: this.headers,
            observe: 'body',
            params: queryString,
            responseType: 'json'
        }));
    }

    public post<T>(url: string, data: any, queryString?: any): ResponseMap<T> {
        return new ResponseMap<T>(this.notifierToastr, this.httpClient.post<T>(RestService.resolve(url), data, {
          headers: this.headers,
          observe: 'body',
          params: queryString,
          responseType: 'json'
        }));
    }

    public put<T>(url: string, data: any, queryString?: any): ResponseMap<T> {
        return new ResponseMap<T>(this.notifierToastr, this.httpClient.put<T>(RestService.resolve(url), data, {
          headers: this.headers,
          observe: 'body',
          params: queryString,
          responseType: 'json'
        }));
    }
}
