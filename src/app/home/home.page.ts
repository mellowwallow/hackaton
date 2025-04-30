import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class HomePage {
  email: string = '';
  password: string = '';
  isLogin: boolean = true; // toggle between login/register form

  constructor(
    private authService: AuthService,
    private toastController: ToastController
  ) {}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }

  login() {
    this.authService.loginUser(this.email, this.password).subscribe(
      () => this.presentToast('You have successfully logged in!'),
      (error) => this.presentToast('Login failed. Please try again.')
    );
  }

  register() {
    this.authService.registerUser(this.email, this.password).subscribe(
      () => this.presentToast('You have successfully registered!'),
      (error) => this.presentToast('Registration failed. Please try again.')
    );
  }
}
