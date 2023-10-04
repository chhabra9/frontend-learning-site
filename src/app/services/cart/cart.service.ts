import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getAllCartElementsA(): Course[] {
    throw new Error('Method not implemented.');
  }
  private readonly localStorageKey = 'cartItems';
  cartItems: Course[] = [];

  constructor(private http:HttpClient) {
    const storedItems = localStorage.getItem(this.localStorageKey);
    if (storedItems) {
      this.cartItems = JSON.parse(storedItems);
    }
  }

  private updateLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  }
  setCart(value:Course[]){
    this.cartItems = value;
    this.updateLocalStorage();
  }
  getAllCartElements() {
    return this.cartItems;
  }

  addToCart(course: Course) {
    const isDuplicate = this.cartItems.some((item)=>{
      return item.course_id === course.course_id;
    })
  if(isDuplicate){
    alert('alredy in cart');
  }else{
    this.cartItems.push(course);
    this.updateLocalStorage();
  }
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
    }
  }
  updateCart(){
      let coursIds = this.cartItems.map(item=>item.course_id);
      console.log(coursIds);
      this.updateCartOnServer(coursIds).subscribe({
        error:(err)=>{
          console.log(err.message);
        }
      });
  }
    updateCartOnServer(courseIds:number[]){
      const authToken = localStorage.getItem('accessToken');
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + authToken
        })
      };
      const userId = localStorage.getItem('userId')
     return this.http.put<Course[]>(`http://localhost:3000/api/cart/${userId}`,{courseIds:courseIds},httpOptions)
    }
  totalCostOfCart() {
    let totalCost = 0;
    this.cartItems.forEach((course) => {
      totalCost += course?.price || 0;
    });
    return totalCost;
  }
  getAllCartsElementA(){
    const authToken = localStorage.getItem('accessToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + authToken
      })
    };
    const userId = localStorage.getItem('userId');
   return this.http.get<Course[]>(`http://localhost:3000/api/cart/${userId}`,httpOptions)
  }
}
