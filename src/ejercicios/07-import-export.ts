import {  Producto, calculaIVA } from './06-desestructuracion-funcion';

const carritoCompras: Producto[] = [
    {
        des: 'Nokia',
        precio: 99
    },
    {
        des: 'iPhone',
        precio: 999
    }
];


const [
    total, 
    iva
] = calculaIVA(carritoCompras);

console.log('Total moviles: ' + total );
console.log('Iva: ' + iva );