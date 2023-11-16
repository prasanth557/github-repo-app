import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit,OnChanges{
  @Input() repo: any;
  @Output() selectedRating = new EventEmitter<any>();
  currentRate : number = 0 ;
  submitSucess: string = "";
  ngOnChanges(){
    this.submitSucess = "";
    this.currentRate = 0;
  }
  ngOnInit(): void {
    this.currentRate = 0;
  }


  rateRepository(): void {
    console.log(`Rated ${this.currentRate} stars for ${this.repo.name}`);
    this.repo.userRating = this.currentRate;
    this.selectedRating.emit(this.currentRate);
    this.submitSucess = "Submitted Successfully ";
  }
}
