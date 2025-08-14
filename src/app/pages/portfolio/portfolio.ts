import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  category: string;
  link: string;
  image: string;
  types: string[];
}
@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  categories = ['All', 'Frontend', 'UI UX'];
  selectedCategory = 'All';

    projects: Project[] = [
    { title: 'Clinic Management System', category: 'Frontend', link: 'https://clinicv1.vercel.app/', image: 'images/Macbook-Air-clinicv1.vercel.png', types: ['Angular', 'JS', 'CSS', 'HTML'] },
    { title: 'Mourad Motor', category: 'Frontend', link: 'https://mourad-motors.com/', image: 'images/Mourad Motor.png', types: ['Angular', 'JS', 'CSS', 'HTML'] },
    { title: 'Pick LMS', category: 'Frontend', link: 'https://pickup-chi.vercel.app', image: 'images/Group 1 (2).png', types: ['Angular', 'JS', 'CSS', 'HTML'] },
    { title: 'E-Store E-commerce', category: 'Frontend', link: 'https://full-stack-e-commerce-lilac.vercel.app/home', image: 'images/Group 4.png', types: ['Angular', 'JS', 'CSS', 'HTML'] },
    { title: 'E-Store Dashboard', category: 'Frontend', link: 'https://dashboed-e-commerce.vercel.app', image: 'images/Group 5.png', types: ['Angular', 'JS', 'CSS', 'HTML'] },
    { title: 'Mafhoom Education Platform', category: 'Frontend', link: 'https://mafhoom.vercel.app/', image: 'images/Eduction.png', types: ['React', 'JS', 'CSS', 'HTML'] },
    { title: 'FreshCart E-commerce', category: 'Frontend', link: 'https://ecommerce19-fresh-cart.vercel.app/home', image: 'images/Group 1.png', types: ['Angular', 'JS', 'CSS', 'HTML'] },
    { title: 'Cart E-commerce', category: 'Frontend', link: 'https://ecommerce-app-zeta-peach.vercel.app/', image: 'images/Group 7.png', types: ['Angular', 'JS', 'CSS', 'HTML'] },
    { title: 'Movies APP', category: 'Frontend', link: 'https://movies-app-navy-ten.vercel.app', image: 'images/Group 8.png', types: ['Angular', 'JS', 'CSS', 'HTML'] },
    { title: 'Google bard clone', category: 'Frontend', link: 'https://google-bard-clone.vercel.app/', image: 'images/Google bard clone.png', types: ['React', 'JS', 'CSS', 'HTML'] },
    { title: 'Book Search', category: 'Frontend', link: 'https://book-search-nu.vercel.app', image: 'images/BookSearch.png', types: ['React', 'JS', 'CSS', 'HTML'] },
    { title: 'Pokemon Random', category: 'Frontend', link: 'https://pokemon-six-teal.vercel.app/', image: 'images/pokemon.png', types: ['React', 'JS', 'CSS', 'HTML'] },
    { title: 'Ayha Random', category: 'Frontend', link: 'https://random-ayha.vercel.app/', image: 'images/randomAyha.png', types: ['React', 'JS', 'CSS', 'HTML'] },
    { title: 'Weather App', category: 'Frontend', link: 'https://mostafa7ahmed.github.io/WeatherApp/#/weather?lat=51.5073219&lon=-0.1276474', image: 'images/Weather App.png', types: ['JS', 'CSS', 'HTML'] },
    { title: 'ChatGPT Clone', category: 'Frontend', link: 'https://mostafa7ahmed.github.io/ChatGpt/', image: 'images/ChatGPT Clone.png', types: ['JS', 'CSS', 'HTML'] },
    { title: 'El-Taysir Medical', category: 'Frontend', link: 'https://eltayseermidacalbymoshamed.netlify.app/', image: 'images/eltayseermidacal.png', types: ['JS', 'CSS', 'HTML'] },
    { title: 'Sintac Code WEbsite', category: 'Frontend', link: 'https://sintaccode.netlify.app/', image: 'images/sintaccode.png', types: ['JS', 'CSS', 'HTML'] },
    { title: 'E-Commerce Website', category: 'Frontend', link: 'https://e-commercebs.netlify.app/', image: 'images/ecommerce.png', types: ['Bootstrap', 'CSS', 'HTML'] },
    { title: 'To-Do List', category: 'Frontend', link: 'https://todo-app-six-smoky.vercel.app/', image: 'images/Todo.png', types: ['JS', 'CSS', 'HTML'] },
    { title: 'CRUD Mangement System', category: 'Frontend', link: 'https://mostafa7ahmed.github.io/CURD/', image: 'images/CURD Mangement System.png', types: ['JS', 'CSS', 'HTML'] },
    { title: 'CRUD Opration', category: 'Frontend', link: 'https://crud-table-eosin.vercel.app/', image: 'images/CRUD operations.png', types: ['Bootstrap', 'JS', 'CSS', 'HTML'] },
    { title: 'Management Dashboard', category: 'UI UX', link: 'https://www.behance.net/gallery/190934173/Management-Dashboard', image: 'images/Management Dashboard.png', types: ['Figma', 'Adobe Photoshop'] },
    { title: 'Comanda Application', category: 'UI UX', link: 'https://www.behance.net/gallery/190295743/Comanda-Application', image: 'images/comanda.png', types: ['Figma', 'Adobe Photoshop'] },
    { title: 'Furniture App Design', category: 'UI UX', link: 'https://www.behance.net/gallery/190258017/Furniture-App-Design', image: 'images/funitre.png', types: ['Figma', 'Adobe Photoshop'] }
  ];
}
