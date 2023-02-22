import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './features/details/details.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
    ],
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/details/details.module').then(
            (m) => m.DetailsModule
          ),
          data: {
            breadcrumbs: [
              {
                label: 'Detalhes',
              }
            ] 
          },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
