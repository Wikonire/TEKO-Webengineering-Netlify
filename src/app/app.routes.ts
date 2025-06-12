import { Routes } from '@angular/router';
import {KnowntismComponent} from './knowntism/knowntism.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ResponsiveDesignComponent} from './responsive-design/responsive-design.component';
export const routes: Routes = [
  { path: 'knowtism', pathMatch: 'full', component: KnowntismComponent },
  { path: 'welcome', pathMatch: 'full', component: WelcomeComponent },
  { path: 'responsive-design', pathMatch: 'full', component: ResponsiveDesignComponent },
  { path: '**', component: WelcomeComponent },
];
