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

  stats = [
    { value: 'C4', label: 'PEC Category' },
    { value: '31', label: 'Specialization Codes' },
    { value: '200M', label: 'PKR Cost Limit' },
    { value: '2026', label: 'Licence Validity' }
  ];

  capabilities = [
    {
      icon: '🏗️',
      title: 'Civil Engineering Works',
      description:
        'Roads & pavements, drainage, retaining structures, sewerage, water supply networks, concrete repairs, general building works, waterproofing and marine structures.'
    },
    {
      icon: '⚙️',
      title: 'Mechanical Systems',
      description:
        'Pump installation, replacement & rewinding, generator overhauling, compressor support, specialized steel fabrication, treatment plant systems and heavy mechanical equipment.'
    },
    {
      icon: '⚡',
      title: 'Electrical & Solar Works',
      description:
        'Low and high voltage installations, lighting systems, safety & surveillance, building automation, solar energy systems and electrical control panels.'
    },
    {
      icon: '🛠️',
      title: 'Infrastructure Management',
      description:
        'Project coordination for municipal, industrial and commercial works including dewatering, oil & gas pipelines, dam construction and specialized fabrication works.'
    }
  ];

  credentials = [
    'Pakistan Engineering Council — Licence No. 4248, Category C4',
    'Government Contractor for Civil & Mechanical Works',
    'Sindh Sales Tax registered under M/s AB and Co / M/s Bashir Associate',
    'Registered office: Shop No. 1, Zero Point Apartment, Wadhu Wah Road, Qasimabad, Hyderabad',
    'Led by Mr. Bashir Ahmed — Owner, Lead Partner & CEO',
    'Active Membership with relevant professional engineering bodies'
  ];

  projects = [
    {
      client: 'Karachi Water & Sewerage Corporation',
      title: '45 MGD Filter Plant, COD Hills',
      scope: 'Emergent repair and maintenance works required at the filter plant including structural, mechanical and electrical restoration.',
      meta: 'Provisional Work Order · Aug 2025'
    },
    {
      client: 'KW&SB — Jamshed Town, District East-A',
      title: 'Pump & Electrical Control Panel Works',
      scope: 'Repairing a 63KW submersible pump and repair & maintenance of the electrical control panel for a vertical pump at PS-II STP.',
      meta: 'Mechanical & Electrical Maintenance'
    },
    {
      client: 'KW&SB — Jamshed Town, District East-A',
      title: 'Pipeline Leakage Repairs',
      scope: 'External repair of heavy leakages on pipeline joints and water trunk mains at different locations under CTM in Jamshed Town.',
      meta: 'Water Supply Infrastructure'
    },
    {
      client: 'KW&SB — Lyari Town',
      title: 'Sump & Well Channel Desilting',
      scope: 'Desilting and clearing of sump/well channel at UC-36 and Tannery Road, Lyari Town.',
      meta: 'Sewerage & Drainage Works'
    },
    {
      client: 'KW&SB — Jamshed Town',
      title: 'Submersible Pump Replacement',
      scope: 'Replacement and rewinding of 60 HP submersible pumps with required electrical and mechanical accessories at Pitcher Road Pumping Station.',
      meta: 'Pumping Station Support'
    },
    {
      client: 'KW&SB — Pumping Division',
      title: 'Sewerage Pump & Generator Overhauling',
      scope: 'Repair and maintenance of 180 HP sewerage pumps, standby diesel generator overhauling, power supply cabling and all electrical accessories.',
      meta: 'Heavy Mechanical Operations'
    }
  ];

  documents = [
    {
      title: 'MS AB & CO Work Profile',
      description:
        'Complete company profile containing vision, PEC registration details, specialization codes, selected work orders and contractor credentials.',
      filename: 'MS AB & CO Work.pdf',
      path: 'assets/docs/MS AB & CO Work.pdf',
      type: 'Company Profile'
    },
    {
      title: 'FBR Income Tax Certificate',
      description:
        'Federal Board of Revenue income tax registration certificate for MS AB & CO (Tax Year 2025, Document Ref: 114-116).',
      filename: '2025-114-116.pdf',
      path: 'assets/docs/2025-114-116.pdf',
      type: 'Tax Certificate'
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
