import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AllUserDataService {
  allUser$ = new Subject<User[]>;
  constructor() { }
  sendUsers(users:User[]){
    this.allUser$.next(users);
  }
}
