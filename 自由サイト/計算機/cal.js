function calculateTaxByKyouto() {
    var numberOfPeople = parseInt(document.getElementById('KnumberOfPeople').value);
    var numberOfNights = parseInt(document.getElementById('KnumberOfNights').value);
    var hotelPrice = parseInt(document.getElementById('KhotelPrice').value);

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

    document.getElementById('Kresult').innerHTML = "総宿泊税: " + totalTax + "円";
    document.getElementById('KtotalAmount').innerHTML = "総宿泊費用: " + (totalAmount + totalTax) + "円";
    document.getElementById('KtaxPerPerson').innerHTML = "一人あたり宿泊税: " + (totalTax / numberOfPeople) + "円";
}

function calculateTaxByKanazawa() {
        
    var numberOfPeople = parseInt(document.getElementById('KAnumberOfPeople').value);
    var numberOfNights = parseInt(document.getElementById('KAnumberOfNights').value);
    var hotelPrice = parseInt(document.getElementById('KAhotelPrice').value);

    var taxRate;
    var totalTax;
    var totalAmount = hotelPrice;

    if (totalAmount / (numberOfNights * numberOfPeople) < 20000) {
        taxRate = 200;
    } else {
        taxRate = 500;
    }

    totalTax = taxRate * numberOfPeople * numberOfNights;

    document.getElementById('KAresult').innerHTML = "総宿泊税: " + totalTax + "円";
    document.getElementById('KAtotalAmount').innerHTML = "総宿泊費用: " + (totalAmount + totalTax) + "円";
    document.getElementById('KAtaxPerPerson').innerHTML = "一人あたり宿泊税: " + (totalTax / numberOfPeople) + "円";
}  

function calculateTaxByKita() {
        
    var numberOfPeople = parseInt(document.getElementById('KInumberOfPeople').value);
    var numberOfNights = parseInt(document.getElementById('KInumberOfNights').value);
    var hotelPrice = parseInt(document.getElementById('KIhotelPrice').value);

    var taxRate=200;
    var totalTax;
    var totalAmount = hotelPrice;

    totalTax = taxRate * numberOfPeople * numberOfNights;

    document.getElementById('KIresult').innerHTML = "総宿泊税: " + totalTax + "円";
    document.getElementById('KItotalAmount').innerHTML = "総宿泊費用: " + (totalAmount + totalTax) + "円";
    document.getElementById('KItaxPerPerson').innerHTML = "一人あたり宿泊税: " + (totalTax / numberOfPeople) + "円";
}  


function calculateTaxByFukuokaS() {
        
    var numberOfPeople = parseInt(document.getElementById('FSnumberOfPeople').value);
    var numberOfNights = parseInt(document.getElementById('FSnumberOfNights').value);
    var hotelPrice = parseInt(document.getElementById('FShotelPrice').value);

    var taxRate;
    var totalTax;
    var totalAmount = hotelPrice;

    if (totalAmount / (numberOfNights * numberOfPeople) < 20000) {
        taxRate = 200;
    } else {
        taxRate = 500;
    }

    totalTax = taxRate * numberOfPeople * numberOfNights;

    document.getElementById('FSresult').innerHTML = "総宿泊税: " + totalTax + "円";
    document.getElementById('FStotalAmount').innerHTML = "総宿泊費用: " + (totalAmount + totalTax) + "円";
    document.getElementById('FStaxPerPerson').innerHTML = "一人あたり宿泊税: " + (totalTax / numberOfPeople) + "円";
}  

function calculateTaxByFukuokak() {
    var numberOfPeople = parseInt(document.getElementById('FKnumberOfPeople').value);
    var numberOfNights = parseInt(document.getElementById('FKnumberOfNights').value);
    var hotelPrice = parseInt(document.getElementById('FKhotelPrice').value);

    var taxRate = 200;
    var totalTax;
    var totalAmount = hotelPrice;

    totalTax = taxRate * numberOfPeople * numberOfNights;

    document.getElementById('FKresult').innerHTML = "総宿泊税: " + totalTax + "円";
    document.getElementById('FKtotalAmount').innerHTML = "総宿泊費用: " + (totalAmount + totalTax) + "円";
    document.getElementById('FKtaxPerPerson').innerHTML = "一人あたり宿泊税: " + (totalTax / numberOfPeople) + "円";
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

    document.getElementById('Tresult').innerHTML = "総宿泊税: " + totalTax + "円";
    document.getElementById('TtotalAmount').innerHTML = "総宿泊費用: " + (totalAmount + totalTax) + "円";
    document.getElementById('TtaxPerPerson').innerHTML = "一人あたり宿泊税: " + (totalTax / numberOfPeople) + "円";
}  


function calculateTaxByOsaka() {
        
    var numberOfPeople = parseInt(document.getElementById('OnumberOfPeople').value);
    var numberOfNights = parseInt(document.getElementById('OnumberOfNights').value);
    var hotelPrice = parseInt(document.getElementById('OhotelPrice').value);

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

    document.getElementById('Oresult').innerHTML = "総宿泊税: " + totalTax + "円";
    document.getElementById('OtotalAmount').innerHTML = "総宿泊費用: " + (totalAmount + totalTax) + "円";
    document.getElementById('OtaxPerPerson').innerHTML = "一人あたり宿泊税: " + (totalTax / numberOfPeople) + "円";
}  