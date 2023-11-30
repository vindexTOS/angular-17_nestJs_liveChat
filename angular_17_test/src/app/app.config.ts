import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AuthEffect } from './Store/Auth/Auth-Effect';
import { provideHttpClient } from '@angular/common/http';
import { AuthReducer } from './Store/Auth/Auth-Store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideEffects(AuthEffect),
    provideHttpClient(),
    provideStore({ userSelector: AuthReducer }),
  ],
};
