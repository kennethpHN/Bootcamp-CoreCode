export default class Time {
    private _hour: number;
    private _minute: number;
    private _second: number;

    constructor(hour: number, minute: number, second: number){
        this._hour = hour;
        this._minute = minute;
        this._second = second;
    }

    get hour(){
        return this._hour;
    }
    set hour(hour){
        this._hour = hour;
    }
    get minute(){
        return this._minute;
    }
    set minute(minute){
        this._minute = minute;
    }
    get second(){
        return this._second;
    }
    set second(second){
        this._second = second;
    }

    getInSeconds(){
        return (this.hour*3600 + this.minute*60 + this.second);
    }
    printTime(){
        return console.log(
        `
        ==================
            Hours: ${this.hour}
            Minutes: ${this.minute}
            Seconds: ${this.second}
        ==================
        `
        )
    }
}