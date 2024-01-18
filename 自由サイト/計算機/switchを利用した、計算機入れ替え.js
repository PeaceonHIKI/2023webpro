    // 都市名によって、計算式を変える
    document.addEventListener("DOMContentLoaded", function () {
        var kanaElement = document.querySelector(".kanazawa");
        var fukukElement = document.querySelector(".fukuokaken");
        var fukusElement = document.querySelector(".fukuokashi");
        var tokyoElement = document.querySelector(".tokyo");
        var osakaElement = document.querySelector(".osaka");
        var kyoutoElement = document.querySelector(".kyouto");
        var kitaElement = document.querySelector(".kita");
    
        var city;
        var cal;
    
        kanaElement.addEventListener("click", function () {
            city = "Kanazawa";
            calculate(); 
        });
    
        fukukElement.addEventListener("click", function () {
            city = "FukuokaK";
            calculate();
        });
    
        fukusElement.addEventListener("click", function () {
            city = "FukuokaS";
            calculate();
        });
    
        tokyoElement.addEventListener("click", function () {
            city = "Tokyo";
            calculate();
        });
    
        kyoutoElement.addEventListener("click", function () {
            city = "Kyouto";
            calculate();
        });
    
        kitaElement.addEventListener("click", function () {
            city = "Kita";
            calculate();
        });
    
        osakaElement.addEventListener("click", function () {
            city = "Osaka";
            calculate();
        });
    
        function calculate() {
            switch (city) {
                case "Tokyo":
                    cal = 6;
                    break;
                case "Kanazawa": 
                    cal = 2;
                    break;
                case "Kyouto":
                    cal = 1;
                    break;
                case "Kita":
                    cal = 3;
                    break;
                case "Osaka":
                    cal = 7;
                    break;
                case "FukuokaK":
                    cal = 5;
                    break;
                case "FukuokaS":
                    cal = 4;
                    break;
                default:
                    cal = 6;
            }
        }
    });
function calculateTax() {
        
    var numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);
    var numberOfNights = parseInt(document.getElementById('numberOfNights').value);
    var hotelPrice = parseInt(document.getElementById('hotelPrice').value);

    var taxRate;
    var totalTax;
    var totalAmount = hotelPrice;

    if (totalAmount / (numberOfNights * numberOfPeople) < 20000) {
        taxRate = 200;
    } else if (totalAmount / (numberOfNights * numberOfPeople) < 50000) {
        taxRate = 500;
    } else {
        taxRate = 1000;
    }

    totalTax = taxRate * numberOfPeople * numberOfNights;

    document.getElementById('result').innerHTML = "総宿泊税: " + totalTax + "円";
    document.getElementById('totalAmount').innerHTML = "総宿泊費用: " + (totalAmount + totalTax) + "円";
    document.getElementById('taxPerPerson').innerHTML = "一人あたり宿泊税: " + (totalTax / numberOfPeople) + "円";
}  

function calculateTaxByKanazawa() {
        
    var numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);
    var numberOfNights = parseInt(document.getElementById('numberOfNights').value);
    var hotelPrice = parseInt(document.getElementById('hotelPrice').value);

    var taxRate;
    var totalTax;
    var totalAmount = hotelPrice;

    if (totalAmount / (numberOfNights * numberOfPeople) < 20000) {
        taxRate = 200;
    } else {
        taxRate = 500;
    }

    totalTax = taxRate * numberOfPeople * numberOfNights;

    document.getElementById('result').innerHTML = "総宿泊税: " + totalTax + "円";
    document.getElementById('totalAmount').innerHTML = "総宿泊費用: " + (totalAmount + totalTax) + "円";
    document.getElementById('taxPerPerson').innerHTML = "一人あたり宿泊税: " + (totalTax / numberOfPeople) + "円";
}  


function calculateTaxByKita() {
        
    var numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);
    var numberOfNights = parseInt(document.getElementById('numberOfNights').value);
    var hotelPrice = parseInt(document.getElementById('hotelPrice').value);

    var taxRate=200;
    var totalTax;
    var totalAmount = hotelPrice;

    totalTax = taxRate * numberOfPeople * numberOfNights;

    document.getElementById('result').innerHTML = "総宿泊税: " + totalTax + "円";
    document.getElementById('totalAmount').innerHTML = "総宿泊費用: " + (totalAmount + totalTax) + "円";
    document.getElementById('taxPerPerson').innerHTML = "一人あたり宿泊税: " + (totalTax / numberOfPeople) + "円";
}  


function calculateTaxByFukuS() {
        
    var numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);
    var numberOfNights = parseInt(document.getElementById('numberOfNights').value);
    var hotelPrice = parseInt(document.getElementById('hotelPrice').value);

    var taxRate;
    var totalTax;
    var totalAmount = hotelPrice;

    if (totalAmount / (numberOfNights * numberOfPeople) < 20000) {
        taxRate = 200;
    } else {
        taxRate = 500;
    }

    totalTax = taxRate * numberOfPeople * numberOfNights;

    document.getElementById('result').innerHTML = "総宿泊税: " + totalTax + "円";
    document.getElementById('totalAmount').innerHTML = "総宿泊費用: " + (totalAmount + totalTax) + "円";
    document.getElementById('taxPerPerson').innerHTML = "一人あたり宿泊税: " + (totalTax / numberOfPeople) + "円";
}  

function calculateTaxByFukuk() {
        
    var numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);
    var numberOfNights = parseInt(document.getElementById('numberOfNights').value);
    var hotelPrice = parseInt(document.getElementById('hotelPrice').value);

    var taxRate=200;
    var totalTax;
    var totalAmount = hotelPrice;

    totalTax = taxRate * numberOfPeople * numberOfNights;

    document.getElementById('result').innerHTML = "総宿泊税: " + totalTax + "円";
    document.getElementById('totalAmount').innerHTML = "総宿泊費用: " + (totalAmount + totalTax) + "円";
    document.getElementById('taxPerPerson').innerHTML = "一人あたり宿泊税: " + (totalTax / numberOfPeople) + "円";
}  

function calculateTaxByTokyo() {
        
    var numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);
    var numberOfNights = parseInt(document.getElementById('numberOfNights').value);
    var hotelPrice = parseInt(document.getElementById('hotelPrice').value);

    var taxRate;
    var totalTax;
    var totalAmount = hotelPrice;

    if (totalAmount / (numberOfNights * numberOfPeople) < 10000) {
        taxRate = 0;
    } else if (totalAmount / (numberOfNights * numberOfPeople) < 15000) {
        taxRate = 100;
    } else {
        taxRate = 200;
    }

    totalTax = taxRate * numberOfPeople * numberOfNights;

    document.getElementById('result').innerHTML = "総宿泊税: " + totalTax + "円";
    document.getElementById('totalAmount').innerHTML = "総宿泊費用: " + (totalAmount + totalTax) + "円";
    document.getElementById('taxPerPerson').innerHTML = "一人あたり宿泊税: " + (totalTax / numberOfPeople) + "円";
}  


function calculateTaxByOsaka() {
        
    var numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);
    var numberOfNights = parseInt(document.getElementById('numberOfNights').value);
    var hotelPrice = parseInt(document.getElementById('hotelPrice').value);

    var taxRate;
    var totalTax;
    var totalAmount = hotelPrice;

    if (totalAmount / (numberOfNights * numberOfPeople) < 7000) {
        taxRate = 0;
    } else if (totalAmount / (numberOfNights * numberOfPeople) < 15000) {
        taxRate = 100;
    }  else if (totalAmount / (numberOfNights * numberOfPeople) < 20000) {
        taxRate = 200;
    }  else {
        taxRate = 300;
    }

    totalTax = taxRate * numberOfPeople * numberOfNights;

    document.getElementById('result').innerHTML = "総宿泊税: " + totalTax + "円";
    document.getElementById('totalAmount').innerHTML = "総宿泊費用: " + (totalAmount + totalTax) + "円";
    document.getElementById('taxPerPerson').innerHTML = "一人あたり宿泊税: " + (totalTax / numberOfPeople) + "円";
}  

