import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  food!:Foods;

  constructor(private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private CartService: CartService, private router:Router){
      activatedRoute.params.subscribe((params) => {
        if(params['id'])
        this.food = foodService.getFoodById(params['id'])
      })
    }

  ngOnInit(): void{}
  
  addToCart(){
    this.CartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
   
  }

}
