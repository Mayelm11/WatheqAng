import { Observable } from 'rxjs';
import { Individual } from '../Individual';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Individual-list',
  templateUrl: './Individual-list.component.html',
  styleUrls: ['./Individual-list.component.css']
})
export class IndividualListComponent implements OnInit {
  individual: Observable<Individual[]>;
  Individual: Individual[];
  constructor(private individualService:any) { }

  ngOnInit() {
    this.individualService.findAll().subscribe(data => {
      this.Individual = data;
    });

}
}

