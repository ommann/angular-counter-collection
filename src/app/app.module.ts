import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation.component';
import { Counter1Component } from './pages/counter1.component';
import { Counter2Component } from './pages/counter2.component';
import { Counter3Component } from './pages/counter3.component';
import { Counter4Component } from './pages/counter4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Counter1Component,
    Counter2Component,
    Counter3Component,
    Counter4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
