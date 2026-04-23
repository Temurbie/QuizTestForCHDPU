import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestData {
  testData$ = new BehaviorSubject<{timeTest: number, quentytyTest: number} | null>(null)
}
