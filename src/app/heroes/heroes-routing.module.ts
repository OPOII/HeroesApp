import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './Pages/layout-page/layout-page.component';
import { NewPageComponent } from './Pages/new-page/new-page.component';
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import { ListPageComponent } from './Pages/list-page/list-page.component';
import { HeroPageComponent } from './Pages/hero-page/hero-page.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children:[
      {
        path:'new-hero',component:NewPageComponent
      },
      {
        path:'search',component:SearchPageComponent
      },
      {
        path:'edit/:id',component:NewPageComponent
      },
      {
        path:'list',component:ListPageComponent
      },
      {
        path:':id',component:HeroPageComponent
      },
      {
        path:'**',redirectTo:'list'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
