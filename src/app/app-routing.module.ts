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
        loadChildren: () => import('./contact/contact.module')
          .then(c => c.ContactModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module')
          .then(c => c.OrderModule)
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
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module')
      .then(a => a.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    /* Por defecto el no match siempre hay que dejarlo al ultimo 
    para que pueda hacer match con las demás rutas */
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module')
      .then(n => n.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
