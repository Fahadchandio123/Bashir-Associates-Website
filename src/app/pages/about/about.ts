import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { About as AboutSection } from '../../sections/about/about';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, AboutSection],
  template: `<app-about style="display: block; padding-top: 100px;"></app-about>`
})
export class About {}
