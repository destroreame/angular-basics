import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovaTranfenciaComponent } from './nova-tranfencia/nova-tranfencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import locatePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(locatePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovaTranfenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
