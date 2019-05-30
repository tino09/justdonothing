

function validate() {
    var username = document.getElementById("user");
    var password = document.getElementById("pass");

    if (username.value.trim() == "") {
        //alert("No blank spaces");
        username.style.border = "solid 3px red";
        document.getElementById("lab").style.visibility="visible";
        return false;
    }
    else if(password.value.trim() == ""){
        alert("No blank Password spaces");
        password.style
        return false;
    }
    else if (password.value.trim().length < 5){
        alert("Password too short");
        return false;
    }
    else  {
        return true;
    }
}