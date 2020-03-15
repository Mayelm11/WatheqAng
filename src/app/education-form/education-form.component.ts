import { Component, OnInit } from '@angular/core';
import { Education } from '../education';
import { EducationServiceService } from '../education-service.service';

@Component({
  selector: 'app-education-form.',
  templateUrl: './education-form..component.html',
  styleUrls: ['./education-form..component.css']
})
export class EducationFormComponent implements OnInit {
  education: Education =  new Education;
  submitted = false;
  EducationService: Education;
  
constructor(private Educationservice: EducationServiceService ) { }

ngOnInit(): void {

}
newEducation(): void {
  this.submitted = false;
  this.education = new Education();
}
onSubmit() {
  this.save();
}
save() {
  this.Educationservice.save(this.education)
    .subscribe(
      data => {
        console.log(data);
        this.submitted = true;
      },
      error => console.log(error));
  this.education = new Education();
    }
}


