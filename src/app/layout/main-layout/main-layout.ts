import { Component } from '@angular/core';
import { Saidbar } from "../../share/saidbar/saidbar";
import { TestComponent } from "../../feature/test-component/test-component";

@Component({
  selector: 'app-main-layout',
  imports: [Saidbar, TestComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
