import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { SuccsessComponent } from './components/succsess/succsess.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { getUserdata, getuserDataSelector } from './Store/Auth/Auth-Store';
import * as jwt from 'jwt-decode';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    NavComponent,
    RouterModule,
    FormsModule,
    ErrorComponent,
    SuccsessComponent,
    LoadingComponent,
    HttpClientModule,
  ],
})
export class AppComponent {
  title = 'angular_17_test';
  userData: any;
  constructor(private store: Store) {}
  decodUsertoken() {
    const tokenRaw = localStorage.getItem('token');
    if (tokenRaw) {
      let Decoded: any = jwt.jwtDecode(tokenRaw);
      this.store.dispatch(getUserdata({ userData: Decoded }));
    }
  }

  ngOnInit() {
    this.decodUsertoken();
  }
}
