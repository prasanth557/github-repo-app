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
    this.loadRepos(this.currentPage, false);
  }

  loadRepos(pageNumber: number, loadMoreDataCheck: boolean | undefined) {
    this.spinner = true;
    this.githubSevice.getMostStarredRepos(pageNumber).subscribe({
      next: (data) => {
        this.repos =
          loadMoreDataCheck != true
            ? data.items
            : this.repos.concat(data.items);
        if (this.repos) {
          this.spinner = false;
        }
      },
      error: (err) => console.log(err.timestamp, err.message),
    });
  }

  // Append more repos data for the existing repos
  loadMore(pageNumber: number, loadMoreDataCheck?: boolean) {
    this.currentPage = pageNumber;
    this.loadRepos(pageNumber, loadMoreDataCheck);
  }

  openRepoModal(repo: any): void {
    this.selectedRepo = repo;
  }

  selectedRating(rating: number): void {
    this.selectedRepo.userRating = rating;
    this.currentRate = rating;
    this.repos.find((x) => x.id);
  }
}
