import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: AuthService, useClass: environment.authClass }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
