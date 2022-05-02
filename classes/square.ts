import { GeometricShape } from "../abstractClasses/geometricShape";

export class Square extends GeometricShape{    
    constructor(area: number) {
        super(area);
    }

    calculateArea(): GeometricShape {
        return new Square(this.area * this.area);
    }

}