import { TestBed, async, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubServiceTsService } from './github.service.ts.service';
import { HttpClientModule  } from '@angular/common/http';

describe('GithubServiceTsService', () => {
  let service: GithubServiceTsService;
  let httpMock: HttpTestingController;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpClientModule],
    });
    service = TestBed.inject(GithubServiceTsService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have getData function', () => {
        const service: GithubServiceTsService = TestBed.inject(GithubServiceTsService);
        expect(service.getMostStarredRepos).toBeTruthy();
       });

       afterEach(() => {
        httpMock.verify();
      });
    
      it('should be created', () => {
        expect(service).toBeTruthy();
      });
    
      it('should return an Observable with repo data on success', waitForAsync(() => {
        const mockData = { items: [{ id: 1, name: 'Repo1' }] };
        const mockPage = 1;
    
        service.getMostStarredRepos(mockPage).subscribe((data) => {
          expect(data).toEqual(mockData);
        });
    
        const req = httpMock.expectOne(
          `${service.apiUrl}?q=created:>${service.startDate}&sort=stars&order=desc&page=${mockPage}`
        );
        expect(req.request.method).toBe('GET');
        req.flush(mockData);
      }));
    
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
