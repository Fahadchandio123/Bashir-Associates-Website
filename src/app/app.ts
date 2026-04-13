import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './core/navbar/navbar';
import { Footer } from './core/footer/footer';
import { Chatbot } from './core/chatbot/chatbot';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Navbar,
    Footer,
    Chatbot
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>

    <!-- FAQ Chatbot -->
    <app-chatbot></app-chatbot>

    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/923403605493" target="_blank" rel="noopener" class="whatsapp-float" aria-label="Chat on WhatsApp">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#fff">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.32 22.612c-.39 1.1-2.272 2.1-3.136 2.18-.784.074-1.766.106-2.85-.18a26.017 26.017 0 0 1-2.58-.954c-4.538-1.96-7.502-6.56-7.73-6.866-.228-.304-1.862-2.478-1.862-4.726s1.178-3.354 1.596-3.812c.418-.458.912-.572 1.216-.572.304 0 .608.002.874.016.28.014.656-.106 1.026.784.39.912 1.326 3.236 1.44 3.47.114.228.19.5.038.804-.152.304-.228.494-.456.762-.228.266-.48.596-.684.8-.228.228-.466.476-.2.934.266.456 1.182 1.95 2.538 3.16 1.742 1.554 3.212 2.036 3.668 2.264.456.228.722.19.988-.114.266-.304 1.14-1.33 1.444-1.788.304-.458.608-.38 1.026-.228.418.152 2.654 1.252 3.11 1.48.456.228.76.342.874.532.114.19.114 1.1-.276 2.2z"/>
      </svg>
    </a>
  `,
  styles: [`
    main {
      width: 100%;
      min-height: calc(100vh - 80px);
    }
    .whatsapp-float {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      background: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999;
      box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
      transition: all 0.3s ease;
      animation: whatsapp-pulse 2s infinite;
    }
    .whatsapp-float:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
    }
    .whatsapp-float svg {
      width: 32px;
      height: 32px;
    }
    @keyframes whatsapp-pulse {
      0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
      70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
      100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
    }
    @media (max-width: 768px) {
      .whatsapp-float {
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
      }
      .whatsapp-float svg {
        width: 26px;
        height: 26px;
      }
    }
  `]
})
export class App {}
