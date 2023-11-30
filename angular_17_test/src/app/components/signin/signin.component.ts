import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],

  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(private store:Store){ }
  userData = {
    userName: '',
    password: '',
 
  };


    SubmitHandler() {
 
 
  }
}
