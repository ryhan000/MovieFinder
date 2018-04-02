import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';

const appRoutes=[
    {
      path:'',
      component:MoviesComponent
    },
    {
      path:'about',
      component:AboutComponent 
    }
  
  ];

 export  const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);