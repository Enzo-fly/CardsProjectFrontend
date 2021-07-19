import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorComponent} from "./components/error/error.component";
import {FormComponent} from "./components/form/form.component";
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  {path:'', component: FormComponent},
  {path:'form', component: FormComponent},
  {path:'info/:requestStatus', component: InfoComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
