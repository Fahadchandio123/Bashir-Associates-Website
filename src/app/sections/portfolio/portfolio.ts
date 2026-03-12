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
    { id: 1, title: 'Grand Zenith Residency', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 2, title: 'Skyline Business Hub', category: 'commercial', image: 'assets/images/p-com.png' },
    { id: 3, title: 'The Platinum Towers', category: 'ongoing', image: 'assets/images/p-ong.png' },
    { id: 4, title: 'Azure Heights', category: 'residential', image: 'assets/images/p-res.png' },
    { id: 5, title: 'Corporate Plaza X', category: 'commercial', image: 'assets/images/p-com.png' },
    { id: 6, title: 'Riverside Villas', category: 'ongoing', image: 'assets/images/p-ong.png' },
  ];

  filteredProjects() {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}
