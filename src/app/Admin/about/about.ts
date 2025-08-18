import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-about',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  form: FormGroup;
  isOpen = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: [''],
      icon: [''],
      description: ['']
    });
  }

  openPopup() {
    this.isOpen = true;
  }

  closePopup() {
    this.isOpen = false;
  }

  save() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.closePopup();
    }
  }
}
