import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  slides = [
    {
      title: 'Delicious Pizza',
      description: 'Fresh ingredients, hot and crispy',
      price: 299,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
    },
    {
      title: 'Burger Special',
      description: 'Juicy beef patty with fresh veggies',
      price: 199,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
    },
    {
      title: 'Pasta Delight',
      description: 'Authentic Italian pasta with sauce',
      price: 249,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500'
    }
  ];

  currentSlide = 0;
  progress = 0;
  private intervalId: any;
  private progressIntervalId: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  setSlide(index: number) {
    this.currentSlide = index;
    this.resetProgress();
  }

  private startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.resetProgress();
    }, 5000);

    this.progressIntervalId = setInterval(() => {
      this.progress += 100 / (5000 / 100);
      if (this.progress >= 100) {
        this.progress = 0;
      }
    }, 100);
  }

  private stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.progressIntervalId) {
      clearInterval(this.progressIntervalId);
    }
  }

  private resetProgress() {
    this.progress = 0;
  }
}