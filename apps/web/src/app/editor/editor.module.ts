import { NgModule } from '@angular/core';

import { EditorComponent } from './editor.component';

import { SharedModule } from '@app/web/shared';
import { EditorRoutingModule } from './editor-routing.module';

@NgModule({
  imports: [SharedModule, EditorRoutingModule],
  declarations: [EditorComponent],
  providers: [],
})
export class EditorModule {}
