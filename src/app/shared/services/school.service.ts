import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
private highschoolapi='https://data.cityofnewyork.us/resource/s3k6-pzi2.json '
private sarscore='https://data.cityofnewyork.us/resource/f9bf-2cp4.json '
  constructor(private http:HttpClient) { }
  

  getSchools(): Observable<any>{
return this.http.get<any[]>(this.highschoolapi);
  }

  getSatScores(schoolCode: string): Observable<any[]>{
    return this.http.get<any[]>(`${this.sarscore}?dbn=${schoolCode}`)
  }

}
