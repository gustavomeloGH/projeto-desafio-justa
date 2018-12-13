import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListComponent } from './list/list.component';
import { SaveComponent } from './save/save.component';
import { MainComponent } from './main/main.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestService } from './services/rest.service';
import { ToastrModule, ToastNoAnimationModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { routes } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SaveComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgxErrorsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5500,
      extendedTimeOut: 3500,
      easeTime: 300,
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [RestService, FormGroupDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
