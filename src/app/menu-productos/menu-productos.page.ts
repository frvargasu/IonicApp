import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-menu-productos',
  templateUrl: './menu-productos.page.html',
  styleUrls: ['./menu-productos.page.scss'],
})
export class MenuProductosPage {
  productos = [
    { nombre: 'Martillo', descripcion: 'Descripción del producto 1', precio: 10000, imagen: 'assets/Martillo.jpg' },
    { nombre: 'Pala jardinería', descripcion: 'Una simple pala', precio: 15000, imagen: 'assets/Pala jardineria.jpg' },
    { nombre: 'Taladro eléctrico', descripcion: '', precio: 38990, imagen: 'assets/Taladro electrico.jpg' },
    // Agrega más productos según lo necesites
  ];

  constructor(private navCtrl: NavController, private carritoService: CarritoService) {}

  verDetalleProducto(producto: any) {
    this.navCtrl.navigateForward('/detalle-producto', {
      queryParams: {
        producto: JSON.stringify(producto),
      },
    });
  }

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    console.log(`Producto agregado al carrito: ${producto.nombre}`);
  }

  irAlCarrito() {
    this.navCtrl.navigateForward('/carrito');
  }

  volver() {
    this.navCtrl.navigateBack('/login');
  }
}
