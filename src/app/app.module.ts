import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { JetztPage } from '../pages/jetzt/jetzt';
import { SchedulePage } from '../pages/schedule/schedule';
import { SponsorsPage } from '../pages/sponsors/sponsors';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { HelpMePage } from '../pages/help-me/help-me';
import { DetailsPage } from '../pages/details/details';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { IntenseSessionsPage } from '../pages/intense-sessions/intense-sessions';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    JetztPage,
    SchedulePage,
    SponsorsPage,
    TabsControllerPage,
    HelpMePage,
    DetailsPage,
    SettingsPage,
    LoginPage,
    IntenseSessionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    JetztPage,
    SchedulePage,
    SponsorsPage,
    TabsControllerPage,
    HelpMePage,
    DetailsPage,
    SettingsPage,
    LoginPage,
    IntenseSessionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}