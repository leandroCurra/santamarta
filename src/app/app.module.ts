import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MobileNavBArComponent } from './components/mobile-nav-bar/mobile-nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieAnimationViewModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
