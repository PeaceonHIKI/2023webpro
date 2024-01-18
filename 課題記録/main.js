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
        setOpacityAndScale(name1Element, hikari1Element, 1, 2.5);
    });

    gm1Element.addEventListener("mouseout", function () {
        setOpacityAndScale(name1Element, hikari1Element, 0, 1);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var namehtmlElement = document.querySelector(".namehtml");
    var htmlpaperElement = document.querySelector(".htmlpaper");
    var jp2Element = document.querySelector(".jp2");

    function setOpacityAndScale(element, opacity) {
        element.style.opacity = opacity;
    }

    namehtmlElement.addEventListener("click", function () {
        setOpacityAndScale(htmlpaperElement, 1);
        function moveHtmlpaperRight() {
            var currentPosition = parseInt(jp2Element.style.right) || -532.5;
            var targetPosition = -45;
            
            function animate() {
                currentPosition += 7.5;
                htmlpaperElement.style.right = currentPosition + "px";

                if (currentPosition < targetPosition) {
                    requestAnimationFrame(animate);
                }
            }
            animate();
        }
        moveHtmlpaperRight();
    });

    namehtmlElement.addEventListener("click", function () {
        setOpacityAndScale(jp2Element, 1);
    
        function movejp2Right() {
            var currentPosition = parseInt(jp2Element.style.right) ||  -442.5;
            var targetPosition = 45;
    
            function animate() {
                currentPosition += 7.5;
                jp2Element.style.right = currentPosition + "px";
    
                if (currentPosition < targetPosition) {
                    requestAnimationFrame(animate);
                }
            }
            animate();
        }
        movejp2Right();
    });

});


document.addEventListener("DOMContentLoaded", function () {
    var page61Element = document.querySelector(".page61");
    var page62Element = document.querySelector(".page62");
    var page63Element = document.querySelector(".page63");

    var kadai61Element = document.querySelector(".kadai61");
    var kadai62Element = document.querySelector(".kadai62");
    var kadai63Element = document.querySelector(".kadai63");

    function setOpacityAndScale(element, opacity) {
        element.style.opacity = opacity;
    }

    page61Element.addEventListener("click", function () {
        setOpacityAndScale(kadai61Element, 1);
        setOpacityAndScale(kadai62Element, 0);
        setOpacityAndScale(kadai63Element, 0);
    });
    page62Element.addEventListener("click", function () {
        setOpacityAndScale(kadai61Element, 0);
        setOpacityAndScale(kadai62Element, 1);
        setOpacityAndScale(kadai63Element, 0);
    });
    page63Element.addEventListener("click", function () {
        setOpacityAndScale(kadai61Element, 0);
        setOpacityAndScale(kadai62Element, 0);
        setOpacityAndScale(kadai63Element, 1);
    });

});

document.addEventListener("DOMContentLoaded", function () {
    var page51Element = document.querySelector(".page51");
    var page52Element = document.querySelector(".page52");

    var kadai51Element = document.querySelector(".kadai51");
    var kadai52Element = document.querySelector(".kadai52");

    function setOpacityAndScale(element, opacity) {
        element.style.opacity = opacity;
    }

    page51Element.addEventListener("click", function () {
        setOpacityAndScale(kadai51Element, 1);
        setOpacityAndScale(kadai52Element, 0);
    });
    page52Element.addEventListener("click", function () {
        setOpacityAndScale(kadai51Element, 0);
        setOpacityAndScale(kadai52Element, 1);
    });

});
