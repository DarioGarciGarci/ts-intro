class Persona {
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}
class Heroe extends Persona{
    // alertEgo: string;
    // edad: number;
    // nombreReal: string;

    constructor(
        public alertEgo: string,
        public edad: number,
        public nombreReal: string
        ) {
            super(nombreReal, 'NY');
        }
}

const ironman = new  Heroe('Ironman', 45, 'Tony');


console.log(ironman);