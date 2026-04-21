import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Auth } from "../auth/auth";

@Component({
  selector: 'app-about',
  imports: [RouterLink, Auth],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
