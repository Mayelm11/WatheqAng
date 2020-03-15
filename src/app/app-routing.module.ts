import { CompanyListComponent } from './company-list/company-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyFormComponent } from './company-form/company-form.component'
import { EducationFormComponent } from './education-form/education-form.component';

 
const routes: Routes = [
  { path: 'company', component: CompanyListComponent },
  { path: 'addcompany', component: CompanyFormComponent },
  { path: 'addEducation', component: EducationFormComponent }

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }