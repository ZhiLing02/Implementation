function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function myFunction(){
  const message= document.getElementById("demo");
  message.innerHTML="";
  let x=document.getElementById("id1").value;
  try{
      if(x=="newcust") throw "5% OFFER ON NEXT PURCHASE!"
      if(x!="newcust") throw "INVALID VOUCHER"
      
  }
  catch(err) {
      message.innerHTML=err;
  }
}

alert("DEAR VALUED CUSTOMER, PLEASE CHECK YOUR CART");
    