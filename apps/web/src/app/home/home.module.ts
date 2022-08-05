import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from '@app/web/shared';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
