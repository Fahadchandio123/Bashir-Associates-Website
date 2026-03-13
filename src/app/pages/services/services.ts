import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services as ServicesSection } from '../../sections/services/services';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, ServicesSection],
  template: `<app-services style="display: block; padding-top: 100px;"></app-services>`
})
export class Services {}
