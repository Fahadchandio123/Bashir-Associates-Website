import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Portfolio } from '../../sections/portfolio/portfolio';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, Portfolio],
  template: `<app-portfolio style="display: block; padding-top: 100px;"></app-portfolio>`
})
export class Projects {}
