import { Store } from '@ngrx/store';

import { AuthService } from '../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { mergeMap, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadingEnd,
  loadingStart,
  statusError,
  statusSuccses,
} from '../StatusHanndle/Status.action';
import { getUserInfoForLogIn, getUserInfoForRegistration } from './Auth-Store';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private store: Store,
    private authService: AuthService
  ) {}

  Register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserInfoForRegistration),

      mergeMap((action: any) => {
        this.store.dispatch(loadingStart());
        return this.authService.createUser(action.userInfo).pipe(
          map((res: any) => {
            console.log(res);
            this.store.dispatch(loadingEnd());
            this.authService.setToken(res.token);

            return statusSuccses({ succses: res.message });
          }),
          catchError((error) => {
            this.store.dispatch(loadingEnd());
            console.log(error);
            return of(statusError({ error: 'Somthing went wrong' }));
          })
        );
      })
    )
  );

  SignIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserInfoForLogIn),
      mergeMap((action: any) => {
        this.store.dispatch(loadingStart());
        return this.authService.logInUser(action.userInfo).pipe(
          map((res: any) => {
            this.store.dispatch(loadingEnd());
            this.authService.setToken(res.token);
            return statusSuccses({ succses: 'User Has Been Signed In' });
          }),
          catchError((error) => {
            this.store.dispatch(loadingEnd());
            console.log(error);
            return of(statusError({ error: 'Something went wrong' }));
          })
        );
      })
    )
  );
}
