import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MovieProvider } from '../providers/movie/movie';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { AboutPageModule } from '../pages/about/about.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { MovieDetailsPageModule } from '../pages/movie-details/movie-details.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    FeedPageModule,
    IntroPageModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    SettingsPageModule,
    AboutPageModule,
    ProfilePageModule,
    MovieDetailsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
