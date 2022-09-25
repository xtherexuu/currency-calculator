let fromCurrency = document.querySelector(".js-fromCurrency");
let toCurrency = document.querySelector(".js-toCurrency");
let amount = document.querySelector(".js-amount");
let resoult = document.querySelector(".js-resoult");
let form = document.querySelector(".js-form");

function calculator() {
    if (fromCurrency.value === "PLN" && toCurrency.value === "PLN") {
        resoult.innerText = `${amount.value} ${toCurrency.value}`;
    }
    else if (fromCurrency.value === "EUR" && toCurrency.value === "EUR") {
        resoult.innerText = `${amount.value} ${toCurrency.value}`;
    }
    else if (fromCurrency.value === "USD" && toCurrency.value === "USD") {
        resoult.innerText = `${amount.value} ${toCurrency.value}`;
    }
    else if (fromCurrency.value === "GBP" && toCurrency.value === "GBP") {
        resoult.innerText = `${amount.value} ${toCurrency.value}`;
    };

    if (fromCurrency.value === "PLN" && toCurrency.value === "EUR") {
        resoult.innerText = `${(Number(amount.value) * 0.21).toFixed(2)} EUR`
    } else if (fromCurrency.value === "PLN" && toCurrency.value === "USD") {
        resoult.innerText = `${(Number(amount.value) * 0.20).toFixed(2)} USD`
    } else if (fromCurrency.value === "PLN" && toCurrency.value === "GBP") {
        resoult.innerText = `${(Number(amount.value) * 0.19).toFixed(2)} GBP`
    };

    if (fromCurrency.value === "EUR" && toCurrency.value === "PLN") {
        resoult.innerText = `${(Number(amount.value) * 4.76).toFixed(2)} PLN`
    } else if (fromCurrency.value === "EUR" && toCurrency.value === "USD") {
        resoult.innerText = `${(Number(amount.value) * 0.97).toFixed(2)} USD`
    } else if (fromCurrency.value === "EUR" && toCurrency.value === "GBP") {
        resoult.innerText = `${(Number(amount.value) * 0.89).toFixed(2)} GBP`
    };

    if (fromCurrency.value === "USD" && toCurrency.value === "EUR") {
        resoult.innerText = `${(Number(amount.value) * 1.03).toFixed(2)} EUR`
    } else if (fromCurrency.value === "USD" && toCurrency.value === "PLN") {
        resoult.innerText = `${(Number(amount.value) * 4.90).toFixed(2)} PLN`
    } else if (fromCurrency.value === "USD" && toCurrency.value === "GBP") {
        resoult.innerText = `${(Number(amount.value) * 0.92).toFixed(2)} GBP`
    };

    if (fromCurrency.value === "GBP" && toCurrency.value === "EUR") {
        resoult.innerText = `${(Number(amount.value) * 1.12).toFixed(2)} EUR`
    } else if (fromCurrency.value === "GBP" && toCurrency.value === "USD") {
        resoult.innerText = `${(Number(amount.value) * 1.09).toFixed(2)} USD`
    } else if (fromCurrency.value === "GBP" && toCurrency.value === "PLN") {
        resoult.innerText = `${(Number(amount.value) * 5.31).toFixed(2)} PLN`
    };
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    calculator();
});