export default class Tile {
    // Properties
    private _letter: string;
    private _value: number;

    // Constructor
    constructor(letter: string, value: number){
        this._letter = letter;
        this._value = value;
    }
    // Accesors
    get letter(){
        return this._letter;
    }
    set letter(letter){
        this._letter = letter;
    }
    get value(){
        return this._value;
    }
    set value(value){
        this._value = value;
    }
    // Methods
    printTile(){
        return console.log(
        "=================="+
        "\nLetter: "+this.letter+
        "\nValue: "+this.value+
        "\n==================");
    }
}