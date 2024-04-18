// Paso 1: Crear la función que determina si una cadena es un palíndromo
function esPalindromo(cadena: string): boolean {
    // Paso 2: Convertir la cadena a minúsculas y eliminar espacios en blanco
    const cadenaNormalizada = cadena.toLowerCase().replace(/\s/g, '');
  
    // Paso 3: Comparar la cadena original con la cadena invertida
    const cadenInvertida = cadenaNormalizada.split('').reverse().join('');
  
    // Paso 4: Retornar true si la cadena es un palíndromo, false de lo contrario
    return cadenaNormalizada === cadenInvertida;
  }
  
  // Paso 5: Probar la función con algunos ejemplos
  console.log(esPalindromo('ana lava lana')); 
  console.log(esPalindromo('Hola mundo'));
  console.log(esPalindromo('Reconocer')); 