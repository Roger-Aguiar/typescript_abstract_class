import { GeometricShape } from "./abstractClasses/geometricShape";
import { Square } from "./classes/square";

let square: GeometricShape = new Square(5);
let area = square.calculateArea();
console.log(square.displayArea(area.side));