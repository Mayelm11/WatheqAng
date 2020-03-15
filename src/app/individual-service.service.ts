
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Individual } from './Individual';
 
@Injectable({
  providedIn: 'root'
})
export class IndividualUrlServiceService {

 
  IndividualUrl: string;
  createIndividual(individual:Individual){
    throw new Error ("Method not implemented");
  }

  constructor(private http: HttpClient) {
  }
 
   findAll(): Observable<Individual[]> {
    return this.http.get<[Individual]>(this.IndividualUrl+'individual');
  }
 
   save(individual: Individual) {
    return this.http.post<Individual>(this.IndividualUrl+'Individualsave', individual);
  }
}
