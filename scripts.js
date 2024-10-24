
const convertButton = document.querySelector(".convert-button") 
const currencySelect = document.querySelector(".currency-select")

function convertValue(){
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas

    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.3
    const bitcoinToday = 384

    

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

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
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

   if(currencySelect.value == "libra"){
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra.png"
   }

   if(currencySelect.value == "bitcoin"){
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
   }

   convertValue()
}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValue)