import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {
    path:"",  //creamos la ruta a la que accederemos
    component:HomeComponent //Indicamos el componente que se usara
  },
  {
    path:"post/:id",  //creamos la ruta a la que accederemos
    component:PostDetailComponent //Indicamos el componente que se usara
  },
  {
    path:"about",
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
