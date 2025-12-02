function dado() {
  return Math.floor(Math.random() * 6) + 1;
}

function simularDados(iteraciones = 10000000) {
  const conteo = {};

  for (let i = 0; i < iteraciones; i++) {
    const suma = dado() + dado();
    conteo[suma] = (conteo[suma] || 0) + 1;
  }

  let masFrecuente = null;
  let max = 0;

  for (const suma in conteo) {
    if (conteo[suma] > max) {
      max = conteo[suma];
      masFrecuente = suma;
    }
  }

  return { masFrecuente, repeticiones: max, conteo };
}

console.time("Simulación");
const resultado = simularDados();
console.timeEnd("Simulación");
console.log(resultado);