import { GeometricShape } from "../abstractClasses/geometricShape";

export class Circle extends GeometricShape{
    constructor(area: number){
        super(area);
    }
    
    calculateArea(): GeometricShape {
        return new Circle((3.14 *(this.area * this.area)));
    }
}