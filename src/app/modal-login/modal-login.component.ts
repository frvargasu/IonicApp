import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent {
  usuario: string = '';
  password: string = '';
  mensajeError: string = '';

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  verificarCredenciales() {
    // Credenciales correctas (puedes cambiar estas credenciales por lo que necesites)
    const usuarioCorrecto = 'usuario123';
    const passwordCorrecta = '12345';

    if (this.usuario === usuarioCorrecto && this.password === passwordCorrecta) {
      this.modalCtrl.dismiss(true); // Cierra el modal con éxito
    } else {
      this.mensajeError = 'Usuario o contraseña incorrectos. Inténtalo de nuevo.';
    }
  }
}
