import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private carrito: any[] = [];
  private total: number = 0;

  constructor() {}

  obtenerProductos() {
    return this.carrito;
  }

  agregarProducto(producto: any) {
    const productoExistente = this.carrito.find(p => p.nombre === producto.nombre);
    if (productoExistente) {
      productoExistente.cantidad += producto.cantidad;
    } else {
      this.carrito.push({ ...producto });
    }
    this.actualizarTotal();
  }

  actualizarTotal() {
    this.total = this.carrito.reduce((sum, producto) => sum + (producto.precio * producto.cantidad), 0);
  }

  obtenerTotal() {
    return this.total;
  }

  vaciarCarrito() {
    this.carrito = [];
    this.total = 0;
  }

  eliminarProducto(nombreProducto: string) {
    this.carrito = this.carrito.filter(producto => producto.nombre !== nombreProducto);
    this.actualizarTotal();
  }
}
