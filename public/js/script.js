let ErrLogo1 = document.getElementById("ErrLogoID1");
ErrLogo1.style.display = "none";

let ErrLogo2 = document.getElementById("ErrLogoID2");
ErrLogo2.style.display = "none";

let ErrLogo3 = document.getElementById("ErrLogoID3");
ErrLogo3.style.display = "none";

let ErrLogo4 = document.getElementById("ErrLogoID4");
ErrLogo4.style.display = "none";

let Errormsg = document.getElementById("ErrorMsg");
Errormsg.style.display = "none";

let Errormsg2 = document.getElementById("ErrorMsg2");
Errormsg2.style.display = "none";

let Errormsg3 = document.getElementById("ErrorMsg3");
Errormsg3.style.display = "none";

let Errormsg4 = document.getElementById("ErrorMsg4");
Errormsg4.style.display = "none";

let FirstName = document.getElementById("First");
// FirstNameValue = FirstName.value;

let LastName = document.getElementById("Second");
// LastNameValue = LastName.value;

let Email = document.getElementById("Third")

let Password = document.getElementById("Fourth");

const form = document.getElementById("form");

// function Submit(){

form.addEventListener('submit', e => {
    


    if (FirstName.value === '') {
        ErrLogo1.style.display = "inline";
        Errormsg.style.display = "block";
        // e.preventDefault();
    }
    else {
        ErrLogo1.style.display = "none";
        Errormsg.style.display = "none";
    }

    if (LastName.value === "") {
        ErrLogo2.style.display = "inline";
        Errormsg2.style.display = "block";
        // e.preventDefault();
    } else {
        ErrLogo2.style.display = "none";
        Errormsg2.style.display = "none";
        // e.preventDefault();
    }

    if (Email.value === '') {
        ErrLogo3.style.display = "inline";
        Errormsg3.style.display = "block";
        // e.preventDefault();
    }

    if ((!isValid(Email.value))) {
        ErrLogo3.style.display = "inline";
        Errormsg3.style.display = "block";
        // e.preventDefault();
    } else {
        ErrLogo3.style.display = "none";
        Errormsg3.style.display = "none";
    }


    if (Password.value === '') {
        ErrLogo4.style.display = "inline";
        Errormsg4.style.display = "block";
        // e.preventDefault();
    }
    else {
        ErrLogo4.style.display = "none";
        Errormsg4.style.display = "none";
    }
});
// }

// function Check(e){
//     if (green == flase) {
//         e.preventDefault();
//     }
// }


// function Submit(){
//     // e.preventDefault();
//     // if (FirstName.value === '') {
//     //     ErrLogo1.style.display = "inline";
//     //     Errormsg.style.display = "block";
//     // }
//     // else {
//     //     ErrLogo1.style.display = "none";
//     //     Errormsg.style.display = "none";
//     // }

//     //  if (LastName.value === ""){
//     //     ErrLogo2.style.display = "inline";
//     //     Errormsg2.style.display = "block";
//     // }

//     // if (Email.value === '') {
//     //     ErrLogo3.style.display = "inline";
//     //     Errormsg3.style.display = "block";
//     // }

//     // if ((!isValid(Email.value))) {
//     //     ErrLogo3.style.display = "inline";
//     //     Errormsg3.style.display = "block";
//     // } else {
//     //     ErrLogo3.style.display = "none";
//     //     Errormsg3.style.display = "none";
//     // }


//     // if (Password.value === '') {
//     //     ErrLogo4.style.display = "inline";
//     //     Errormsg4.style.display = "block";
//     // }
//     // else {
//     //     ErrLogo4.style.display = "none";
//     //     Errormsg4.style.display = "none";
//     // }
// }



function isValid(E) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(E).toLowerCase());
}
