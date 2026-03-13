import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact as ContactSection } from '../../sections/contact/contact';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ContactSection],
  template: `<app-contact style="display: block; padding-top: 100px;"></app-contact>`
})
export class Contact {}
