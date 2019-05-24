import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  {path :  'departments', components: departmentlistComponent}
  {path : 'employee2',component : employeelistComponent }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [departmentlistComponent,employeelistComponent]
