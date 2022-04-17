function myFunction(){
    var a= document.getElementById("passBox");
    if(a.type == "password"){
        a.type="text";
    }else{
        a.type="password";
    }
}