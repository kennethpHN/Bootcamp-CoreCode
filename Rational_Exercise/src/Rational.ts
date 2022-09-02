export default class Rational {
    private _numerator: number;
    private _denominator: number;

    constructor(numerator: number, denominator: number){
        this._numerator = numerator;
        this._denominator = denominator;
    }

    get numerator(){
        return this._numerator;
    }
    set numerator(numerator){
        this._numerator = numerator;
    }
    get denominator(){
        return this._denominator;
    }
    set denominator(denominator){
        this._denominator = denominator;
    }

    printRational(){
        console.log(`${this._numerator} / ${this._denominator}`);
    }
    invert(){
        let temp: number = this.numerator;
        this.numerator = this.denominator;
        this.denominator = temp;
    }
    toFloat(){
        return (this.numerator / this.denominator);
    }
    reduce(){
        let a: number = this.numerator;
        let b: number = this.denominator;
        while (a && b && a !== b) {
            if(a > b){
               [a, b] = [a - b, b];
            }else{
               [a, b] = [a, b - a];
            };
         };
         this.numerator = this.numerator/a;
         this.denominator = this.denominator/b;
    }
}