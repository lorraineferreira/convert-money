
const convertButton = document.querySelector(".convert-button") 
const currencySelect = document.querySelector(".currency-select")

async function convertValue(){
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas

    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    console.log(data)

    console.log(currencySelect.value)

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const bitcoinToday = data.BTCBRL.high

    

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

   


}

function changeCurrency(){
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector(".currency-img") 


   if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dolar americano"
    currencyImage.src = "./assets/dolar.png"
   }

   if(currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
   }


   if(currencySelect.value == "bitcoin"){
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
   }

   convertValue()
}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValue)