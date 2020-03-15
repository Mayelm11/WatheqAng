
import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyServiceService } from '../company-service.service';


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  company: Company = new Company;
  submitted = false;

constructor(private CompanyService: CompanyServiceService ) { }

  ngOnInit(): void {

  }
  newCompany(): void {
    this.submitted = false;
    this.company = new Company();
  }
  onSubmit() {
    this.save();
  }
  save() {
    this.CompanyService.save(this.company)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.company = new Company();
      }

}