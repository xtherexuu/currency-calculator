{
    const inputCurrencyRate = (inputCurrencyElement) => {
        const inputCurrency = inputCurrencyElement.value;

        switch (inputCurrency) {
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

    const outputCurrencyRate = (outputCurrencyElement) => {
        const outputCurrency = outputCurrencyElement.value;

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

    const calculator = (inputCurrencyElement, outputCurrencyElement, userAmount) => {
        return (inputCurrencyRate(inputCurrencyElement) * userAmount) / outputCurrencyRate(outputCurrencyElement);
    };

    const onFormSubmit = () => {
        const inputCurrencyElement = document.querySelector(".js-inputCurrency");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");
        const userAmount = document.querySelector(".js-amount").value;
        const resoultCurrency = outputCurrencyElement.value;
        const inputCurrency = inputCurrencyElement.value;
        const resoultBoxElement = document.querySelector(".js-resoult");
        const explanationResoultElement = document.querySelector(".js-explanationResoult");

        resoultBoxElement.innerText = `${calculator(inputCurrencyElement, outputCurrencyElement, userAmount).toFixed(2)} ${resoultCurrency}`;
        explanationResoultElement.innerText = `${userAmount} ${inputCurrency} = ${calculator(inputCurrencyElement, outputCurrencyElement, userAmount).toFixed(2)} ${resoultCurrency}`;
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
