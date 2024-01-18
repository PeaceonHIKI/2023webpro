
document.addEventListener("DOMContentLoaded", function () {
    var rei21Element = document.querySelector(".rei21");

    var open3Element = document.querySelector(".open3");
    var closeElement = document.querySelector(".close");

    var animationDuration = 0;

    function set1(rei21Element,closeElement, opacity) {
        rei21Element.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
        rei21Element.style.opacity = opacity;
        rei21Element.style.top = opacity === 1 ? "30px" : "-800px";

       closeElement.style.transition = `opacity ${animationDuration}ms, top ${animationDuration}ms`;
       closeElement.style.opacity = opacity;
       closeElement.style.top = opacity === 1 ? "600px" :"600px";
    }

    open3Element.addEventListener("click", function () {
        set1(rei21Element, closeElement, 1);
    });
    
    closeElement.addEventListener("click", function () {
        set1(rei21Element, closeElement, 0);
    });
});