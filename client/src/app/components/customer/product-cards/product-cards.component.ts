import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent {
  products = [
    {
      name: 'Margherita Pizza',
      category: 'Pizza',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300',
      price: 299,
      deliveryTime: 25,
      discount: 20,
      reviews: 245,
      favorite: false,
      extraCharges: 20,
      coupon: 'Save Rs. 50'
    },
    {
      name: 'Cheese Burger',
      category: 'Burger',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300',
      price: 199,
      deliveryTime: 20,
      discount: 15,
      reviews: 189,
      favorite: true,
      extraCharges: 15,
      coupon: null
    },
    {
      name: 'Pasta Alfredo',
      category: 'Pasta',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300',
      price: 249,
      deliveryTime: 30,
      discount: null,
      reviews: 156,
      favorite: false,
      extraCharges: 25,
      coupon: 'Free Delivery'
    },
    {
      name: 'Chocolate Cake',
      category: 'Dessert',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300',
      price: 149,
      deliveryTime: 15,
      discount: 10,
      reviews: 98,
      favorite: false,
      extraCharges: null,
      coupon: null
    }
  ];

  toggleFavorite(product: any) {
    product.favorite = !product.favorite;
  }

  addToCart(product: any) {
    // Implement add to cart logic
    console.log('Added to cart:', product);
  }
}
