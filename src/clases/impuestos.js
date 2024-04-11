//

export default class Impuestos {
    constructor (montoBrutoAnual,deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deduciones = deducciones;
    };
    //getters
    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    };

    get deducciones(){
        return this._deduciones;
    };

    //setters
    set montoBrutoAnual(nuevoMonto_brutoAnual){
        this.montoBrutoAnual = nuevoMonto_brutoAnual;
    };

    set deducciones(nuevo_deduciones){
        this.deducciones = nuevo_deduciones;
    };


};


