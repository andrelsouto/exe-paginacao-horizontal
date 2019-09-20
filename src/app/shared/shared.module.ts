import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { PerPagePipe } from './pipes/per-page.pipe';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    CardComponent,
    PerPagePipe,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    PerPagePipe,
    MenuComponent,
    RouterModule
  ]
})
export class SharedModule { }
