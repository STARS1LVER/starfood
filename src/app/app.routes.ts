import { Routes } from '@angular/router';
import HomePageComponent from './dashboard/pages/home-page/home-page.component';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path:'home',
        title: 'Title',
        component: HomePageComponent
      },
      {
        path: 'categories-food',
        title: 'List Categories',
        loadComponent: () => import('./dashboard/pages/list-categories/list-categories.component')
      },
      {
        path: 'search-food',
        title:'Search Food',
        loadComponent: () => import('./dashboard/pages/search-food/search-food.component')
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }

];
