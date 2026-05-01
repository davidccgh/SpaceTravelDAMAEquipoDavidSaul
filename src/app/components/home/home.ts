import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router: Router) {}

  scrollToStages() {
    const stagesSection = document.getElementById('stages');
    if (stagesSection) {
      stagesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  navigateToStages(fragment?: string) {
    if (fragment) {
      this.router.navigate(['/stages'], { fragment: fragment });
    } else {
      this.router.navigate(['/stages']);
    }
  }

  navigateToMars() {
    this.router.navigate(['/mars']);
  }
}
