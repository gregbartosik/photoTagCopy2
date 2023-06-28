import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'capture',
    pathMatch: 'full'
  },
  {
    path: 'capture',
    loadChildren: () => import('./capture/capture.module').then( m => m.CapturePageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'viewcarousel',
    loadChildren: () => import('./viewcarousel/viewcarousel.module').then( m => m.ViewcarouselPageModule)
  },
  {
    path: 'editshoppinglist',
    loadChildren: () => import('./editshoppinglist/editshoppinglist.module').then( m => m.EditshoppinglistPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },


  //{ path: 'home', component: HomeComponent }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
