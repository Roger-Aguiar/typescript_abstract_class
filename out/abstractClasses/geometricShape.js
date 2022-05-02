"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeometricShape = void 0;
var GeometricShape = /** @class */ (function () {
    function GeometricShape(side) {
        this.side = side;
    }
    GeometricShape.prototype.displayArea = function (area) {
        return "Area: ".concat(area.toString());
    };
    return GeometricShape;
}());
exports.GeometricShape = GeometricShape;
//# sourceMappingURL=geometricShape.js.map