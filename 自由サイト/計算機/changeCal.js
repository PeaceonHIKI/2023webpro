function Tokyo() {
    
    var calTokyoElement = document.querySelector('.calTokyo');
    calTokyoElement.style.left = '600px';
    calTokyoElement.style.opacity = '1';

    var calElements = document.querySelectorAll('.calOsaka, .calKyouto, .calKanazawa, .calFukuokaS, .calFukuokaK, .calKita');
    calElements.forEach(function (element) {
        element.style.left = '-500px';
        element.style.opacity = '0';
    });
}
function Kyouto() {
    
    var calKyoutoElement = document.querySelector('.calKyouto');
    calKyoutoElement.style.left = '600px';
    calKyoutoElement.style.opacity = '1';

    var calElements = document.querySelectorAll('.calOsaka, .calTokyo, .calKanazawa, .calFukuokaS, .calFukuokaK, .calKita');
    calElements.forEach(function (element) {
        element.style.left = '-500px';
        element.style.opacity = '0';
    });
}
function Osaka() {
    
    var calOsakaElement = document.querySelector('.calOsaka');
    calOsakaElement.style.left = '600px';
    calOsakaElement.style.opacity = '1';

    var calElements = document.querySelectorAll('.calTokyo, .calKyouto, .calKanazawa, .calFukuokaS, .calFukuokaK, .calKita');
    calElements.forEach(function (element) {
        element.style.left = '-500px';
        element.style.opacity = '0';
    });
}
function Kita() {
    
    var calKitaElement = document.querySelector('.calKita');
    calKitaElement.style.left = '600px';
    calKitaElement.style.opacity = '1';

    var calElements = document.querySelectorAll('.calOsaka, .calKyouto, .calKanazawa, .calFukuokaS, .calFukuokaK, .calTokyo');
    calElements.forEach(function (element) {
        element.style.left = '-500px';
        element.style.opacity = '0';
    });
}
function FukuokaS() {
    
    var calFukuokaSElement = document.querySelector('.calFukuokaS');
    calFukuokaSElement.style.left = '600px';
    calFukuokaSElement.style.opacity = '1';

    var calElements = document.querySelectorAll('.calOsaka, .calKyouto, .calKanazawa, .calTokyo, .calFukuokaK, .calKita');
    calElements.forEach(function (element) {
        element.style.left = '-500px';
        element.style.opacity = '0';
    });
}
function FukuokaK() {
    
    var calFukuokaKElement = document.querySelector('.calFukuokaK');
    calFukuokaKElement.style.left = '600px';
    calFukuokaKElement.style.opacity = '1';

    var calElements = document.querySelectorAll('.calOsaka, .calKyouto, .calKanazawa, .calFukuokaS, .calTokyo, .calKita');
    calElements.forEach(function (element) {
        element.style.left = '-500px';
        element.style.opacity = '0';
    });
}
function Kanazawa() {
    
    var calKanazawaElement = document.querySelector('.calKanazawa');
    calKanazawaElement.style.left = '600px';
    calKanazawaElement.style.opacity = '1';

    var calElements = document.querySelectorAll('.calOsaka, .calKyouto, .calTokyo, .calFukuokaS, .calFukuokaK, .calKita');
    calElements.forEach(function (element) {
        element.style.left = '-500px';
        element.style.opacity = '0';
    });
}