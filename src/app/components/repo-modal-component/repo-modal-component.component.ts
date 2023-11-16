import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-repo-modal-component',
  templateUrl: './repo-modal-component.component.html',
  styleUrls: ['./repo-modal-component.component.css']
})
export class RepoModalComponentComponent implements OnInit,OnChanges{
 
  @Input() repo: any;
  @Output() closeModal = new EventEmitter<void>();
  @Output() rateRepo = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log("repo:", this.repo);
  }
  ngOnInit(): void {
    //console.log("repo:", this.repo);
  }
  userRating: number | undefined;

  rateRepository(): void {
    if (this.userRating) {
      this.rateRepo.emit(this.userRating);
    }
  }

  close(): void {
    this.closeModal.emit();
  }
}
