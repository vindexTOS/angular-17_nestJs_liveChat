import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getuserDataSelector } from '../../Store/Auth/Auth-Store';
import { UserComponent } from '../../views/user/user.component';
import { GuestComponent } from '../../views/guest/guest.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule, UserComponent, GuestComponent],
})
export class HomeComponent {
  userDataSelector$!: Observable<any>;
  userData: any;
  constructor(private store: Store) {
    this.userDataSelector$ = this.store.pipe(select(getuserDataSelector));
  }

  ngOnInit() {
    this.userDataSelector$.pipe().subscribe((result) => {
      console.log(result);
      this.userData = result;
    });
  }
}
