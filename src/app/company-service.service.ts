
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
 
@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

 
  private companyUrl: string;
  createCompany(company:Company){
    throw new Error ("Method not implemented");
  }
  private companniesUrl:string;

  constructor(private http: HttpClient) {
    this.companyUrl = 'http://localhost:8080/api/';
  }
 
   findAll(): Observable<Company[]> {
    return this.http.get<[Company]>(this.companyUrl+'company');
  }
 
   save(company: Company) {
    return this.http.post<Company>(this.companyUrl+'companysave', company);
  }
}
 
