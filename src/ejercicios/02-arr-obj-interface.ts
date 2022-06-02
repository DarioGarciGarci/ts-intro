let habilidades: string[] = ['Bash','Counter','Healing'];

interface Personaje {
    nom: string,
    hp: number,
    habilidades: string[],
    pueblo?: string
}

const personaje: Personaje = {
    nom: 'Pep',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.pueblo = 'Avilés';

console.table( personaje );