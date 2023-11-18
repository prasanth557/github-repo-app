import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GithubServiceTsService {
  public apiUrl = 'https://api.github.com/search/repositories';
  public startDate = '2021-02-01';
  private jsonData = '../../assets/response.json';

  constructor(private http: HttpClient) {}

  getMostStarredRepos(page: number): Observable<any> {
    const url = `${this.apiUrl}?q=created:>${this.startDate}&sort=stars&order=desc&page=${page}`;

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
