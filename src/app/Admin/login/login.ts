import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private fb = inject(FormBuilder);

  hide = signal(true);
  loading = signal(false);
  errorMsg = signal<string | null>(null);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  canSubmit = computed(() => this.form.valid && !this.loading());

  toggleVisibility() { this.hide.update(v => !v); }

  submit() {
    if (!this.form.valid) return;
    this.loading.set(true);
    this.errorMsg.set(null);

    setTimeout(() => {
      this.loading.set(false);
      const { email, password } = this.form.value;
      if (email === 'arahman.deziner@gmail.com' && password === '123456') {
        console.log('Logged in!');
      } else {
        this.errorMsg.set('Invalid email or password.');
      }
    }, 900);
  }
}
