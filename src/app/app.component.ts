import { Component } from '@angular/core';
import { StarRatingComponent } from 'angular-star-rating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Application';
  constructor(){}
  ngOnInit() { }

  // onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  //   alert(`Old Value:${$event.oldValue}, 
  //     New Value: ${$event.newValue}, 
  //     Checked Color: ${$event.starRating.color="default"}, 
  //     Unchecked Color: ${$event.starRating.saveOnClick}`);
  // }

}
