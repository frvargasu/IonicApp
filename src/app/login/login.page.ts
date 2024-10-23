import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ModalLoginComponent } from '../modal-login/modal-login.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  async navigateToMenu() {
    // Crea el modal de solicitud de usuario y contraseña
    const modal = await this.modalCtrl.create({
      component: ModalLoginComponent,
    });

    // Muestra el modal
    await modal.present();

    // Espera el resultado del modal
    const { data } = await modal.onDidDismiss();

    // Si las credenciales son correctas, navega al menú de productos
    if (data) {
      this.navCtrl.navigateForward('/menu-productos');
    }
  }
}
