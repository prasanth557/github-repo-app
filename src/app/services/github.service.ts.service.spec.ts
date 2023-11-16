import { TestBed } from '@angular/core/testing';

import { GithubServiceTsService } from './github.service.ts.service';
import { HttpClient } from '@angular/common/http';

describe('GithubServiceTsService', () => {
  let service: GithubServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

var http: HttpClient;

// describe("calservice",()=>{
//   it("Should multiply 2 nums",()=>{
// const calc = new GithubServiceTsService(http);
// const res = calc.multiply(3,5);
//  expect(res).toBe(15);
//   });
// });