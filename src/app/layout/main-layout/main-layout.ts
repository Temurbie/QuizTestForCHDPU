import { Component } from '@angular/core';
import { Saidbar } from "../../share/saidbar/saidbar";
import { TestComponent } from "../../feature/test-component/test-component";
import { Auth } from "../../feature/auth/auth";
import { About } from "../../feature/about/about";

@Component({
  selector: 'app-main-layout',
  imports: [Saidbar, TestComponent, Auth, About],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
