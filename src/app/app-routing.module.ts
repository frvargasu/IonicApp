import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Redirige a la página de login por defecto
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Ruta para la página de login
  { 
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) 
  },

  // Ruta para la página de tabs (si es necesaria)
  { 
    path: 'tabs', 
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) 
  },

  // Ruta para la página del menú de productos
  { 
    path: 'menu-productos', 
    loadChildren: () => import('./menu-productos/menu-productos.module').then(m => m.MenuProductosPageModule) 
  },

  // Ruta para la página de detalle de producto
  {
    path: 'detalle-producto',
    loadChildren: () => import('./detalle-producto/detalle-producto.module').then(m => m.DetalleProductoPageModule)
  },  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
