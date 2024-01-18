
// リセットボタンとエフェクト

document.addEventListener("DOMContentLoaded", function () {
    var gm1Element = document.querySelector(".me");
    var name1Element = document.querySelector(".reset");
    var hikari1Element = document.querySelector(".hikari");

    var animationDuration = 1300;

    function setOpacityAndScale(resetElement, hikariElement, opacity, scale) {
        resetElement.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        resetElement.style.opacity = opacity;
        resetElement.style.top = opacity === 1 ? "500px" : "550px";

        hikariElement.style.transition = `opacity ${animationDuration}ms, transform ${animationDuration}ms`;
        hikariElement.style.opacity = opacity;
        hikariElement.style.transform = `scale(${scale})`;
    }

    gm1Element.addEventListener("mouseover", function () {
        setOpacityAndScale(name1Element, hikari1Element, 1, 1.7);
    });

    gm1Element.addEventListener("mouseout", function () {
        setOpacityAndScale(name1Element, hikari1Element, 0, 1);
    });
});


// カレーが舞い降りる３

document.addEventListener("DOMContentLoaded", function () {
    var soupElement = document.querySelector(".soup");
    var dorodoro3Element = document.querySelector(".dorodoro3");
    
    var animationDuration =5000;
    
    function setOpacityAndScale(dorodoro3Element, opacity) {
        dorodoro3Element.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        dorodoro3Element.style.opacity = opacity;
        dorodoro3Element.style.top = opacity === 1 ? "140px" : "-450px";
    }    
    
    soupElement.addEventListener("click", function () {
        setOpacityAndScale(dorodoro3Element, 1);
    });
});


// カレーが舞い降りる２
document.addEventListener("DOMContentLoaded", function () {
    var soupElement = document.querySelector(".soup");
    var dorodoro2Element = document.querySelector(".dorodoro2");
    
    var animationDuration =3500;
    
    function setOpacityAndScale(dorodoro2Element, opacity) {
        dorodoro2Element.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        dorodoro2Element.style.opacity = opacity;
        dorodoro2Element.style.top = opacity === 1 ? "0px" : "-450px";
    }    
    
    soupElement.addEventListener("click", function () {
        setOpacityAndScale(dorodoro2Element, 1);
    });
});


// カレーが舞い降りる１
document.addEventListener("DOMContentLoaded", function () {
var soupElement = document.querySelector(".soup");
var dorodoroElement = document.querySelector(".dorodoro");

var animationDuration =2000;

function setOpacityAndScale(dorodoroElement, opacity) {
    dorodoroElement.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
    dorodoroElement.style.opacity = opacity;
    dorodoroElement.style.top = opacity === 1 ? "-50px" : "-450px";
}    

soupElement.addEventListener("click", function () {
    setOpacityAndScale(dorodoroElement, 1);
});


});


// カレーの皿が現れる

document.addEventListener("DOMContentLoaded", function () {
    var soupElement = document.querySelector(".soup");
    var curryElement = document.querySelector(".curry");

    var animationDuration = 2500;
    var hasMoved = false;

    function setOpacityAndScale(curryElement, opacity) {
        curryElement.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        curryElement.style.opacity = opacity;
        curryElement.style.top = opacity === 1 ? "100px" : "-1000px";

    }

    soupElement.addEventListener("click", function () {
        if (!hasMoved) {
            setOpacityAndScale(curryElement, 1, "500px");
            hasMoved = true;
        }
    });
});

// カレーりせっと
document.addEventListener("DOMContentLoaded", function () {
    var soupElement = document.querySelector(".soup");
    var reElement = document.querySelector(".re");

    var animationDuration = 4000;

    function setOpacityAndScale(reElement, opacity) {
        reElement.style.transition = `opacity ${animationDuration}ms, left ${animationDuration}ms`;
        reElement.style.opacity = opacity;
        reElement.style.left = opacity === 1 ? "10px" : "-200px";
    }

    soupElement.addEventListener("click", function () {
        setOpacityAndScale(reElement, 1);
    });
});


// 税率の表示版を入れ替えるスクリプト
document.addEventListener("DOMContentLoaded", function () {
    var b1Element = document.querySelector(".b1");
    var btElement = document.querySelector(".bt");
    var boElement = document.querySelector(".bo");
    var bkyoElement = document.querySelector(".bkyo");
    var bkaElement = document.querySelector(".bka");
    var bfElement = document.querySelector(".bf");
    var bkiElement = document.querySelector(".bki");

    var kanaElement = document.querySelector(".kanazawa");
    var fukukElement = document.querySelector(".fukuokaken");
    var fukusElement = document.querySelector(".fukuokashi");
    var tokyoElement = document.querySelector(".tokyo");
    var osakaElement = document.querySelector(".osaka");
    var kyoutoElement = document.querySelector(".kyouto");
    var kitaElement = document.querySelector(".kita");

 // 現れる,消える
 function setAnimation(element, opacity, left) {
    var animationDuration = 4000;
    element.style.transition = `opacity ${animationDuration}ms, left ${animationDuration}ms`;
    element.style.opacity = opacity;
    element.style.left = left;
}

 // 一度、全てが消えて、該当する一つが現れる。
function addClickListener(element, showElement, hideElements) {
    element.addEventListener("click", function () {
        setOn(showElement, 1);
        hideElements.forEach((el) => setOff(el, 1));
    });
}
function setOn(element) {
    setAnimation(element, 1, "0px");
}

function setOff(element) {
    setAnimation(element, 0, "-700px");
}
var cities = [
    { element: tokyoElement, show: btElement, hide: [b1Element, boElement, bkyoElement, bkiElement, bkaElement, bfElement] },
    { element: kyoutoElement, show: bkyoElement, hide: [b1Element, boElement, bkiElement, bkaElement, bfElement, btElement] },
    { element: osakaElement, show: boElement, hide: [b1Element, bkyoElement, bkiElement, bkaElement, bfElement, btElement] },
    { element: fukusElement, show: bfElement, hide: [b1Element, boElement, bkyoElement, bkiElement, bkaElement, btElement] },
    { element: fukukElement, show: bfElement, hide: [b1Element, boElement, bkyoElement, bkiElement, bkaElement, btElement] },
    { element: kanaElement, show: bkaElement, hide: [btElement, b1Element, boElement, bkyoElement, bkiElement, bfElement] },
    { element: kitaElement, show: bkiElement, hide: [b1Element, boElement, bkyoElement, bkaElement, bfElement, btElement] },
];

cities.forEach(city => addClickListener(city.element, city.show, city.hide));

});

document.addEventListener("DOMContentLoaded", function () {
    var exElement = document.querySelector(".change");
    var calElement = document.querySelector(".cal");
    var osusumeElement = document.querySelector(".osusume");

    var coinElement = document.querySelector(".coin");
    var dentakuElement = document.querySelector(".dentaku");
    var snowmanElement = document.querySelector(".snowman");

    var coin2Element = document.querySelector(".coin2");
    var dentaku2Element = document.querySelector(".dentaku2");
    var snowman2Element = document.querySelector(".snowman2");

    var airplaineElement = document.querySelector(".airplaine");
    var airplainesetElement = document.querySelector(".airplaineset");

    var animationDuration = 500;

    function set1(coinElement, coin2Element, opacity) {
        coinElement.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        coinElement.style.opacity = opacity;
        coinElement.style.top = opacity === 1 ? "230px" : "230px";

        coin2Element.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        coin2Element.style.opacity = opacity;
        coin2Element.style.top = opacity === 1 ? "230px" : "230px";

    }
    function set2(dentakuElement, dentaku2Element,opacity) {
        dentakuElement.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        dentakuElement.style.opacity = opacity;
        dentakuElement.style.top = opacity === 1 ?  "230px" : "230px";

        dentaku2Element.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        dentaku2Element.style.opacity = opacity;
        dentaku2Element.style.top = opacity === 1 ?  "230px" : "230px";
    }
    function set3(snowmanElement, snowman2Element,opacity) {
        snowmanElement.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        snowmanElement.style.opacity = opacity;
        snowmanElement.style.top = opacity === 1 ?   "230px" : "230px";

        snowman2Element.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        snowman2Element.style.opacity = opacity;
        snowman2Element.style.top = opacity === 1 ?   "230px" : "230px";
        
    }

    function set4(airplaineElement, airplainesetElement, opacity) {
        airplaineElement.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        airplaineElement.style.opacity = opacity;
        airplaineElement.style.top = opacity === 1 ?   "250px" : "250px";

        airplainesetElement.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        airplainesetElement.style.opacity = opacity;
        airplainesetElement.style.top = opacity === 1 ?   "230px" : "230px";
    }

    exElement.addEventListener("mouseover", function () {
        set1(coinElement, coin2Element, 1);
        set2(dentakuElement, dentaku2Element, 0);
        set3(snowmanElement, snowman2Element, 0);
        set4(airplaineElement, airplainesetElement, 0);
    });

    exElement.addEventListener("mouseout", function () {
    set1(coinElement, coin2Element, 0);
    set4(airplaineElement, airplainesetElement, 1);
});

    calElement.addEventListener("mouseover", function () {
        set1(coinElement, coin2Element, 0);
        set2(dentakuElement, dentaku2Element, 1);
        set3(snowmanElement, snowman2Element, 0);
        set4(airplaineElement, airplainesetElement, 0);
    });

    calElement.addEventListener("mouseout", function () {
        set2(dentakuElement, dentaku2Element, 0);
        set4(airplaineElement, airplainesetElement, 1);
    });


    osusumeElement.addEventListener("mouseover", function () {
        set1(coinElement, coin2Element, 0);
        set2(dentakuElement, dentaku2Element, 0);
        set3(snowmanElement, snowman2Element, 1);
        set4(airplaineElement, airplainesetElement, 0);
    });

    osusumeElement.addEventListener("mouseout", function () {
        set3(snowmanElement, snowman2Element, 0);
        set4(airplaineElement, airplainesetElement, 1);
    });
});
