import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewcarouselPage } from './viewcarousel.page';

const routes: Routes = [
  {
    path: '',
    component: ViewcarouselPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewcarouselPageRoutingModule {}
