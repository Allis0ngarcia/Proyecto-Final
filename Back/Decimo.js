var cadena = '{"nombre":"Allison","direccion":"Carrera 2","celular":"3023748787"}';
var objeto = JSON.parse(cadena);
var cadena2 = '{"nombre":"Martha","direccion":"Carrera 1","celular":"3134567876"}';
var objeto2 = JSON.parse(cadena2);
var cadena3 = '{"nombre":"Alberto","direccion":"Calle 35","celular":"3103657354"}';
var objeto3 = JSON.parse(cadena3);
var cadena4 = '{"nombre":"Camilo","direccion":"Carrera 9 ","celular":"3013471223"}';
var objeto4 = JSON.parse(cadena4);
console.log(objeto.nombre +" " +objeto.direccion +" "+objeto.celular);
console.log(objeto2.nombre +" " +objeto2.direccion +" "+objeto2.celular);
console.log(objeto3.nombre +" " +objeto3.direccion +" "+objeto3.celular);
console.log(objeto4.nombre +" " +objeto4.direccion +" "+objeto4.celular);