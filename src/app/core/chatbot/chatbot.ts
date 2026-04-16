import { Component, signal, ViewChild, ElementRef, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  text: string;
  isUser: boolean;
  time: string;
}

interface Faq {
  keywords: string[];
  question: string;
  answer: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss'
})
export class Chatbot {
  @ViewChild('messageContainer') private messageContainer!: ElementRef;

  isOpen = signal(false);
  isVisible = signal(false); // controls CSS animation class separately
  isTyping = signal(false);
  userInput = '';
  messages = signal<Message[]>([
    {
      text: "👋 Hi! I'm the Bashir Associates assistant. Ask me anything or pick a question below!",
      isUser: false,
      time: this.getTime()
    }
  ]);

  readonly faqs: Faq[] = [
    {
      keywords: ['service', 'offer', 'do', 'provide', 'what'],
      question: 'What services do you offer?',
      answer: '🏗️ We offer:\n• Residential Construction (homes, villas, duplexes)\n• Commercial Development (offices, malls, schools)\n• Urban Planning & Housing Schemes\n• Project Management\n• Digital Growth (websites, social media)'
    },
    {
      keywords: ['location', 'address', 'where', 'office', 'located'],
      question: 'Where are you located?',
      answer: '📍 Our office is at:\nZeropoint Apartment, Main Wad Hu Wah Road, Qasimabad, Hyderabad, Sindh, Pakistan.'
    },
    {
      keywords: ['contact', 'phone', 'call', 'reach', 'number', 'whatsapp'],
      question: 'How can I contact you?',
      answer: '📞 You can reach us at:\n+923403605493\n\n📧 Email: info@bashirassociates.com\n\nOr click the WhatsApp button on this page for a quick chat!'
    },
    {
      keywords: ['experience', 'years', 'old', 'since', 'long', 'established'],
      question: 'How long have you been in business?',
      answer: '🏛️ Bashir Associates has been building trust since 2001 — over 25 years of architectural excellence in Hyderabad and beyond.'
    },
    {
      keywords: ['project', 'completed', 'portfolio', 'work', 'done', 'built'],
      question: 'How many projects have you completed?',
      answer: '✅ We have completed 27 major projects ranging from residential bungalows and duplex apartments to commercial shopping malls and educational institutes.'
    },
    {
      keywords: ['owner', 'who', 'founder', 'head', 'ceo', 'boss', 'chandio'],
      question: 'Who is the owner?',
      answer: '👤 Bashir Associates is led by Bashir Ahmed Chandio, the Owner & Principal Developer, with over 25 years of experience in construction and real estate.'
    },
    {
      keywords: ['price', 'cost', 'rate', 'quote', 'budget', 'estimate', 'charges'],
      question: 'How do I get a price estimate?',
      answer: '💰 Pricing depends on project size, materials, and scope. Please fill in our contact form or WhatsApp us directly and we\'ll provide a free consultation and estimate!'
    },
    {
      keywords: ['residential', 'home', 'house', 'bungalow', 'villa', 'apartment', 'duplex'],
      question: 'Do you build residential homes?',
      answer: '🏘️ Yes! We specialize in:\n• Custom Bungalows\n• Duplex Apartments\n• Villas\n• Housing Scheme Units\n\nCheck our Projects page for examples.'
    },
    {
      keywords: ['commercial', 'shop', 'mall', 'school', 'college', 'office'],
      question: 'Do you build commercial buildings?',
      answer: '🏢 Absolutely! We build:\n• Shopping Malls & Plazas\n• Office Buildings\n• Educational Institutes\n• Branch Offices\n\nWe\'ve delivered high-profile projects across Sindh.'
    },
    {
      keywords: ['instagram', 'facebook', 'social', 'media', 'follow'],
      question: 'Where can I follow you on social media?',
      answer: '📱 Follow us on:\n• Instagram: @bashirassociates87\n• Facebook: Bashir Associates\n\nYou can also find the links in the footer of this page!'
    }
  ];

  constructor() {
    effect(() => {
      if (this.messages() || this.isOpen()) {
        setTimeout(() => this.scrollToBottom(), 100);
      }
    });
  }

  readonly suggestions = this.faqs.map(f => f.question);

  toggle() {
    if (!this.isOpen()) {
      this.isOpen.set(true);
      // Small delay so the element renders before the animation class is added
      setTimeout(() => this.isVisible.set(true), 10);
    } else {
      this.isVisible.set(false);
      // Wait for CSS exit animation to finish before removing from DOM
      setTimeout(() => this.isOpen.set(false), 280);
    }
  }

  send() {
    const input = this.userInput.trim();
    if (!input) return;

    this.addMessage(input, true);
    this.userInput = '';

    this.isTyping.set(true);
    setTimeout(() => {
      const answer = this.findAnswer(input);
      this.isTyping.set(false);
      this.addMessage(answer, false);
    }, 1200);
  }

  selectSuggestion(question: string) {
    this.addMessage(question, true);
    this.isTyping.set(true);
    setTimeout(() => {
      const answer = this.findAnswer(question);
      this.isTyping.set(false);
      this.addMessage(answer, false);
    }, 1000);
  }

  private findAnswer(input: string): string {
    const lower = input.toLowerCase();
    for (const faq of this.faqs) {
      if (faq.keywords.some(k => lower.includes(k))) {
        return faq.answer;
      }
    }
    return "🤔 I'm not sure about that one! For specific questions, please contact us directly:\n📞 +923403605493\n📧 info@bashirassociates.com\n\nOr use the WhatsApp button to chat with us!";
  }

  private addMessage(text: string, isUser: boolean) {
    this.messages.update(msgs => [...msgs, { text, isUser, time: this.getTime() }]);
  }

  private getTime(): string {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  private scrollToBottom() {
    if (this.messageContainer) {
      const el = this.messageContainer.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') this.send();
  }
}


interface Message {
  text: string;
  isUser: boolean;
  time: string;
}

interface Faq {
  keywords: string[];
  question: string;
  answer: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss',
  animations: [
    trigger('windowAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px) scale(0.95)' }),
        animate('300ms cubic-bezier(0.175, 0.885, 0.32, 1.15)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        animate('250ms cubic-bezier(0.6, -0.28, 0.735, 0.045)', style({ opacity: 0, transform: 'translateY(30px) scale(0.95)' }))
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(15px)' }),
          stagger(50, [
            animate('250ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class Chatbot {
  @ViewChild('messageContainer') private messageContainer!: ElementRef;

  isOpen = signal(false);
  isTyping = signal(false);
  userInput = '';
  messages = signal<Message[]>([
    {
      text: "👋 Hi! I'm the Bashir Associates assistant. Ask me anything or pick a question below!",
      isUser: false,
      time: this.getTime()
    }
  ]);

  readonly faqs: Faq[] = [
    {
      keywords: ['service', 'offer', 'do', 'provide', 'what'],
      question: 'What services do you offer?',
      answer: '🏗️ We offer:\n• Residential Construction (homes, villas, duplexes)\n• Commercial Development (offices, malls, schools)\n• Urban Planning & Housing Schemes\n• Project Management\n• Digital Growth (websites, social media)'
    },
    {
      keywords: ['location', 'address', 'where', 'office', 'located'],
      question: 'Where are you located?',
      answer: '📍 Our office is at:\nZeropoint Apartment, Main Wad Hu Wah Road, Qasimabad, Hyderabad, Sindh, Pakistan.'
    },
    {
      keywords: ['contact', 'phone', 'call', 'reach', 'number', 'whatsapp'],
      question: 'How can I contact you?',
      answer: '📞 You can reach us at:\n+923403605493\n\n📧 Email: info@bashirassociates.com\n\nOr click the WhatsApp button on this page for a quick chat!'
    },
    {
      keywords: ['experience', 'years', 'old', 'since', 'long', 'established'],
      question: 'How long have you been in business?',
      answer: '🏛️ Bashir Associates has been building trust since 2001 — over over 25 years of architectural excellence in Hyderabad and beyond.'
    },
    {
      keywords: ['project', 'completed', 'portfolio', 'work', 'done', 'built'],
      question: 'How many projects have you completed?',
      answer: '✅ We have completed 27 major projects ranging from residential bungalows and duplex apartments to commercial shopping malls and educational institutes.'
    },
    {
      keywords: ['owner', 'who', 'founder', 'head', 'ceo', 'boss', 'chandio'],
      question: 'Who is the owner?',
      answer: '👤 Bashir Associates is led by **Bashir Ahmed Chandio**, the Owner & Principal Developer, with over 25 years of experience in construction and real estate.'
    },
    {
      keywords: ['price', 'cost', 'rate', 'quote', 'budget', 'estimate', 'charges'],
      question: 'How do I get a price estimate?',
      answer: '💰 Pricing depends on project size, materials, and scope. Please fill in our contact form or WhatsApp us directly and we\'ll provide a free consultation and estimate!'
    },
    {
      keywords: ['residential', 'home', 'house', 'bungalow', 'villa', 'apartment', 'duplex'],
      question: 'Do you build residential homes?',
      answer: '🏘️ Yes! We specialize in:\n• Custom Bungalows\n• Duplex Apartments\n• Villas\n• Housing Scheme Units\n\nCheck our Projects page for examples.'
    },
    {
      keywords: ['commercial', 'shop', 'mall', 'school', 'college', 'office'],
      question: 'Do you build commercial buildings?',
      answer: '🏢 Absolutely! We build:\n• Shopping Malls & Plazas\n• Office Buildings\n• Educational Institutes\n• Branch Offices\n\nWe\'ve delivered high-profile projects across Sindh.'
    },
    {
      keywords: ['instagram', 'facebook', 'social', 'media', 'follow'],
      question: 'Where can I follow you on social media?',
      answer: '📱 Follow us on:\n• Instagram: @bashirassociates87\n• Facebook: Bashir Associates\n\nYou can also find the links in the footer of this page!'
    }
  ];

  constructor() {
    // Auto-scroll when messages update or window opens
    effect(() => {
      if (this.messages() || this.isOpen()) {
        setTimeout(() => this.scrollToBottom(), 100);
      }
    });
  }

  readonly suggestions = this.faqs.map(f => f.question);

  toggle() {
    this.isOpen.update(v => !v);
  }

  send() {
    const input = this.userInput.trim();
    if (!input) return;

    this.addMessage(input, true);
    this.userInput = '';

    this.isTyping.set(true);
    setTimeout(() => {
      const answer = this.findAnswer(input);
      this.isTyping.set(false);
      this.addMessage(answer, false);
    }, 1200); // Slightly longer for realistic feel
  }

  selectSuggestion(question: string) {
    this.addMessage(question, true);
    this.isTyping.set(true);
    setTimeout(() => {
      const answer = this.findAnswer(question);
      this.isTyping.set(false);
      this.addMessage(answer, false);
    }, 1000);
  }

  private findAnswer(input: string): string {
    const lower = input.toLowerCase();
    for (const faq of this.faqs) {
      if (faq.keywords.some(k => lower.includes(k))) {
        return faq.answer;
      }
    }
    return "🤔 I'm not sure about that one! For specific questions, please contact us directly:\n📞 +923403605493\n📧 info@bashirassociates.com\n\nOr use the WhatsApp button to chat with us!";
  }

  private addMessage(text: string, isUser: boolean) {
    this.messages.update(msgs => [...msgs, { text, isUser, time: this.getTime() }]);
  }

  private getTime(): string {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  private scrollToBottom() {
    if (this.messageContainer) {
      const el = this.messageContainer.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') this.send();
  }
}
