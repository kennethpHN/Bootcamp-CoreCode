export default class Board{
    private _matrix: string[][];

    constructor(matrix: string[][]){
        this._matrix = matrix;
    }

    get matrix(){
        return this._matrix;
    }

    set matrix(matrix: string[][]){
        this._matrix = matrix;
    }

    

}