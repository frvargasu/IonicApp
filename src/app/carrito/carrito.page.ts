import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { NavController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  productos: any[] = [];
  total: number = 0;

  constructor(
    private carritoService: CarritoService, 
    private navCtrl: NavController,
    private toastCtrl: ToastController, 
    private alertCtrl: AlertController 
  ) {}

  ngOnInit() {
    this.cargarCarrito();
  }

  // agregar productos del carrito y el total
  cargarCarrito() {
    this.productos = this.carritoService.obtenerProductos();
    this.total = this.carritoService.obtenerTotal();
  }

  // opcion para cambiar la cantidad de productos y actualizar el total
  cambiarCantidad(producto: any, incremento: number) {
    producto.cantidad = Math.max(1, producto.cantidad + incremento);
    this.carritoService.actualizarTotal();
    this.total = this.carritoService.obtenerTotal();
  }

  // aca se confirmar y se vacia el carrito
  async vaciarCarrito() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas vaciar el carrito?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.carritoService.vaciarCarrito();
            this.cargarCarrito();
            this.presentToast('Carrito vaciado con éxito');
          }
        }
      ]
    });
    await alert.present();
  }

  // eliminar un producto del carrito
  async eliminarProducto(nombreProducto: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: `¿Estás seguro de que deseas eliminar ${nombreProducto} del carrito?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.carritoService.eliminarProducto(nombreProducto);
            this.cargarCarrito();
            this.presentToast(`${nombreProducto} eliminado del carrito`);
          }
        }
      ]
    });
    await alert.present();
  }

  
  private async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    await toast.present();
  }

  // volver al menu de productos
  volver() {
    this.navCtrl.navigateBack('/menu-productos');
  }
}
