import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GithubServiceTsService {
  private apiUrl = 'https://api.github.com/search/repositories';
  private startDate = '2021-02-01';
  private jsonData = '../../assets/response.json';

  constructor(private http: HttpClient) {}

  getMostStarredRepos(page: number): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append(
      'X-RapidAPI-Key',
      '1108554cc1mshf11c17c4fea2b3dp179054jsn2446fb7a8965'
    );
    const url = `${this.apiUrl}?q=created:>${this.startDate}&sort=stars&order=desc&page=${page}`;
    //return this.http.get("../../assets/response.json");

    return this.http.get(url).pipe(
      map((data) => {
        return data;
      }),
      catchError((error) => {
        return throwError(() => {
          'Something went wrong';
        });
      })
    );
  }
}
