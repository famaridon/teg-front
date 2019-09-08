import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TegService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public ping(): Observable<string> {
    return this.http.get<string>('http://localhost:8080/teg/ping');
  }

  public hello(): Observable<string> {
    return this.http.get<string>('http://localhost:8080/teg/hello');
  }
}
