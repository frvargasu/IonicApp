import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuProductosPageRoutingModule } from './menu-productos-routing.module';

import { MenuProductosPage } from './menu-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuProductosPageRoutingModule
  ],
  declarations: [MenuProductosPage]
})
export class MenuProductosPageModule {}
