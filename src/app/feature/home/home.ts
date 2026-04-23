import { Component, inject, OnInit, signal } from '@angular/core';
import { UserData } from '../../share/service/userData/user-data';
import { TestData } from '../../share/service/testData/test-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  userName = signal<string | undefined>("");
  private UserDataS = inject(UserData);
  private testDataS = inject(TestData);
  private router = inject(Router);
  testTime = 30
  testQuentyty = 30
  ngOnInit(): void {
    this.UserDataS.UserName$.subscribe(v => this.userName.set(v))
  }
  startTest(){
    const data = {timeTest : this.testTime, quentytyTest : this.testQuentyty }
    this.testDataS.testData$.next(data)
    this.router.navigate(["/using-test"])
  }
  setTime(time : number){
    this.testTime = time
  }
  setQ(q : number){
    this.testQuentyty = q
  }
}
