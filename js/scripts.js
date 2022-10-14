{
  const fromCurrencyElement = document.querySelector(".js-fromCurrency");
  const toCurrencyElement = document.querySelector(".js-toCurrency");
  const amount = document.querySelector(".js-amount");
  const resoult = document.querySelector(".js-resoult");

  const ifTheSameValue = () => {
    if (fromCurrencyElement.value === "PLN" && toCurrencyElement.value === "PLN") {
      resoult.innerText = `${amount.value} ${toCurrencyElement.value}`;
    } else if (fromCurrencyElement.value === "EUR" && toCurrencyElement.value === "EUR") {
      resoult.innerText = `${amount.value} ${toCurrencyElement.value}`;
    } else if (fromCurrencyElement.value === "USD" && toCurrencyElement.value === "USD") {
      resoult.innerText = `${amount.value} ${toCurrencyElement.value}`;
    } else if (fromCurrencyElement.value === "GBP" && toCurrencyElement.value === "GBP") {
      resoult.innerText = `${amount.value} ${toCurrencyElement.value}`;
    }
  };

  const ifValueIsPLN = () => {
    if (fromCurrencyElement.value === "PLN" && toCurrencyElement.value === "EUR") {
      resoult.innerText = `${(Number(amount.value) * 0.21).toFixed(2)} EUR`;
    } else if (fromCurrencyElement.value === "PLN" && toCurrencyElement.value === "USD") {
      resoult.innerText = `${(Number(amount.value) * 0.2).toFixed(2)} USD`;
    } else if (fromCurrencyElement.value === "PLN" && toCurrencyElement.value === "GBP") {
      resoult.innerText = `${(Number(amount.value) * 0.19).toFixed(2)} GBP`;
    }
  };

  const ifValueIsEUR = () => {
    if (fromCurrencyElement.value === "EUR" && toCurrencyElement.value === "PLN") {
      resoult.innerText = `${(Number(amount.value) * 4.76).toFixed(2)} PLN`;
    } else if (fromCurrencyElement.value === "EUR" && toCurrencyElement.value === "USD") {
      resoult.innerText = `${(Number(amount.value) * 0.97).toFixed(2)} USD`;
    } else if (fromCurrencyElement.value === "EUR" && toCurrencyElement.value === "GBP") {
      resoult.innerText = `${(Number(amount.value) * 0.89).toFixed(2)} GBP`;
    }
  };

  const ifValueIsUSD = () => {
    if (fromCurrencyElement.value === "USD" && toCurrencyElement.value === "EUR") {
      resoult.innerText = `${(Number(amount.value) * 1.03).toFixed(2)} EUR`;
    } else if (fromCurrencyElement.value === "USD" && toCurrencyElement.value === "PLN") {
      resoult.innerText = `${(Number(amount.value) * 4.9).toFixed(2)} PLN`;
    } else if (fromCurrencyElement.value === "USD" && toCurrencyElement.value === "GBP") {
      resoult.innerText = `${(Number(amount.value) * 0.92).toFixed(2)} GBP`;
    }
  };

  const ifValueIsGBP = () => {
    if (fromCurrencyElement.value === "GBP" && toCurrencyElement.value === "EUR") {
      resoult.innerText = `${(Number(amount.value) * 1.12).toFixed(2)} EUR`;
    } else if (fromCurrencyElement.value === "GBP" && toCurrencyElement.value === "USD") {
      resoult.innerText = `${(Number(amount.value) * 1.09).toFixed(2)} USD`;
    } else if (fromCurrencyElement.value === "GBP" && toCurrencyElement.value === "PLN") {
      resoult.innerText = `${(Number(amount.value) * 5.31).toFixed(2)} PLN`;
    }
  };

  const calculator = () => {
    ifTheSameValue();
    ifValueIsPLN();
    ifValueIsEUR();
    ifValueIsUSD();
    ifValueIsGBP();
  };

  const init = () => {
    const form = document.querySelector(".js-form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      calculator();
    });
  };

  init();
}
