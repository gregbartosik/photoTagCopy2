import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditshoppinglistPageRoutingModule } from './editshoppinglist-routing.module';

import { EditshoppinglistPage } from './editshoppinglist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditshoppinglistPageRoutingModule
  ],
  declarations: [EditshoppinglistPage]
})
export class EditshoppinglistPageModule {}
