import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  imports: [IonicModule], // Add IonicModule here
})
export class DashboardPage {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/home']);
    });
  }
}