import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { CertificateAPI } from '../../core/service/certificate-api';
import { Stream } from '../../core/service/stream';
import { environment } from '../../env/environment';
interface Certificate {
  title: string;
  category: string;
  link: string;
  image: string;
  date: string;
  description: string;
}
@Component({
  selector: 'app-certificates',
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss'
})
export class Certificates {
    baseurlFile = environment.baseUrlFiles;
  certificates = signal<any[]>([]);

  constructor(
    private _certificateAPI: CertificateAPI,
    private uploadService: Stream
  ) {


    effect(() => {
      this.loadCertificates();
    });
  }


    loadCertificates() {
    this._certificateAPI.getAllCertificates().subscribe({
      next: (res) => {
        this.certificates.set(res.result); 
      },
      error: (err) => {
        console.error('❌ Error fetching Certificates:', err);
      }
    });
  }
}
