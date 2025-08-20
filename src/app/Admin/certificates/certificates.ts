import { CommonModule } from '@angular/common';
import { Component, effect, ElementRef, signal, ViewChild } from '@angular/core';
import { Iporject } from '../../core/interface/iporject';
import { environment } from '../../env/environment';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PorjectAPI } from '../../core/service/porject-api';
import { Stream } from '../../core/service/stream';
import { CertificateAPI } from '../../core/service/certificate-api';
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
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss'
})
export class Certificates {
certificates = signal<any[]>([]);


  isOpen = false;
  previewUrl = signal<string | null>(null);

  baseurlFile = environment.baseUrlFiles;

  formCertificate: FormGroup;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(
    private fb: FormBuilder,
    private _certificateAPI: CertificateAPI,
    private uploadService: Stream
  ) {
    this.formCertificate = this.fb.group({
      photoUrl: [''],
      organization: [''],
      title: [''],
      description: [''],
      createdOn: [new Date().toISOString()] // القيمة الافتراضية للوقت الحالي
    });

    effect(() => {
      this.loadCertificates();
    });
  }






  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const file = input.files[0];
      this.uploadService.uploadImage(file).subscribe((res: any) => {
        if (res.success) {
          this.formCertificate.patchValue({ photoUrl: res.result.url });
          this.previewUrl.set(res.result.url); 
        }
      });
    }
  }

  openPopup() {
    this.isOpen=  true;
  }

  closePopup() {
    this.isOpen =false;
  }

save() {
  if (this.formCertificate.valid) {
    const payload = {
      ...this.formCertificate.value,
      createdOn: new Date().toISOString() 
    };
    this._certificateAPI.createCertificate(payload).subscribe({
      next: (res) => {
        console.log('✅ Certificate created successfully:', res);

        this.certificates.update((list) => [...list, res.result]);

        this.closePopup();

        // reset form
        this.formCertificate = this.fb.group({
          photoUrl: [''],
          organization: [''],
          title: [''],
          description: [''],
          createdOn: [new Date().toISOString()]
        });
      },
      error: (err) => {
        console.error('❌ Error creating certificate:', err);
      }
    });
  }
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

  deleteCertificate(id: number) {
    this._certificateAPI.deleteCertificate(id).subscribe({
      next: () => {
        console.log('🗑️ Deleted successfully');
        this.certificates.update((list) => list.filter((p) => p.id !== id));
      },
      error: (err) => {
        console.error('❌ Error deleting Certificate:', err);
      }
    });
  }
}
