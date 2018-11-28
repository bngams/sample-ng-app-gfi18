import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { TruncPipe } from './pipes/trunc.pipe';
import { SecurityModule } from '../security/security.module';


@NgModule({
  declarations: [
    TruncPipe
  ],
  exports: [
    TruncPipe,
    SecurityModule
  ],
  providers: [
    ApiService
  ],
  imports: [SecurityModule]
})
export class ShareModule { }
