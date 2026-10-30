import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Seite2 } from './pages/seite2/seite2';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'seite2',
    component: Seite2,
  },
];
