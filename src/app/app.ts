import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { ScrollTopComponent } from './components/scroll-top/scroll-top';
import { SocialMedia } from './components/social-media/social-media';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ScrollTopComponent, SocialMedia],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-portfolio');
  
}
