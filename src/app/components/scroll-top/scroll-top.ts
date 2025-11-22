import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-top.html',
  styleUrls: ['./scroll-top.scss']
})
export class ScrollTopComponent implements OnInit {

  show = false;

  ngOnInit() {
    if (typeof window !== 'undefined') {  // evita errores de SSR
      window.addEventListener('scroll', () => {
        this.show = window.scrollY > 300;
      });
    }
  }

  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
