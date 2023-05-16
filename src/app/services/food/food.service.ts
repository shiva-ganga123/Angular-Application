import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import  {Foods} from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag:string): Foods[]{
    return tag == "All"?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag(): Tag[]{
    return [ 
      {
        name: 'All', count: 4
      },
      {
        name: 'Breakfast', count: 2
      },
      {
        name: 'Tasty', count: 1
      },
      {
        name: 'Tomato', count: 1
      },
      {
        name: 'Bread', count: 1
      },
      {
        name: 'Tomato', count: 1
      },
      {
        name: 'boxitems', count: 1
      },
      {
        name: 'meat', count: 1
      },
      {
        name: 'colourful', count: 1
      },
      {
        name: 'Gifts', count: 1
      },
      {
        name: 'Cheese', count: 1
      },
      {
        name: 'Fruits', count: 1
      }

    ];
  }

  getAll():Foods[]{
    return [ 
    {
    id: 1,
    name:  "Cheese Bread",
    price: 20,
    cookTime: "25-30",
    favorite: true,
    origins:["American"],
    star: 4.0,
    imageUrl:"/assets/food-1.jpeg",
    tags:["Breakfast", "Bread", "Cheese"],
    },
    {
    id: 2,
    name:  "Salad",
    price: 15,
    cookTime: "10",
    favorite: false,
    origins:["Indian"],
    star: 5.0,
    imageUrl:"/assets/food-2.jpeg",
    tags:["Breakfast", "Tomato", "meat"],
    },
    {
    id: 3,
    name:  "Sweets",
    price: 25,
    cookTime: "5",
    favorite: true,
    origins:["Indian"],
    star: 5.0,
    imageUrl:"/assets/food-4.jpeg",
    tags:["Gifts", "sweet", "boxitems"],
    },
    {
    id: 4,
    name:  "Fruit Bowl",
    price: 20,
    cookTime: "25-30",
    favorite: false,
    origins:['Italian', 'American'],
    star: 5.0,
    imageUrl:"/assets/food-6.jpeg",
    tags:["Fruits", "Tasty", "colourful"],
    }
    
    ];
  }
}
