import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { TruncPipe } from './pipes/trunc.pipe';


@NgModule({
  declarations: [
    TruncPipe
  ],
  exports: [
    TruncPipe
  ],
  providers: [
    ApiService
  ]
})
export class ShareModule { }
