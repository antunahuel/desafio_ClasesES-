

export default class Cliente {
    constructor(nombre){
        this._nombre = nombre;
        this.impuestos = [];    
    };

    //getters
    get nombre(){
        return this._nombre;
    };

    // setters

    set nombre (nuevo_nombre){
        this._nombre = nuevo_nombre
    };


    addValoresImpuesto(impuesto){
        this.impuestos.push(impuesto);
        return this.impuestos;
    }

    calculoImpuestos (){
        const [montosImpuesto]=this.impuestos
        let prueba = montosImpuesto
        let datos = [];
     for (const montos in prueba) {
        datos += `${prueba[montos]},`;
       
     } 
     let valores = datos.split(",");
     return (Number(valores[0]) - Number(valores[1])) * 0.21;
    } 

};

