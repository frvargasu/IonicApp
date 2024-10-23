import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  productosCarrito: any[] = []; // Cambiamos `never[]` a `any[]`

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.productosCarrito = this.carritoService.obtenerCarrito();
  }

  eliminarDelCarrito(index: number) {
    this.carritoService.eliminarProducto(index);
  }
}
