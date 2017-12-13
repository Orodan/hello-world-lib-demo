import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HelloWorldModule } from 'hello-world-lib/dist/hello-world.module';
import { NgSelectorModule } from 'ng-selector';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HelloWorldModule,
    NgSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
