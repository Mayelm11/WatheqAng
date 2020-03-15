import { Observable } from 'rxjs';
import { Company } from './../company';
import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  company: Observable<Company[]>;
  Company: Company[];
  constructor(private companyServiceService: CompanyServiceService) { }

  ngOnInit() {
    this.companyServiceService.findAll().subscribe(data => {
      this.Company = data;
    });
  }

}
