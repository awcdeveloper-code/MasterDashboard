import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API URL

  constructor(private http: HttpClient) { }

  // GET request
  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // POST request
  createPost(post: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, post, { headers });
  }
}