import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: any[] = []; // Cambiamos `never[]` a `any[]`

  constructor() {}

  agregarProducto(producto: any) {
    this.carrito.push(producto);
  }

  obtenerCarrito() {
    return this.carrito;
  }

  eliminarProducto(index: number) {
    this.carrito.splice(index, 1);
  }

  vaciarCarrito() {
    this.carrito = [];
  }
}
