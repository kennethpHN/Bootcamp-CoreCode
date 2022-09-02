"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rational {
    constructor(numerator, denominator) {
        this._numerator = numerator;
        this._denominator = denominator;
    }
    get numerator() {
        return this._numerator;
    }
    set numerator(numerator) {
        this._numerator = numerator;
    }
    get denominator() {
        return this._denominator;
    }
    set denominator(denominator) {
        this._denominator = denominator;
    }
    printRational() {
        console.log(`${this._numerator} / ${this._denominator}`);
    }
    invert() {
        let temp = this.numerator;
        this.numerator = this.denominator;
        this.denominator = temp;
    }
    toFloat() {
        return (this.numerator / this.denominator);
    }
    reduce() {
        let a = this.numerator;
        let b = this.denominator;
        while (a && b && a !== b) {
            if (a > b) {
                [a, b] = [a - b, b];
            }
            else {
                [a, b] = [a, b - a];
            }
            ;
        }
        ;
        //console.log(a+" test "+b);
        this.numerator = this.numerator / a;
        this.denominator = this.denominator / b;
    }
}
exports.default = Rational;
