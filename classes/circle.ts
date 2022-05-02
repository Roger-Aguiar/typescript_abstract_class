import { GeometricShape } from "../abstractClasses/geometricShape";

export class Circle extends GeometricShape{
    constructor(radius: number){
        super(radius);
    }
    
    calculateArea(): GeometricShape {
        return new Circle((3.14 *(this.side * this.side)));
    }
}