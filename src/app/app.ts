import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './core/navbar/navbar';
import { Footer } from './core/footer/footer';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Portfolio } from './sections/portfolio/portfolio';
import { Services } from './sections/services/services';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Footer,
    Hero,
    About,
    Portfolio,
    Services,
    Contact
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero id="home"></app-hero>
      <app-about id="about"></app-about>
      <app-portfolio id="projects"></app-portfolio>
      <app-services id="services"></app-services>
      <app-contact id="contact"></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      width: 100%;
    }
  `]
})
export class App {}
