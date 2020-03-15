
import { CompanyListComponent } from './company-list/company-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyServiceService } from './company-service.service';
import { EducationListComponent } from './education-list/education-list.component';
import { EducationFormComponent } from './education-form/education-form.component';

 
@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyFormComponent,
    EducationListComponent,
    EducationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CompanyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }