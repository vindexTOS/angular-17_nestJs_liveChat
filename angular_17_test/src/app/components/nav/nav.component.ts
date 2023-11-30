import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="bg-red-600 w-[100%] h-[90px] flex ">
      <a routerLink="/">Home</a>
      <a routerLink="signin">signin </a>
      <a routerLink="signup">signup</a>

      <a routerLink="about">About </a>
    </nav>
  `,
  // templateUrl:
  styleUrl: './nav.component.css',
})
export class NavComponent {}
