import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-brands.component.html',
  styleUrls: ['./top-brands.component.css']
})
export class TopBrandsComponent {
  brands = [
    {
      name: 'Pizza Hut',
      logo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100',
      discount: 20,
      reviews: 1250
    },
    {
      name: 'Burger King',
      logo: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100',
      discount: 15,
      reviews: 980
    },
    {
      name: 'Domino\'s',
      logo: 'https://images.unsplash.com/photo-1571066811602-716837d681de?w=100',
      discount: 25,
      reviews: 1540
    },
    {
      name: 'KFC',
      logo: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=100',
      discount: 10,
      reviews: 890
    },
    {
      name: 'McDonald\'s',
      logo: 'https://images.unsplash.com/photo-1551782450-17144efb5723?w=100',
      discount: 30,
      reviews: 2100
    }
  ];
}