import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//TO USE NG OPTIONS IN FORMS

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyCoolBindingsComponent } from './my-cool-bindings/my-cool-bindings.component';
import { InputThingsComponent } from './input-things/input-things.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MyCoolBindingsComponent,
    InputThingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    //TO USE NG OPTIONS IN FORMS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
