const currencyRatio = {
  JPY: { USD: 0.0068, KRW: 9.08, CNY: 0.048, JPY: 1 },
  CNY: { USD: 0.14, KRW: 188.52, CNY: 1, JPY: 20.77 },
  USD: { USD: 1, KRW: 1342.56, CNY: 7.11, JPY: 147.83 },
  KRW: { USD: 0.00075, KRW: 1, CNY: 0.0053, JPY: 0.11 },
};

var unitWords = ["", "マン", "億", "兆", "京"];
var splitUnit = 10000;

let fromButton = document.getElementById("from-button");
let toButton = document.getElementById("to-button");

let fromCurrency = "JPY";
let toCurrency = "USD";

document.querySelectorAll("#to-currency-list li").forEach(function (item) {
  item.addEventListener("click", function () {
    toCurrency = this.id;
    toButton.innerHTML = toCurrency;
    convert("to");
  });
});

function renderJapaneseNumber(amount) {
  document.getElementById("fromNumToJP").textContent = readNum(amount) + "円";
  document.getElementById("toNumToJPUSD").textContent = readNum(amount * currencyRatio[fromCurrency]["USD"]) + "＄";
  document.getElementById("toNumToJPKRW").textContent = readNum(amount * currencyRatio[fromCurrency]["KRW"]) + "₩";
  document.getElementById("toNumToJPCNY").textContent = readNum(amount * currencyRatio[fromCurrency]["CNY"]) + "￥";
}

function readNum(num) {
  let resultString = "";
  let resultArray = [];

  for (let i = 0; i < unitWords.length; i++) {
    let unitResult = (num % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);

    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }

  for (let i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString = String(resultArray[i]) + unitWords[i] + resultString;
  }

  return resultString;
}

function convert(type) {
  let amount = 0;

  if (type == "from") {
    amount = document.getElementById("fromAmount").value;
    document.getElementById("toAmountUSD").value = formatNumber(amount * currencyRatio[fromCurrency]["USD"]);
    document.getElementById("toAmountKRW").value = formatNumber(amount * currencyRatio[fromCurrency]["KRW"]);
    document.getElementById("toAmountCNY").value = formatNumber(amount * currencyRatio[fromCurrency]["CNY"]);
    renderJapaneseNumber(amount);
  } else {
    amount = document.getElementById(`toAmount${toCurrency}`).value;
    document.getElementById("fromAmount").value = formatNumber(amount * currencyRatio[toCurrency][fromCurrency]);
    renderJapaneseNumber(amount);
  }
}

function formatNumber(value) {
  return parseFloat(value).toFixed(2);
}