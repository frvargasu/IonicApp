import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  productos: any[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService, private navCtrl: NavController) {}

  ngOnInit() {
    this.cargarCarrito();
  }

  cargarCarrito() {
    this.productos = this.carritoService.obtenerProductos();
    this.total = this.carritoService.obtenerTotal();
  }

  cambiarCantidad(producto: any, incremento: number) {
    producto.cantidad = Math.max(1, producto.cantidad + incremento);
    this.carritoService.actualizarTotal();
    this.total = this.carritoService.obtenerTotal();
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.cargarCarrito();
  }

  eliminarProducto(nombreProducto: string) {
    this.carritoService.eliminarProducto(nombreProducto);
    this.cargarCarrito();
  }

  volver() {
    this.navCtrl.navigateBack('/menu-productos');
  }
}
