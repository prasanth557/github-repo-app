import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubServiceTsService } from './github.service.ts.service';
import { HttpClient, HttpClientModule  } from '@angular/common/http';

describe('GithubServiceTsService', () => {
  let service: GithubServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpClientModule],
    });
    service = TestBed.inject(GithubServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have getData function', () => {
        const service: GithubServiceTsService = TestBed.inject(GithubServiceTsService);
        expect(service.getMostStarredRepos).toBeTruthy();
       });
});

describe('myService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,HttpClientModule], 
    providers: [GithubServiceTsService]
  }));

   it('should be created', () => {
    const service: GithubServiceTsService = TestBed.inject(GithubServiceTsService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: GithubServiceTsService = TestBed.inject(GithubServiceTsService);
    expect(service.getMostStarredRepos).toBeTruthy();
   });

});