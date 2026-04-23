import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserData {
  UserName$ = new BehaviorSubject<string | undefined>("")
}
