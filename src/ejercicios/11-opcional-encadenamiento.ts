interface Pasajero {
  nom: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nom: 'Pep'
}

const pasajero2: Pasajero = {
  nom: 'Sara',
  hijos: ['Natalia','Juan']
}

function imprimeHijos(pasajero: Pasajero): void{
 
  const cuantosHijos = pasajero.hijos?.length || 0;

  console.log(cuantosHijos);

}


imprimeHijos(pasajero1);