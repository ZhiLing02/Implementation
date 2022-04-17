
function priceCalculation() {

    var Price1 = [];
    var Price2 = [];
    var Price3 = [];
    var Price4 = [];
    var Price5 = [];
    var Price6 = [];
    var Price7 = [];
    var Price8 = [];
    var Price9 = [];
    var Quantity1 = document.getElementById("quantity1").value;
    var Quantity2 = document.getElementById("quantity2").value;
    var Quantity3 = document.getElementById("quantity3").value;
    var Quantity4 = document.getElementById("quantity4").value;
    var Quantity5 = document.getElementById("quantity5").value;
    var Quantity6 = document.getElementById("quantity6").value;
    var Quantity7 = document.getElementById("quantity7").value;
    var Quantity8 = document.getElementById("quantity8").value;
    var Quantity9 = document.getElementById("quantity9").value;
    var Total = [];
    var Tax = [];
    var GrandTotal = [];
    var shippingfee=[];
    
    Price1 = 2.5 * Quantity1, Price2 = 7.9 * Quantity2, Price3 = 7.6 * Quantity3, Price4 = 11.8 * Quantity4, Price5 = 4.99 * Quantity5;
    Price6 = 28.9 * Quantity6, Price7 = 29.9 * Quantity7, Price8 = 42.99 * Quantity8, Price9 = 14.2 * Quantity9;
    
    Total = Price1 + Price2 + Price3 + Price4 + Price5 + Price6 + Price7 + Price8 + Price9;
    
    Tax = Total*0.06;
    
    if(Total>=150){
        shippingfee=0.00;
    }else{
        shippingfee=8.00;
    }
    
    GrandTotal = Total + Tax + shippingfee;
    
    
    setTimeout(priceCalculation, 500);
    document.getElementById("price1").value = Price1.toFixed(2);
    document.getElementById("price2").value = Price2.toFixed(2);
    document.getElementById("price3").value = Price3.toFixed(2);
    document.getElementById("price4").value = Price4.toFixed(2);
    document.getElementById("price5").value = Price5.toFixed(2);
    document.getElementById("price6").value = Price6.toFixed(2);
    document.getElementById("price7").value = Price7.toFixed(2);
    document.getElementById("price8").value = Price8.toFixed(2);
    document.getElementById("price9").value = Price9.toFixed(2);
    document.getElementById("total").value = Total.toFixed(2);
    document.getElementById("tax").value = Tax.toFixed(2);
    document.getElementById("grandtotal").value = GrandTotal.toFixed(2);
    document.getElementById("shipping").value=shippingfee.toFixed(2);
    } 
    
    
    
    // end function priceCalculation();
    