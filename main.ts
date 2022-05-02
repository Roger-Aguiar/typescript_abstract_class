import { GeometricShape } from "./abstractClasses/geometricShape";
import { Circle } from "./classes/circle";
import { Square } from "./classes/square";

let square: GeometricShape = new Square(5);
let squareArea = square.calculateArea();
console.log(`Square ${square.displayArea(squareArea.area)}`);

let circle: GeometricShape = new Circle(5);
let circleArea = circle.calculateArea();
console.log(`Circle ${square.displayArea(circleArea.area)}`);