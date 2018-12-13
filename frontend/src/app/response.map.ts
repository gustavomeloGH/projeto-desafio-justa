import { Observable } from 'rxjs';
import 'rxjs-compat/add/operator/timeout';
import 'rxjs-compat/add/operator/catch';
import { throwError } from 'rxjs/internal/observable/throwError';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/map';

export class ResponseMap<T> {

    private static _timeout = 100000;
    private privateIsHideTitleSuccess: boolean;

    constructor(private privateNotifierToastr: ToastrService,
                private privateObservable: Observable<T>) {
      this.privateIsHideTitleSuccess = false;
    }

    public hideTitleSuccess(isHideTitleSuccess: boolean): this {
      this.privateIsHideTitleSuccess = isHideTitleSuccess;
      return this;
    }

    public observable(): Observable<T> {

      return this.privateObservable.timeout(ResponseMap._timeout).map((data: T): T => {

          if (!this.privateIsHideTitleSuccess) {
            this.privateNotifierToastr.success('Operação realizada com sucesso!', null);
          }
          return data;

      }).catch((httpErrorResponse: HttpErrorResponse): Observable<any> => {
          this.privateNotifierToastr.error(null, 'Operação não foi realizada');

        return throwError(httpErrorResponse);
      });

    }

}
