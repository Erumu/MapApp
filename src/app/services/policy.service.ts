import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Policy } from '../models/policy.model';

const baseUrl = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Policy[]> {
    return this.http.get<Policy[]>(baseUrl+'/getAll');
  }
/** 
  get(id: any): Observable<Policy> {
    return this.http.get(`${baseUrl}/${id}`);
  }
*/

  get(id: any): Observable<Policy> {
  return this.http.get(baseUrl+'/getPolicy');
}
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Policy[]> {
    return this.http.get<Policy[]>(`${baseUrl}?title=${title}`);
  }
}
