class Square extends GeometricShape{
    area: number;

    constructor(side: number) {
        super(side);
    }

    calculateArea(): GeometricShape {
        return new Square(this.side * this.side);
    }

}