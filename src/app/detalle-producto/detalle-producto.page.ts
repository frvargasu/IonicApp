import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  producto: any;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private carritoService: CarritoService, 
    private toastCtrl: ToastController 
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['producto']) {
        this.producto = JSON.parse(params['producto']);
      }
    });
  }

  agregarAlCarrito() {
    this.carritoService.agregarProducto(this.producto);
    this.presentToast(`Producto agregado al carrito: ${this.producto.nombre}`);
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
    this.navCtrl.navigateBack('/menu-productos');
  }
}
