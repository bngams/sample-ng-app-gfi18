import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsModule } from './products/products.module';
import { ShareModule } from './share/share.module';
import { LoginModule } from './login/login.module';

// i18npipes
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { MessageService } from './message.service';
import { TchatComponent } from './components/tchat/tchat.component';
import { FormsModule } from '@angular/forms';
// the second parameter 'fr' is optional
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    TchatComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ProductsModule,
    LoginModule,
    AppRoutingModule,
    ShareModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
