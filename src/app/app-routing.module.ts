import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,    
    children: [
      {
        path: '',
        redirectTo:'/home', 
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module')
          .then(h => h.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module')
        .then(p => p.ProductModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./contact/contact.module')
          .then(c => c.ContactModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module')
          .then(d => d.DemoModule)
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(a => a.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module')
      .then(n => n.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
