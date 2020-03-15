import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../Education';
import { EducationServiceService } from '../Education-service.service';

@Component({
  selector: 'app-Education-list',
  templateUrl: './Education-list.component.html',
  styleUrls: ['./Education-list.component.css']
})
export class EducationListComponent implements OnInit {
  Education: Observable<Education[]>;
  EducationService: Education[];
  constructor(private EducationServiceService:EducationServiceService) { }

  ngOnInit() {
    this.EducationServiceService.findAll().subscribe(data => {
      this.EducationService = data;
    });

}
}


