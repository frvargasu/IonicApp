import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = ''; 
  password: string = ''; 

  constructor(private navCtrl: NavController) { }

  // funcion de login
  login() {
    if (this.email === 'usuario@linio.com' && this.password === '123456') {
      console.log('Login exitoso');
      this.navCtrl.navigateForward('/home');
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
