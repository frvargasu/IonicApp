import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  producto: any;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['producto']) {
        this.producto = JSON.parse(params['producto']);
      }
    });
  }

  agregarAlCarrito() {
    // Aquí puedes agregar la lógica para agregar el producto al carrito
    console.log(`Producto agregado al carrito: ${this.producto.nombre}`);
  }
}
