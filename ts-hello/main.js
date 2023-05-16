"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
// get X(){
//     return this._x;
// }
// set X(value: number){
//     if(value < 1)
//         throw new Error("Value should not be 0.");
//     this._x = value;
// }
var point = new point_1.Point(1, 2);
point.draw();
