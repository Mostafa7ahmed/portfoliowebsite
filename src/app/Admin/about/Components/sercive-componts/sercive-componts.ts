import { Component, effect, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceAPI } from '../../../../core/service/service-api';
@Component({
  selector: 'app-sercive-componts',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sercive-componts.html',
  styleUrl: './sercive-componts.scss'
})
export class SerciveComponts implements OnInit {
  formService: FormGroup;
  isOpen = false;
  services = signal<any[]>([]);
  loading = signal(false);
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder, private _serviceAPI: ServiceAPI) {
    this.formService = this.fb.group({
      title: [''],
      icon: ['fa-solid fa-book'],
      description: ['']
    });
    
  }

  openPopup() {
    this.isOpen = true;
  }
  previewUrl: string | null = null;

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  loadServices() {
    this.loading.set(true);
    this._serviceAPI.getAllServices().subscribe({
      next: (res) => {
        this.services.set(res.result);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('❌ Error fetching:', err);
        this.loading.set(false);
      }
    });
  }
 
  ngOnInit() {
    this.loadServices()
  }
  deleteService(id: string | number) {
    this._serviceAPI.deleteService(id).subscribe({
      next: () => {
        this.services.update(list => list.filter(s => s.id !== id));
      },
      error: (err) => {
        console.error('❌ Error deleting:', err);
      }
    });
  }

  closePopup() {
    this.isOpen = false;
  }

  save() {
    if (this.formService.valid) {

      this._serviceAPI.createService(this.formService.value).subscribe({
        next: (res) => {
          this.closePopup();
          this.services.update(list => [...list, res.result]);
       const currentIcon = this.formService.get('icon')?.value;
        this.formService.reset({
          title: '',
          description: '',
          icon: currentIcon || 'fa-solid fa-book'
        });

        },
        error: (err) => {
          console.error('❌ Error creating:', err);
        }
      });
    }
  }
}
