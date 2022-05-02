import { GeometricShape } from "../abstractClasses/geometricShape";

export class Square extends GeometricShape{    
    constructor(side: number) {
        super(side);
    }

    calculateArea(): GeometricShape {
        return new Square(this.side * this.side);
    }

}