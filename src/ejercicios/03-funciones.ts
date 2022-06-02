function sumar(a: number, b: number): number{
    return a + b;
}

const sum = (a: number, b: number): number =>{
    return a + b;
}

const suma = sumar(12, 15);
//const suma = sumar("D", "R");

function multiplicar(numero: number, otroNumero?: number, base: number = 2){
    return numero * base;
}


const mul = multiplicar(5, 0, 11);


interface PersonajeLOR {
    nom: string,
    pv: number,
    mostrarHp: () => void
}

function curar(personaje: PersonajeLOR, curarHp: number): void {
    personaje.pv += curarHp;

    //console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nom: 'Pep',
    pv: 40,
    mostrarHp(){
        console.log('Puntos de vida: ' + this.pv);
    }
}

nuevoPersonaje.mostrarHp();

curar(nuevoPersonaje, 10);

