import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [

  ],
  providers: [
    AuthGuard
  ],
})
export class SecurityModule { }
