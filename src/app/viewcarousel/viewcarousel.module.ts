import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewcarouselPageRoutingModule } from './viewcarousel-routing.module';

import { ViewcarouselPage } from './viewcarousel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewcarouselPageRoutingModule
  ],
  declarations: [ViewcarouselPage]
})
export class ViewcarouselPageModule {}
