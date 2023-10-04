import { PaymentService } from './../../services/payement/payment.service';
import { Course } from 'src/app/models/course.interface';
import { CartService } from './../../services/cart/cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{
  cartItems!:Course[];
constructor(private cartService: CartService,private paymentService:PaymentService){
}
ngOnInit(): void {
   this.cartItems = this.cartService.getAllCartElements();
}
ngOnDestroy(): void {

    this.cartService.updateCart()
}
  removeFromCart(courseId:number): void {
   this.cartService.removeItemFromCart(courseId);
  }

  calculateSubtotal() {
   return this.cartService.totalCostOfCart();
  }

  calculateTax(){
     return 0.18 * this.calculateSubtotal();
  }

  calculateTotal() {
    return this.calculateSubtotal() + this.calculateTax();
  }
  checkout(){
    // console.log(this.cartItems);
    this.paymentService.getCheckoutSession(this.cartItems).subscribe({
      next:(val:any)=>{
        window.open(val.url,"_self");
      }
    })
  }
}
