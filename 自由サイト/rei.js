
document.addEventListener("DOMContentLoaded", function () {
    var rei3Element = document.querySelector(".rei3");
    var rei4Element = document.querySelector(".rei4");

    var openElement = document.querySelector(".open");
    var open2Element = document.querySelector(".open2");
    var closeElement = document.querySelector(".close");

    var animationDuration = 0;

    function set1(rei3Element,closeElement, opacity) {
        rei3Element.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        rei3Element.style.opacity = opacity;
        rei3Element.style.top = opacity === 1 ? "30px" : "-800px";

       closeElement.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
       closeElement.style.opacity = opacity;
       closeElement.style.top = opacity === 1 ? "600px" :"600px";
    }
    function set2(rei4Element,closeElement, opacity) {
        rei4Element.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        rei4Element.style.opacity = opacity;
        rei4Element.style.top = opacity === 1 ?  "30px" : "-800px";

        closeElement.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        closeElement.style.opacity = opacity;
        closeElement.style.top = opacity === 1 ? "600px" :"600px";
    }

    openElement.addEventListener("click", function () {
        set1(rei3Element, closeElement, 1);
    });
    
    open2Element.addEventListener("click", function () {
        set2(rei4Element, closeElement, 1);
    });
    
    closeElement.addEventListener("click", function () {
        set1(rei3Element, closeElement, 0);
        set2(rei4Element, closeElement, 0);
    });
});