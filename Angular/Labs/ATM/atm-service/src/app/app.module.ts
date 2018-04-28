import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClearComponent } from './clear/clear.component';
import { AtmServiceService } from './services/atm.service.service';


@NgModule({
  declarations: [
    AppComponent,
    ClearComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AtmServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
