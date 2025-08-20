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
  isOpen = false;
  services = signal<any[]>([]);
  loading = signal(false);

  constructor(private _serviceAPI: ServiceAPI) {

    
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


}
