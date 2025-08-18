import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../core/service/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
private fb = inject(FormBuilder);
  private loginService = inject(LoginService);
  private router = inject(Router);

  hide = signal(true);
  loading = signal(false);
  errorMsg = signal<string | null>(null);

  form = this.fb.group({
    email: this.fb.nonNullable.control('', [Validators.required, Validators.email]),
    password: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(6)]),
  });

  toggleVisibility() {
    this.hide.update(v => !v);
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // ✅ يظهر الأخطاء لو الفورم فاضية
      return;
    }

    this.loading.set(true);
    this.errorMsg.set(null);

    const credentials = this.form.getRawValue();

    this.loginService.login(credentials).subscribe({
      next: (res) => {
        if (res.success) {
          this.loginService.saveToken(res.result.accessToken);
          const user = this.loginService.getUser();
          console.log('✅ Logged in successfully!', user);

          this.router.navigate(['admin']);
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.errorMsg.set(err.error?.message || 'Login failed. Please try again.');
        this.loading.set(false);
      }
    });
  }
}
