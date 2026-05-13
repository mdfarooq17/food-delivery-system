import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories = [
    {
      name: 'Pizza',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=120'
    },
    {
      name: 'Burger',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=120'
    },
    {
      name: 'Pasta',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=120'
    },
    {
      name: 'Sweets',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=120'
    },
    {
      name: 'Chinese',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=120'
    },
    {
      name: 'Beverages',
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=120'
    }
  ];
}