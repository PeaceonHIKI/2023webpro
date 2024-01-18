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


document.addEventListener("DOMContentLoaded", function () {

    var catSoundElement = new Audio("Don't Open It/catSound.mp3");
    var eyeSoundElement = new Audio("Don't Open It/eyeSound.mp3");

    var file1Element = document.querySelector(".file1");
    var file2Element = document.querySelector(".file2");
    var infileElement = document.querySelector(".infile");
    var exitElement = document.querySelector(".exit");

    var kadai21Element = document.querySelector(".kadai21");
    var kadai22Element = document.querySelector(".kadai22");
    var kadai23Element = document.querySelector(".kadai23");
    var pro1Element = document.querySelector(".pro1");
    var pro2Element = document.querySelector(".pro2");

    var fishElement = document.querySelector(".fish");
    var nekoElement = document.querySelector(".neko");
    var miteiruElement = document.querySelector(".miteiru");
    var fishElement = document.querySelector(".fish");
    var catElement = document.querySelector(".cat");
    var eye1Element = document.querySelector(".eye1");
    var eye2Element = document.querySelector(".eye2");
    var akeruElement = document.querySelector(".akeru");
    var noElement = document.querySelector(".no");
    var exit6666Element = document.querySelector(".exit6666");
    var exit666Element = document.querySelector(".exit666");
    var exit66Element = document.querySelector(".exit66");
    var exit6Element = document.querySelector(".exit6");

    var name1Element = document.querySelector(".name1");
    var name2Element = document.querySelector(".name2");

    var catElement = document.querySelector(".cat");


    function setOpacityAndScale(element, opacity) {
        element.style.opacity = opacity;
    }

    file1Element.addEventListener("click", function () {
        setOpacityAndScale(infileElement, 1);
        setOpacityAndScale(exitElement, 1);
        setOpacityAndScale(kadai21Element, 1);
        setOpacityAndScale(kadai22Element, 1);
        setOpacityAndScale(kadai23Element, 1);
    });

    file2Element.addEventListener("click", function () {
        setOpacityAndScale(infileElement, 0);
        setOpacityAndScale(exitElement, 0);
        setOpacityAndScale(kadai21Element, 0);
        setOpacityAndScale(kadai22Element, 0);
        setOpacityAndScale(kadai23Element, 0);
    });

    exitElement.addEventListener("click", function () {
        setOpacityAndScale(infileElement, 0);
        setOpacityAndScale(exitElement, 0);
        setOpacityAndScale(kadai21Element, 0);
        setOpacityAndScale(kadai22Element, 0);
        setOpacityAndScale(kadai23Element, 0);
    });


    fishElement.addEventListener("click", function () {
        setOpacityAndScale(nekoElement, 1);
        setOpacityAndScale(miteiruElement, 1);
    });

    exit6Element.addEventListener("click", function () {
        setOpacityAndScale(akeruElement, 0);
        setOpacityAndScale(noElement, 0);
        setOpacityAndScale(exit6Element, 0);
        setOpacityAndScale(exit66Element, 0);
        setOpacityAndScale(exit666Element, 0);
        setOpacityAndScale(exit6666Element, 0);

        setOpacityAndScale(file1Element, 1);
        setOpacityAndScale(file2Element, 1);
        setOpacityAndScale(miteiruElement, 1);
        setOpacityAndScale(nekoElement, 1);
    });
    nekoElement.addEventListener("click", function () {
        catSoundElement.play();
        setOpacityAndScale(catElement, 1);
    });

    miteiruElement.addEventListener("click", function () {

        setOpacityAndScale(file1Element, 0);
        setOpacityAndScale(file2Element, 0);
        setOpacityAndScale(miteiruElement, 0);
        setOpacityAndScale(nekoElement, 0);

        setOpacityAndScale(infileElement, 0);
        setOpacityAndScale(exitElement, 0);
        setOpacityAndScale(kadai21Element, 0);
        setOpacityAndScale(kadai22Element, 0);
        setOpacityAndScale(kadai23Element, 0);
        setOpacityAndScale(name1Element, 0);
        setOpacityAndScale(name2Element, 0);

        setOpacityAndScale(akeruElement, 1);
        setOpacityAndScale(noElement, 1);
        setOpacityAndScale(exit6Element, 1);
        setOpacityAndScale(exit66Element, 1);
        setOpacityAndScale(exit666Element, 1);
        setOpacityAndScale(exit6666Element, 1);

    });
    noElement.addEventListener("click", function () {

        eyeSoundElement.play();

        setOpacityAndScale(eye1Element, 1);
        setOpacityAndScale(eye2Element, 1);

        setOpacityAndScale(file1Element, 0);
        setOpacityAndScale(file2Element, 0);
        setOpacityAndScale(miteiruElement, 0);
        setOpacityAndScale(nekoElement, 0);
        setOpacityAndScale(infileElement, 0);
        setOpacityAndScale(exitElement, 0);
        setOpacityAndScale(pro1Element, 0);
        setOpacityAndScale(pro2Element, 0);
        setOpacityAndScale(infileElement, 0);
        setOpacityAndScale(exitElement, 0);
        setOpacityAndScale(kadai21Element, 0);
        setOpacityAndScale(kadai22Element, 0);
        setOpacityAndScale(kadai23Element, 0);
        setOpacityAndScale(akeruElement, 0);
        setOpacityAndScale(noElement, 0);
        setOpacityAndScale(exit6Element, 0);
        setOpacityAndScale(exit66Element, 0);
        setOpacityAndScale(exit666Element, 0);
        setOpacityAndScale(exit6666Element, 0);
        setOpacityAndScale(name1Element, 0);
        setOpacityAndScale(name2Element, 0);
    });

    exit6Element.addEventListener("click", function () {
        setOpacityAndScale(akeruElement, 0);
        setOpacityAndScale(noElement, 0);
        setOpacityAndScale(exit6Element, 0);
        setOpacityAndScale(exit66Element, 0);
        setOpacityAndScale(exit666Element, 0);
        setOpacityAndScale(exit6666Element, 0);

        setOpacityAndScale(file1Element, 1);
        setOpacityAndScale(file2Element, 1);
        setOpacityAndScale(miteiruElement, 1);
        setOpacityAndScale(nekoElement, 1);
        setOpacityAndScale(name1Element, 1);
        setOpacityAndScale(name2Element, 1);
    });
    exit66Element.addEventListener("click", function () {
        setOpacityAndScale(akeruElement, 0);
        setOpacityAndScale(noElement, 0);
        setOpacityAndScale(exit6Element, 0);
        setOpacityAndScale(exit66Element, 0);
        setOpacityAndScale(exit666Element, 0);
        setOpacityAndScale(exit6666Element, 0);

        setOpacityAndScale(file1Element, 1);
        setOpacityAndScale(file2Element, 1);
        setOpacityAndScale(miteiruElement, 1);
        setOpacityAndScale(nekoElement, 1);
        setOpacityAndScale(name1Element, 1);
        setOpacityAndScale(name2Element, 1);
    });
    exit666Element.addEventListener("click", function () {
        setOpacityAndScale(akeruElement, 0);
        setOpacityAndScale(noElement, 0);
        setOpacityAndScale(exit6Element, 0);
        setOpacityAndScale(exit66Element, 0);
        setOpacityAndScale(exit666Element, 0);
        setOpacityAndScale(exit6666Element, 0);

        setOpacityAndScale(file1Element, 1);
        setOpacityAndScale(file2Element, 1);
        setOpacityAndScale(miteiruElement, 1);
        setOpacityAndScale(nekoElement, 1);
        setOpacityAndScale(name1Element, 1);
        setOpacityAndScale(name2Element, 1);
    });
    exit6666Element.addEventListener("click", function () {
        setOpacityAndScale(akeruElement, 0);
        setOpacityAndScale(noElement, 0);
        setOpacityAndScale(exit6Element, 0);
        setOpacityAndScale(exit66Element, 0);
        setOpacityAndScale(exit666Element, 0);
        setOpacityAndScale(exit6666Element, 0);

        setOpacityAndScale(file1Element, 1);
        setOpacityAndScale(file2Element, 1);
        setOpacityAndScale(miteiruElement, 1);
        setOpacityAndScale(nekoElement, 1);
        setOpacityAndScale(name1Element, 1);
        setOpacityAndScale(name2Element, 1);
    });

});
