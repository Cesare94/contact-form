document.addEventListener("DOMContentLoaded", function() {

    // GESTIONE CONTENITORI
    const container = document.getElementById("container");
    const sent = document.getElementById("sent");
    const empty = document.querySelector('span.empty');


    // GESTIONE INPUT (input)

    var FName = document.getElementById("FName");
    var LName = document.getElementById("LName");
    var email = document.getElementById("email");
    var general = document.getElementById("general");
    var support = document.getElementById("support");
    var comment = document.getElementById("comment");
    var access = document.getElementById("access");

    // GESTIONE MESSAGGI D'ERRORE (error)

    var last = document.getElementById("last");
    var address = document.getElementById("address");
    var type = document.getElementById("type");
    var ErrorM = document.getElementById("ErrorM");
    var ErrorA =document.getElementById("ErrorA");

    // GESTIONE BOTTONE (btn)

    var btn = document.getElementById("submit");

    // ESPRESSIONI REGOLARI PER CONVALIDARE GLI INPUT(s)

    var regexNL = "/^[a-z ,.'-]+$/i";
    var regexEmail = " /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
    
    // function 

    btn.onclick = function() {
        if (FName.value.trim() ==! regexNL) {
            last.style.display = "inline-block";
            FName.style.borderColor = "red";
        }if (LName.value.trim() ==! regexNL) {
            last.style.display = "inline-block";
            LName.style.borderColor = "red";
            empty.innerHTML ="This field is required";
        }if (email.value.trim() ==! regexEmail) {
            address.style.display = "inline-block";
            email.style.borderColor = "red";
        }if (!general.checked || !support.checked) {
            type.style.display = "inline-block";
            
            

        }if(comment.value.trim() ==! regexNL) {
            ErrorM.style.display = "inline-block";
            comment.style.borderColor ="red"
        } if(!access.checked) {
            ErrorA.style.display = "inline-block";
           

        } else {
            container.style.display = "none";
            sent.style.display = "inline-block";
        }
    }



})