import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly localStorageKey = 'cartItems';
  cartItems: Course[] = [];

  constructor() {
    const storedItems = localStorage.getItem(this.localStorageKey);
    if (storedItems) {
      this.cartItems = JSON.parse(storedItems);
    }
  }

  private updateLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  }

  getAllCartElements() {
    console.log("in service", this.cartItems);
    return this.cartItems;
  }

  addToCart(course: Course) {
    console.log("here");
    this.cartItems.push(course);
    this.updateLocalStorage();
  }

  emptyCart() {
    this.cartItems = [];
    this.updateLocalStorage();
  }

  removeItemFromCart(courseId: number) {
    const indexToRemove = this.cartItems.findIndex(course => course.course_id === courseId);
    if (indexToRemove !== -1) {
      this.cartItems.splice(indexToRemove, 1);
      this.updateLocalStorage();
    } else {
      console.log(`Course with ID ${courseId} not found in the cart.`);
    }
  }

  totalCostOfCart() {
    let totalCost = 0;
    this.cartItems.forEach((course) => {
      totalCost += course?.price || 0;
    });
    return totalCost;
  }
}
