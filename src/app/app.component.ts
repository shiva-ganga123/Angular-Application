import { Component } from '@angular/core';
import { StarRatingComponent } from 'angular-star-rating';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Application';
  constructor(){}
  ngOnInit() { 
    const firebaseConfig = {
      apiKey: "AIzaSyBcDsyWtEx1sVlEN5rwOZtHxPcgqzoKbIc",
      authDomain: "first-application-cc52d.firebaseapp.com",
      databaseURL: "https://first-application-cc52d-default-rtdb.firebaseio.com",
      projectId: "first-application-cc52d",
      storageBucket: "first-application-cc52d.appspot.com",
      messagingSenderId: "681226443543",
      appId: "1:681226443543:web:042ae2807bd98b3819b552"
    };
    
    const app = initializeApp(firebaseConfig);
  }

  // onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  //   alert(`Old Value:${$event.oldValue}, 
  //     New Value: ${$event.newValue}, 
  //     Checked Color: ${$event.starRating.color="default"}, 
  //     Unchecked Color: ${$event.starRating.saveOnClick}`);
  // }

}
