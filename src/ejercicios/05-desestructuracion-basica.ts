interface Reproductor{
    volumne: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const repro: Reproductor = {
    volumne: 69,
    segundo: 189,
    cancion: 'Dance Macabre',
    detalles: {
        autor: 'Ghost',
        anio: 2019
    }
}

const { 
    volumne: volumen, 
    segundo,
    cancion,
    detalles 
} = repro;

const {
    autor,
    anio,
} = detalles;

// console.log('Volumne: ' + volumen);
// console.log('Cancion actual: ' + cancion);
// console.log('Grupo: ' + autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Picolo'];

const [
    ,
    ,
    p3
] = dbz;

// console.log('Perosnaje 1: ' + dbz[0]);
// console.log('Perosnaje 2: ' + dbz[1]);
console.log('Perosnaje 3: ' + p3);