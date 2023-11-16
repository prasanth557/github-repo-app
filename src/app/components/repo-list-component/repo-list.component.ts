import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GithubServiceTsService } from 'src/app/services/github.service.ts.service';


@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
})
export class RepoListComponent implements OnInit {
  selectedRepo: any;
  currentPage: number = 1;
  repos: any[] = [];
  @Output() openModal = new EventEmitter<any>();
  userRating: number | undefined;
  currentRate: number = 0;
  readonly = true;
  spinner: boolean = false;
  error: string | undefined;

  constructor(private githubSevice: GithubServiceTsService) {}

  ngOnInit(): void {
    this.loadRepos(this.currentPage);
    this.converDateToDays()
  }

  loadRepos(pageNumber:number) {
    this.spinner= true;
    this.githubSevice
      .getMostStarredRepos(pageNumber)
      .subscribe({
        next:(data)=> {
          this.repos = this.repos.concat(data.items);
        if(this.repos){
          this.spinner = false;
        }
        }, error: err => console.log(err.timestamp, err.message)
      });
      //   console.log('Loadrepos data', data);
      //   this.repos = this.repos.concat(data.items);
      //   if(this.repos){
      //     this.spinner = false;
      //   }
      // },
      // (error)=>{
      //   this.error = "Error- Not able to load data"
      //   this.spinner = false;
      // }});
      
  }

  loadMore(pageNumber: number) {
    //this.currentPage++;
    this.currentPage = pageNumber;
    this.loadRepos(pageNumber);
  }

  openRepoModal(repo: any): void {
    //this.display = 'block';
    this.selectedRepo = repo;
  }

  converDateToDays(): void {
    const start = new Date("2023-08-01T14:13:36Z");
    const end = new Date("2023-09-04T14:13:36Z");
    
     // One hour in milliseconds
     const oneHour = 1 * 60 * 60 *1000;

     // Calculating the time difference between two dates
     const diffInTime = end.getDay() - start.getDay();
 
     // Calculating the no. of days between two dates
     //const diffInDays = Math.round(diffInTime / oneHour);
     const diffInDays = Math.round(diffInTime);
 
     if(diffInDays < 0) {
      // return diffInDays * -1
      console.log("diffInDays<0 :",diffInDays * -1);
     }
 
    // return diffInDays;
    console.log("diffInDays- ",diffInDays);
  }

  selectedRating(rating:number): void {
    // Add your logic to rate the repository
    console.log(`Repolist -Rated ${rating} stars for ${this.selectedRepo.name}`);
    this.selectedRepo.userRating = rating;
    this.currentRate = rating;
    // this.closeModal(); // Close the modal after rating
  }
}