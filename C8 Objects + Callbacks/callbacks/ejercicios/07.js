function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let resultado = arrayOfStrings.filter( (str) => 
      str[0] === 'a'
      );

 return  resultado;
}

module.exports = filter;
