import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthServiceConfig, GoogleLoginProvider, AuthService } from "angular-6-social-login";
import { AddNoteComponent } from './add-note/add-note.component';


let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("675283681670-fci7c9nmd9ft6p6ehgu7s300gmr2srgu.apps.googleusercontent.com")
    }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    HomeComponent,
    PageNotFoundComponent,
    AddNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
        provide: AuthServiceConfig,
        useFactory: provideConfig
    },
   AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
