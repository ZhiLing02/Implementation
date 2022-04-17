var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var accordion__content = this.nextElementSibling;
        if (accordion__content.style.display === "block" || accordion__content.style.display === "") {
            accordion__content.style.display = "none";
        } else {
            accordion__content.style.display = "block";
        }
    });
}

var acc = document.getElementsByClassName("accordion1");
var j;

for (j = 0; j < acc.length; j++) {
    acc[j].addEventListener("click", function () {
        this.classList.toggle("active");
        var accordion__content = this.nextElementSibling;
        if (accordion__content.style.display === "block") {
            accordion__content.style.display = "none";
        } else {
            accordion__content.style.display = "block";
        }
    });
}
