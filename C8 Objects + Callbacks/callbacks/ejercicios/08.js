const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código: 
  let resultado = callback(array);
 if (resultado === " "){
  return "No se encontró el elemento";
 } else {
  return resultado;
 }

};

module.exports = buscarElemento;
