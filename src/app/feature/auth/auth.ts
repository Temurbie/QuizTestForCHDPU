import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AUTHDATA } from '../../data/authData';
import { Router } from '@angular/router';
import { UserData } from '../../share/service/userData/user-data';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private userData = inject(UserData)
  userName : string | undefined = ""
  authData = AUTHDATA
  authForm = this.fb.nonNullable.group({
    login: '',
    parol : ''
  })
  login() {
  const { login, parol } = this.authForm.value;
  this.userName = this.authForm.value.login  
  // Foydalanuvchini topamiz
  const user = this.authData.find(v => v.login === login);
  this.userData.UserName$.next(this.userName)
  // User mavjudligini va paroli to'g'riligini tekshiramiz
  if (user && user.parol === parol  && !user.ban) {
    console.log("Muvaffaqiyatli login!");
    // Bu yerda router orqali o'tkazib yuborish kodi bo'ladi
    this.router.navigate(['/home']);
  }
    else{
    alert("Login yoki parol xato!");
    // Foydalanuvchiga xato haqida xabar ko'rsatish (Toast yoki Alert)
  } 
}
}
