import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // This must be imported

@Component({
  selector: 'app-component11',
  imports: [CommonModule, FormsModule],
  templateUrl: './component11.component.html',
  styleUrl: './component11.component.css'
})
export class Component11Component {
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username === 'admin' && this.password === 'password') {
      alert('Credenciales válidas, ingreso exitoso!');
      localStorage.setItem('masterButtonDisable', 'true');
      localStorage.setItem('userPIN', this.username);
    } else {
      alert('Credenciales ingresadas son inválidas!');
      localStorage.setItem('masterButtonDisable', 'false');
      localStorage.setItem('userPIN', '');
    }
  }
}
