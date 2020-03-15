import { Injectable } from '@angular/core';
import { Education } from './education';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducationServiceService {
  private EducationUrl: string;

  createEducation(education:Education){
    throw new Error ("Method not implemented");
  }
  private educationUrl:string;

  constructor(private http: HttpClient) {
    this.EducationUrl = 'http://localhost:8080/api/';
  }
 
  public findAll(): Observable<Education[]> {
    return this.http.get<[Education]>(this.EducationUrl+'Education');
  }
 
  public save(education: Education) {
    return this.http.post<Education>(this.EducationUrl+'EducationSave', education);
  }
}
