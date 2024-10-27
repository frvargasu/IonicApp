import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },

{
path: 'login',
loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
},

{
path: 'menu-productos',
loadChildren: () => import('./menu-productos/menu-productos.module').then(m => m.MenuProductosPageModule)
},

{
path: 'detalle-producto',
loadChildren: () => import('./detalle-producto/detalle-producto.module').then(m => m.DetalleProductoPageModule)
},

{
path: 'carrito',
loadChildren: () => import('./carrito/carrito.module').then(m => m.CarritoPageModule)
}
];

@NgModule({
imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
],
exports: [RouterModule]
})
export class AppRoutingModule {}