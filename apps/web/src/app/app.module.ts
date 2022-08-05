import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from '@app/web/pages/auth';
import { HomeModule } from '@app/web/pages/home';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule,
} from '@app/web/shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@app/web/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CoreModule.forRoot(environment),
    SharedModule,
    HomeModule,
    AuthModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
