import { Component } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { CarritoService } from '../services/carrito.service';
import { ModalDetalleProductoComponent } from '../modal-detalle-producto/modal-detalle-producto.component';

@Component({
  selector: 'app-menu-productos',
  templateUrl: './menu-productos.page.html',
  styleUrls: ['./menu-productos.page.scss'],
})
export class MenuProductosPage {
  productos = [
    { nombre: 'Martillo', descripcion: 'Descripcion', precio: 10000, imagen: 'assets/Martillo.jpg', categoria: 'Construcción', cantidad: 1 },
    { nombre: 'Toldo pergola', descripcion: 'Toldo para terraza', precio: 99000, imagen: 'assets/Pergola.jpg', categoria: 'Terraza y Jardín', cantidad: 1 },
    { nombre: 'Pala jardineria', descripcion: 'Una simple pala', precio: 15000, imagen: 'assets/Pala jardineria.jpg', categoria: 'Terraza y Jardín', cantidad: 1 },
    { nombre: 'Ficus lyrata', descripcion: 'Planta decorativa', precio: 232300, imagen: 'assets/Ficus.jpg', categoria: 'Terraza y Jardín', cantidad: 1 },
    { nombre: 'Silla Colgante', descripcion: 'Silla de relajo', precio: 199000, imagen: 'assets/SillaColgante.jpg', categoria: 'Terraza y Jardín', cantidad: 1 },
    { nombre: 'Taladro electrico', descripcion: 'Taladro potente', precio: 38990, imagen: 'assets/Taladro electrico.jpg', categoria: 'Construcción', cantidad: 1 },
    { nombre: 'Generador electrico', descripcion: 'Generador de emergencia', precio: 199000, imagen: 'assets/Generador.jpg', categoria: 'Construcción', cantidad: 1 },
    { nombre: 'Porta herramientas', descripcion: 'Carro practico', precio: 29990, imagen: 'assets/CarroPortaHerramientas.jpg', categoria: 'Construcción', cantidad: 1 },
  ];

  categorias = ['Todas', 'Terraza y Jardín', 'Construcción'];
  categoriaSeleccionada = 'Todas';

  constructor(
    private navCtrl: NavController,
    private carritoService: CarritoService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController 
  ) {}

  
  async verDetalleProducto(producto: any) {
    const modal = await this.modalCtrl.create({
      component: ModalDetalleProductoComponent,
      componentProps: { producto }, 
    });
    await modal.present();
  }

  
  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    this.presentToast(`Producto agregado: ${producto.nombre}`);
  }

  
  cambiarCantidad(producto: any, incremento: number) {
    producto.cantidad = Math.max(1, producto.cantidad + incremento);
  }

 
  irAlCarrito() {
    this.navCtrl.navigateForward('/carrito');
  }

  
  filtrarPorCategoria() {
    if (this.categoriaSeleccionada === 'Todas') {
      return this.productos;
    }
    return this.productos.filter(producto => producto.categoria === this.categoriaSeleccionada);
  }

  private async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color: 'success',
      position: 'top',
    });
    await toast.present();
  }

  volver() {
    this.navCtrl.navigateBack('/login');
  }
}
