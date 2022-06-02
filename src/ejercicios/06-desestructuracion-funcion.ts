interface Producto{
    des: string;
    precio: number;
}

const telf: Producto = {
    des: 'Nokia',
    precio: 99
}

const tv: Producto = {
    des: 'LG',
    precio: 599
}

function calculaIVA(productos: Producto[]): number[]{
    let total: number = 0;

    productos.forEach( ({precio}) => {
        total += precio;
    } )
    const iva = total * 0.21
    return [total, Math.round((iva + Number.EPSILON) * 100) / 100];
}

const articulos: Producto[] = [telf, tv];

const [
    total,
    iva
] = calculaIVA(articulos);

console.log('Total: ' + total );
console.log('Iva: ' + iva );