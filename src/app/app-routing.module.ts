import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './layout/master/master.component';
import { PublicComponent } from './layout/public/public.component';


const routes: Routes = [

  {
    path: '',
    component: MasterComponent,
    loadChildren: () =>
      import('./components/dashboard/_module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'dashboard',
    component: MasterComponent,
    loadChildren: () =>
      import('./components/dashboard/_module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'about',
    component: MasterComponent,
    loadChildren: () =>
      import('./components/about/_module').then(
        (m) => m.AboutModule
      ),
  },
  {
    path: 'contact',
    component: MasterComponent,
    loadChildren: () =>
      import('./components/contact/_module').then(
        (m) => m.ContactModule
      ),
  },
  {
    path: 'gallery',
    component: MasterComponent,
    loadChildren: () =>
      import('./components/gallery/_module').then(
        (m) => m.GalleryModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
