import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {SuccessalertComponent} from './alerts/successalert.component';
import {WarningalertComponent} from './alerts/warningalert.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessalertComponent,
    WarningalertComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
