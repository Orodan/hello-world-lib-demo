import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloWorldModule } from 'hello-world-lib/dist/hello-world.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HelloWorldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
