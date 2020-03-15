import { Component, OnInit } from '@angular/core';
import { Individual } from '../individual';

@Component({
  selector: 'app-individual-form',
  templateUrl: './individual-form.component.html',
  styleUrls: ['./individual-form.component.css']
})
export class IndividualFormComponent implements OnInit {


  Individual: Individual = new Individual;
    submitted = false;
    IndividualService: Individual;
    
  constructor(private IndividualServiceService:any ) { }
  
  ngOnInit(): void {
  
  }
  newEducation(): void {
    this.submitted = false;
    this.Individual = new Individual();
  }
  onSubmit() {
    this.save();
  }
  save() {
    this.IndividualServiceService.save(this.Individual)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.Individual = new Individual();
      }
  }
  