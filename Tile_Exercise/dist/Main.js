"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tile_1 = __importDefault(require("./Tile"));
class Main {
    start() {
        const A = new Tile_1.default('A', 10);
        A.printTile(); // Example of a reader-friendly format above
        /*
          ==================
            Letter: A
            Value: 10
          ==================
        */
        const W = new Tile_1.default('W', '50'); // This should show and error
        W.printTile();
    }
}
exports.default = Main;
