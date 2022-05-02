abstract class GeometricShape {
    side: number;

    constructor(side: number) {
        this.side = side
    }

    abstract calculateArea(): GeometricShape;

    displayArea(area: number): void {
        console.log(`Area: ${area}`);
    }
}