import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  private lastScrollTop = 0;

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  private handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.querySelector('.navbar');

    if (navbar) {
      if (scrollTop > this.lastScrollTop) {
        // Scrolling down
        navbar.classList.add('navbar-hidden');
      } else {
        // Scrolling up
        navbar.classList.remove('navbar-hidden');
      }
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}
