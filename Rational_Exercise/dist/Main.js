"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Rational_1 = __importDefault(require("./Rational"));
class Main {
    start() {
        const r1 = new Rational_1.default(36, 120);
        r1.printRational(); // 36 / 120
        console.log(r1.toFloat()); // 0.3
        r1.reduce();
        r1.printRational(); // 3 / 10
        r1.invert();
        r1.printRational(); // 10 / 3
        r1.reduce();
        r1.printRational(); // 10 / 3
    }
}
exports.default = Main;
