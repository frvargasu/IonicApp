import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CarritoService } from '../services/carrito.service';
import { ModalDetalleProductoComponent } from '../modal-detalle-producto/modal-detalle-producto.component'; // Importar el componente del modal

@Component({
  selector: 'app-menu-productos',
  templateUrl: './menu-productos.page.html',
  styleUrls: ['./menu-productos.page.scss'],
})
export class MenuProductosPage {
  productos = [
    { nombre: 'Martillo', descripcion: 'Descripción del producto 1', precio: 10000, imagen: 'assets/Martillo.jpg', categoria: 'Construcción', cantidad: 1 },
    { nombre: 'Toldo pergola', descripcion: 'Toldo pergola', precio: 99000, imagen: 'assets/Pergola.jpg', categoria: 'Terraza y Jardín', cantidad: 1 },
    { nombre: 'Pala jardinería', descripcion: 'Una simple pala', precio: 15000, imagen: 'assets/Pala jardineria.jpg', categoria: 'Terraza y Jardín', cantidad: 1 },
    { nombre: 'Ficus lyrata', descripcion: 'Planta decorativa', precio: 232300, imagen: 'assets/Ficus.jpg', categoria: 'Terraza y Jardín', cantidad: 1 },
    { nombre: 'Silla Colgante', descripcion: 'Silla de relajo', precio: 199000, imagen: 'assets/SillaColgante.jpg', categoria: 'Terraza y Jardín', cantidad: 1 },
    { nombre: 'Taladro eléctrico', descripcion: '', precio: 38990, imagen: 'assets/Taladro electrico.jpg', categoria: 'Construcción', cantidad: 1 },
    { nombre: 'Generador electrico a gasolina', descripcion: '', precio: 199000, imagen: 'assets/Generador.jpg', categoria: 'Construcción', cantidad: 1 },
    { nombre: 'Carro porta herramientas', descripcion: '', precio: 29990, imagen: 'assets/CarroPortaHerramientas.jpg', categoria: 'Construcción', cantidad: 1 },
  ];

  categorias = ['Terraza y Jardín', 'Construcción'];
  categoriaSeleccionada = '';

  constructor(
    private navCtrl: NavController,
    private carritoService: CarritoService,
    private modalCtrl: ModalController 
  ) {}

  async verDetalleProducto(producto: any) {
    const modal = await this.modalCtrl.create({
      component: ModalDetalleProductoComponent,
      componentProps: { producto }, 
    });
    return await modal.present();
  }

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    console.log(`Producto agregado al carrito: ${producto.nombre}`);
  }

  cambiarCantidad(producto: any, incremento: number) {
    producto.cantidad = Math.max(1, producto.cantidad + incremento);
  }

  irAlCarrito() {
    this.navCtrl.navigateForward('/carrito');
  }

  volver() {
    this.navCtrl.navigateBack('/login');
  }

  filtrarPorCategoria() {
    if (this.categoriaSeleccionada === '') {
      return this.productos;
    }
    return this.productos.filter(producto => producto.categoria === this.categoriaSeleccionada);
  }
}
