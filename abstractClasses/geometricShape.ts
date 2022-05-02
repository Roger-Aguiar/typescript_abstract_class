export abstract class GeometricShape {
    area: number;

    constructor(area: number) {
        this.area = area
    }

    abstract calculateArea(side1?: number, side2?: number): GeometricShape;

    displayArea(area: number) {
        return `Area: ${area.toString()}`;        
    }
}