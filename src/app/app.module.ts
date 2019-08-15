
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LockerDirective } from './directives/locker/locker.directive';
import { LockerComponent } from './locker/locker.component';
import { DomService } from './services/dom-service/dom-service.service';

@NgModule({

  declarations: [
    AppComponent,
    LockerDirective,
    LockerComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  entryComponents: [
    LockerComponent
  ],
  providers: [DomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
