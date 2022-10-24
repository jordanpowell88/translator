import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { TranslationComponent } from './translation/translation.component';
import { StateModule } from '@caribbean-developers-conference/state';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InputComponent,
    ButtonComponent,
    TranslationComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, HttpClientModule, StateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
