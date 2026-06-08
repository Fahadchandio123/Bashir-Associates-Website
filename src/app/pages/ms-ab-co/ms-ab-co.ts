import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ms-ab-co',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ms-ab-co.html',
  styleUrl: './ms-ab-co.scss'
})
export class MsAbCo {
  documents = [
    {
      title: 'MS AB & CO Work',
      description: 'Comprehensive overview of MS AB & CO related works and guidelines.',
      filename: 'MS AB & CO Work.pdf',
      path: 'assets/docs/MS AB & CO Work.pdf',
      icon: '📄'
    },
    {
      title: '2025-114-116 Document',
      description: 'Detailed specifications and details for 2025-114-116.',
      filename: '2025-114-116.pdf',
      path: 'assets/docs/2025-114-116.pdf',
      icon: '📊'
    }
  ];

  downloadFile(path: string, filename: string) {
    const link = document.createElement('a');
    link.href = path;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
