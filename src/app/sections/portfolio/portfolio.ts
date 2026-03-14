import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  category: 'residential' | 'commercial' | 'ongoing';
  image: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  activeFilter: string = 'all';

  projects: Project[] = [
    { id: 1, title: 'JAHANZAIB I (APARTMENTS)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 2, title: 'JAHANZIAB II (APARTMENTS)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 3, title: 'HASHIM GELARIA (APARTMENTS)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 4, title: 'STAR BUNGALOWS (HOUSING SCHEME)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 5, title: 'BAGAE MUHAMMAD (HOUSING SCHEME)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 6, title: '7 STAR I (APARTMENTS)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 7, title: '7 STAR II (APARTMENTS)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 8, title: 'EMPIRE I', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 9, title: 'EMPIRE II (J.B HEIGHTS)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 10, title: 'EMPIRE III (DUPLEX APARTMENTS)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 11, title: 'SQUARE TOWER (APARTMENTS)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 12, title: 'SYED MURAD ALI SHAD (HAWELI)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 13, title: 'SYED AMEER ALI SHAH (BUNGALOW)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 14, title: 'LABBAIK TWIN TOWER (APARTMENTS)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 15, title: 'DUPLEX VILLA (BUNGALOWS)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 16, title: 'POLL VILLA (BUNGALOWS)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 17, title: 'C-470 BANGALOW', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 18, title: 'ZERO POINT (APARTMENTS)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 19, title: 'THE DUPLEX CITY (DUPLEX APARTMENTS)', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 20, title: 'EMAAN SHOPPING MALL', category: 'commercial', image: 'assets/images/p-com.png' },
    { id: 21, title: 'CLUB VIEW DUPLEX APARTMENTS', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 22, title: 'DENING LAW COLLEGE BYPASS HYDERABAD', category: 'commercial', image: 'assets/images/p-com.png' },
    { id: 23, title: 'AL JALIL SCHOOL BYPASS HYDERABAD', category: 'commercial', image: 'assets/images/p-com.png' }
  ];

  filteredProjects() {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}
