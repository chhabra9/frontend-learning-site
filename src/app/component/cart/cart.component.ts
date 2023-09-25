import { Course } from 'src/app/models/course.interface';
import { CartService } from './../../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems!:Course[];
constructor(private cartService: CartService){
console.log('here in car comp')
}
ngOnInit(): void {
   this.cartItems = this.cartService.getAllCartElements();
}
  removeFromCart(courseId:number): void {
   this.cartService.removeItemFromCart(courseId);
  }

  calculateSubtotal() {
   return this.cartService.totalCostOfCart();
  }

  calculateTax(){
     return 0.1 * this.calculateSubtotal();
  }

  calculateTotal() {
    return this.calculateSubtotal() + this.calculateTax();
  }
}
