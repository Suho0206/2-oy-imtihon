var elDropTop = document.querySelector(".faqs__quations");
var elTextWrapper = document.querySelector(".faqs__answer");
var elDropIcon = document.querySelector(".drop")
elDropTop.addEventListener('click', function () {
    elTextWrapper.classList.toggle("show-text");
    elDropIcon.classList.toggle("turn");
});