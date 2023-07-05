import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './Pages/layout-page/layout-page.component';
import { NewPageComponent } from './Pages/new-page/new-page.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children:[
      {
        path:'new-hero',component:NewPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
