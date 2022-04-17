    // Main ---------------------------------
    var calc = document.querySelector("#calc");
    calc.onclick = openWindow;
    
    // Functions ----------------------------
    function openWindow() {
        var w = 400;
        var h = 300;
        var x = (screen.width  - w) / 2;
        var y = (screen.height - h) / 2;
    
        var option = "width  =" + w + "," +
                     "height =" + h + "," +
                     "left   =" + x + "," +
                     "top    =" + y;
        window.open("../Calculator.html", "calculator", option);
    }