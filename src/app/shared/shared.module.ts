import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { PerPagePipe } from './pipes/per-page.pipe';



@NgModule({
  declarations: [
    CardComponent,
    PerPagePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    PerPagePipe
  ]
})
export class SharedModule { }
