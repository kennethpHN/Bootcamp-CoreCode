"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Time_1 = __importDefault(require("./Time"));
class Main {
    start() {
        const t = new Time_1.default(10, 45, 1);
        t.printTime(); // Example of a reader-friendly format above
        /*
          ==================
            Hours: 10
            Minutes: 45
            Seconds: 1
          ==================
        */
        console.log(t.getInSeconds()); // 38701
    }
}
exports.default = Main;
