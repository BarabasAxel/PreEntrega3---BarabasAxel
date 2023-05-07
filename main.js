const form = document.querySelector("#form-search");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const moneda = document.querySelector("#moneda").value;
  const criptomoneda = document.querySelector("#criptomonedas").value;

  // Usamos operadores ternarios para validar que ambos campos estén completos
  const mensaje = (moneda === "" || criptomoneda === "")
    ? "Ambos campos son obligatorios"
    : "";

  if (mensaje) {
    mostrarMensaje(mensaje, "error");
    return;
  }

  const exchangeRate = await getExchangeRate(moneda, criptomoneda);

  // Usamos operadores ternarios para validar que la moneda seleccionada sea válida
  const mensajeError = (exchangeRate === undefined)
    ? "La moneda seleccionada no es válida"
    : "";

  if (mensajeError) {
    mostrarMensaje(mensajeError, "error");
    return;
  }

  const containerAnswer = document.querySelector(".container-answer");
  containerAnswer.innerHTML = `
    <p class="result">El valor de 1 ${criptomoneda.toUpperCase()} en ${moneda.toUpperCase()} es de: $${exchangeRate.toLocaleString()}</p>
  `;
});

function getExchangeRate(moneda, criptomoneda) {
  const valores = ValoresMonedas(moneda);
  if (valores === null) {
    return undefined;
  }
  return valores[criptomoneda.toLowerCase()];
}

function ValoresMonedas(moneda) {
  switch (moneda) {
    case "ARS":
      return {
        bitcoin: 3500000,
        ethereum: 220000,
        litecoin: 8000,
        dogecoin: 0.3,
      };
    case "USD":
      return {
        bitcoin: 57000,
        ethereum: 3500,
        litecoin: 250,
        dogecoin: 0.5,
      };
    case "MXN":
      return {
        bitcoin: 1200000,
        ethereum: 70000,
        litecoin: 4000,
        dogecoin: 1,
      };
    case "GBP":
      return {
        bitcoin: 41000,
        ethereum: 2500,
        litecoin: 200,
        dogecoin: 0.4,
      };
    case "EUR":
      return {
        bitcoin: 48000,
        ethereum: 3000,
        litecoin: 220,
        dogecoin: 0.45,
      };
    default:
      return null;
  }
}

function mostrarMensaje(mensaje, tipo) {
  const containerAnswer = document.querySelector(".container-answer");
  const divMensaje = document.createElement("div");
  divMensaje.classList.add("alert", tipo);
  divMensaje.textContent = mensaje;
  containerAnswer.appendChild(divMensaje);
  setTimeout(() => {
    divMensaje.remove();
  }, 3000);
}

  
