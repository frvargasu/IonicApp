import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  async navigateToMenu() {
    const alert = await this.alertController.create({
      header: 'Ingrese su usuario',
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Usuario',
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Contraseña',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            if (data.username === 'usuario' && data.password === 'contraseña') {
              this.navCtrl.navigateForward('/menu-productos');
            } else {
              this.presentAlertIncorrectCredentials();
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertIncorrectCredentials() {
    const alert = await this.alertController.create({
      header: 'Credenciales Incorrectas',
      message: 'El usuario o la contraseña ingresados no son correctos. Intentalo de nuevo.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
