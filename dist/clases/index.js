"use strict";

var _impuestos = _interopRequireDefault(require("./impuestos.js"));
var _clientes = _interopRequireDefault(require("./clientes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuestos = new _impuestos["default"](20000, 5000);
// console.log({impuestos});

var cliente = new _clientes["default"]("Pancracia Torres");
cliente.addValoresImpuesto(impuestos);
console.log(cliente);
console.log("El resultado de Calculo de Impuesto es: ".concat(cliente.calculoImpuestos()));