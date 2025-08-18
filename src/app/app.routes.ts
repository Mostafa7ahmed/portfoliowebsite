import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },

      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about').then(m => m.About),
      },
      {
        path: 'resume',
        loadComponent: () =>
          import('./pages/resume/resume').then(m => m.Resume),
      },
      {
        path: 'portfolio',
        loadComponent: () =>
          import('./pages/portfolio/portfolio').then(m => m.Portfolio),
      },
      {
        path: 'certificates',
        loadComponent: () =>
          import('./pages/certificates/certificates').then(m => m.Certificates),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact').then(m => m.Contact),
      },
    ]
  },


    {
    path: 'admin',
    loadComponent: () =>
      import('./layout/admin-layout/admin-layout').then(m => m.AdminLayout),
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },

      {
        path: 'about',
        loadComponent: () =>
          import('./Admin/about/about').then(m => m.About),
      },
      {
        path: 'resume',
        loadComponent: () =>
          import('./pages/resume/resume').then(m => m.Resume),
      },
      {
        path: 'portfolio',
        loadComponent: () =>
          import('./pages/portfolio/portfolio').then(m => m.Portfolio),
      },
      {
        path: 'certificates',
        loadComponent: () =>
          import('./pages/certificates/certificates').then(m => m.Certificates),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact').then(m => m.Contact),
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./Admin/login/login').then(m => m.Login),
  },
  { path: '**', redirectTo: 'about' }
];