import { Application } from './../component/models/application';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  apiUrl = 'http://localhost:3000/application';
  constructor(private httpClient: HttpClient) {}

  getApplication(): Observable<Application[]> {
    return this.httpClient.get<Application[]>(this.apiUrl);
  }

  getApplicationById(id: number): Observable<Application> {
    return this.httpClient.get<Application>(this.apiUrl + '/' + id);
  }

  addApplication(application: Application) {
    return this.httpClient.post(this.apiUrl, application);
  }

  editApplication(id: number, application: any) {
    return this.httpClient.put(this.apiUrl + '/' + id, application);
  }

  deleteApplication(id: number) {
    return this.httpClient.delete(this.apiUrl + '/' + id);
  }
}
