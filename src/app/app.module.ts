import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData, CurrencyPipe } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { UiModule } from './ui/ui.module';
import { environment } from '../environments/environment.firebase';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    LoginModule,
    PageNotFoundModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
