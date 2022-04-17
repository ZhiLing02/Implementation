var myIndex = 0;
bestseller();

function bestseller() {
    var i;
    var x = document.getElementsByClassName("bestseller");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(bestseller, 2000); // Change image every 2 seconds
}
