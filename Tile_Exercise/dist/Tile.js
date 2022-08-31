"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tile {
    // Constructor
    constructor(letter, value) {
        this._letter = letter;
        this._value = value;
    }
    // Accesors
    get letter() {
        return this._letter;
    }
    set letter(letter) {
        this._letter = letter;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    // Methods
    printTile() {
        return console.log("==================" +
            "\nLetter: " + this.letter +
            "\nValue: " + this.value +
            "\n==================");
    }
}
exports.default = Tile;
