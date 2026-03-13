import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../sections/hero/hero';
import { About as AboutSection } from '../../sections/about/about';
import { Portfolio } from '../../sections/portfolio/portfolio';
import { Services as ServicesSection } from '../../sections/services/services';
import { Contact as ContactSection } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Hero, AboutSection, Portfolio, ServicesSection, ContactSection],
  template: `
    <app-hero id="home"></app-hero>
    <app-about id="about"></app-about>
    <app-portfolio id="projects"></app-portfolio>
    <app-services id="services"></app-services>
    <app-contact id="contact"></app-contact>
  `
})
export class Home {}
