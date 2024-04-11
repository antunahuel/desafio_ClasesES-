import Impuestos from "./impuestos.js";
import Cliente from "./clientes.js";

const impuestos = new Impuestos (20_000,5_000);
// console.log({impuestos});


const cliente = new Cliente ("Pancracia Torres");
cliente.addValoresImpuesto(impuestos);

console.log(cliente);

console.log(`El resultado de Calculo de Impuesto es: ${cliente.calculoImpuestos()}`);

