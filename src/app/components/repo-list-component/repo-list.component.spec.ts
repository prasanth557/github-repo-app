import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RepoListComponent } from './repo-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { GithubServiceTsService } from 'src/app/services/github.service.ts.service';
import { Observable, never, of, throwError } from 'rxjs';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpClientModule],
      declarations: [RepoListComponent,HeaderComponent]
    });
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// It covers scenarios where the method sets the spinner to true, loads repos, concatenates repos 
// if loadMoreDataCheck is true, and handles errors appropriately.
describe('RepoListComponent', () => {
  let component: RepoListComponent; 
  let fixture: ComponentFixture<RepoListComponent>; 
  let githubService: jasmine.SpyObj<GithubServiceTsService>; 

  beforeEach(() => {
    const githubServiceSpy = jasmine.createSpyObj('GithubService', ['getMostStarredRepos']);

    TestBed.configureTestingModule({
      declarations: [RepoListComponent,HeaderComponent],
      providers: [
        { provide: GithubServiceTsService, useValue: githubServiceSpy },
      ],
    });

    fixture = TestBed.createComponent(RepoListComponent); 
    component = fixture.componentInstance;
    githubService = TestBed.inject(GithubServiceTsService) as jasmine.SpyObj<GithubServiceTsService>;
  });

  it('should concatenate repos if loadMoreDataCheck is true', fakeAsync(() => {
    const initialData = { items: [{ id: 1, name: 'Repo1' }] };
    const additionalData = { items: [{ id: 2, name: 'Repo2' }] };
    githubService.getMostStarredRepos.and.returnValues(of(initialData), of(additionalData));

    component.loadRepos(1, false);

    // Simulate the passage of time (waiting for the first observable to emit)
    tick();

    expect(component.repos).toEqual(initialData.items);
    expect(component.spinner).toBe(false);

    component.loadRepos(2, true);

    // Simulate the passage of time (waiting for the second observable to emit)
    tick();

    expect(component.repos).toEqual([...initialData.items, ...additionalData.items]);
    expect(component.spinner).toBe(false);
  }));

  it('should handle error and log the details', fakeAsync(() => {
    const errorMessage = 'An error occurred';
    const error = { timestamp: new Date(), message: errorMessage };
    githubService.getMostStarredRepos.and.returnValue(throwError(error));

    spyOn(console, 'log');

    component.loadRepos(1, false);

    // Simulate the passage of time (waiting for the observable to emit)
    tick();

    expect(component.spinner).toBe(true);
    expect(console.log).toHaveBeenCalledWith(error.timestamp, error.message);
  }));
});