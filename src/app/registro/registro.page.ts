import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  usuario = {
    nombre: '',
    apellido: '',
    nivelEducacion: '',
    fechaNacimiento: ''
  };

  constructor(private router: Router) {}

  registrar() {
    let mensajesErrores = [];
    
    if (!this.usuario.nombre.trim()) {
      mensajesErrores.push("El nombre es obligatorio");
    }
    if (!this.usuario.apellido.trim()) {
      mensajesErrores.push("El apellido es obligatorio");
    }
    if (!this.usuario.nivelEducacion.trim()) {
      mensajesErrores.push("El nivel de educación es obligatorio");
    }
    if (!this.usuario.fechaNacimiento) {
      mensajesErrores.push("La fecha de nacimiento es obligatoria");
    }

    if (mensajesErrores.length > 0) {
      alert(mensajesErrores.join('\n'));
    } else {
      // Guardar los datos en el local storage para simular una base de datos
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
      alert('Registro exitoso, ahora puedes iniciar sesión');
      this.router.navigate(['/login']);
    }
  }

  volver() {
    this.router.navigate(['/login']);
  }
}
