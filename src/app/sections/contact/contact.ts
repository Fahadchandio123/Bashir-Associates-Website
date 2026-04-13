import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^[0-9+ ]*$')]],
      projectType: ['residential', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  private readonly WHATSAPP_NUMBER = '923403605493';

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      const { name, email, phone, projectType, message } = this.contactForm.value;

      const text =
        `*New Project Inquiry — Bashir Associates*\n\n` +
        `*Name:* ${name}\n` +
        `*Email:* ${email}\n` +
        (phone ? `*Phone:* ${phone}\n` : '') +
        `*Project Type:* ${projectType}\n\n` +
        `*Message:*\n${message}`;

      const encoded = encodeURIComponent(text);
      const waUrl = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encoded}`;

      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset({ projectType: 'residential' });
        window.open(waUrl, '_blank');
        setTimeout(() => this.submitSuccess = false, 5000);
      }, 800);

    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  get f() { return this.contactForm.controls; }
}
