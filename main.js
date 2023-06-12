document.addEventListener('DOMContentLoaded', () => {
  const calcularPropinaBtn = document.getElementById('calcularPropina');
  calcularPropinaBtn.addEventListener('click', calcularPropina);
});

const calcularPropina = () => {
  const montoTotal = parseFloat(document.getElementById('montoTotal').value);
  const comensales = parseInt(document.getElementById('comensales').value);
  const porcentajePropina = parseInt(document.getElementById('porcentajePropina').value);

  const propinaTotalEl = document.getElementById('propinaTotal');
  const propinaPorComensalEl = document.getElementById('propinaPorComensal');

  if (isNaN(montoTotal) || isNaN(comensales) || montoTotal <= 0 || comensales <= 0) {
    propinaTotalEl.textContent = 'Ingrese valores numéricos válidos y mayores a cero.';
    propinaPorComensalEl.textContent = '';
  } else {
    const propina = montoTotal * (porcentajePropina / 100); // Calculamos la propina según el porcentaje seleccionado
    const propinaPorComensal = propina / comensales;
    propinaTotalEl.textContent = `Propina total: $${propina.toFixed(2)}`;
    propinaPorComensalEl.textContent = `Propina por comensal: $${propinaPorComensal.toFixed(2)}`;
  }
};