import { Routes } from '@angular/router';
import {KnowntismComponent} from './knowntism/knowntism.component';
export const routes: Routes = [
  { path: 'knowtism', pathMatch: 'full', component: KnowntismComponent },
  { path: '**', redirectTo: 'knowtism', pathMatch: 'full' },
];
