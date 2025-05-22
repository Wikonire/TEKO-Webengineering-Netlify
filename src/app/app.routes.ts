import { Routes } from '@angular/router';
import {KnowntismComponent} from './knowntism/knowntism.component';
import {WelcomeComponent} from './welcome/welcome.component';
export const routes: Routes = [
  { path: 'knowtism', pathMatch: 'full', component: KnowntismComponent },
  { path: 'welcome', pathMatch: 'full', component: WelcomeComponent },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];
