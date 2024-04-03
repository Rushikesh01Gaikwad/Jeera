import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprojectComponent } from './addproject/addproject.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { GraphComponent } from './graph/graph.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:'Dashboard',
    component:DashboardComponent,
  },
  {
    path:'Addproject',
    component:AddprojectComponent,
  },
  {
    path:'Editproject/:id',
    component:EditComponent,
  },
  {
    path: "Graph",
    component:GraphComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
