import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { register } from 'swiper/element/bundle';

Swiper.use([Navigation]);
register();

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],   // <-- AGREGADO
})

export class Portfolio {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      register();
    }
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    new Swiper('.mySwiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    this.startTyping();
  }

  scrollToProjects() {
    const section = document.querySelector('.technologies');
    section?.scrollIntoView({ behavior: 'smooth' });
  }




  // === TYPING ANIMATION ===
  typingInterval: any;
  deleteInterval: any;

  startTyping() {
    if (!isPlatformBrowser(this.platformId)) return;

    const words = [
      'Full Stack Developer',
      'Systems Analyst',
      'Backend Lover',
      'Problem Solver'
    ];

    let i = 0;
    let index = 0;
    let deleting = false;
    let current = '';

    this.typingInterval = setInterval(() => {

      const el = document.getElementById('typing-text');
      if (!el) return;

      if (!deleting) current = words[i].substring(0, index++);
      else current = words[i].substring(0, index--);

      el.textContent = current;

      if (index === words[i].length && !deleting) deleting = true;
      if (index === 0 && deleting) {
        deleting = false;
        i = (i + 1) % words.length;
      }

    }, 100);
  }

  ngOnDestroy() {
    clearInterval(this.typingInterval);
  }
}


