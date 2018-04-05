import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';


const appRoutes=[
    {
      path:'',
      component:MoviesComponent
    },
    {
      path:'movie/:id',
      component:MovieComponent 
    }
  
  ];

 export  const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);