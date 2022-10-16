{
    const outputCurrencyRate = (outputCurrency) => {
        switch (outputCurrency) {
            case "PLN":
                return 1;
            case "EUR":
                return 4.7976;
            case "USD":
                return 4.9363;
            case "GBP":
                return 5.5138;
        }
    };

    const calculator = (inputCurrency, resoultCurrency, amountMoney) => {
        const inputCurrencyRate = inputCurrency.value;
        const userAmount = amountMoney.value;

        return (inputCurrencyRate * userAmount) / outputCurrencyRate(resoultCurrency);
    };

    const onFormSubmit = () => {
        const inputCurrencyElement = document.querySelector(".js-inputCurrency");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");
        const amountMoneyElement = document.querySelector(".js-amount");
        const resoultBoxElement = document.querySelector(".js-resoult");
        const resoultCurrency = outputCurrencyElement.value;

        resoultBoxElement.innerText = `${calculator(inputCurrencyElement, resoultCurrency, amountMoneyElement).toFixed(2)} ${resoultCurrency}`;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            onFormSubmit();
        });
    };

    init();
}
