import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-login.html',
  styleUrl: './auth-login.css',
})
export class AuthLogin {
  isLoginMode = true;

  loginData = {
    email: '',
    password: '',
  };

  signupData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.resetForms();
  }

  onLogin(form: any) {
    if (form.valid) {
      console.log('Login:', this.loginData);
      // Aquí iría la lógica de autenticación
      alert('Login submitted! (Demo only)');
      this.loginData = { email: '', password: '' };
    }
  }

  onSignup(form: any) {
    if (form.valid) {
      if (this.signupData.password !== this.signupData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Signup:', this.signupData);
      // Aquí iría la lógica de registro
      alert('Signup submitted! (Demo only)');
      this.signupData = { name: '', email: '', password: '', confirmPassword: '' };
    }
  }

  private resetForms() {
    this.loginData = { email: '', password: '' };
    this.signupData = { name: '', email: '', password: '', confirmPassword: '' };
  }
}
