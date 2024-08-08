// let input=document.getElementById("inputPassword1");
let inputs = document.querySelectorAll(".form-control");
let btn=document.getElementById("send");

let form=document.getElementById("form");

let radioButtons = document.getElementsByClassName('radio-button');


let error=document.getElementById("error");

// let preventForm = (e) => {
//     e.preventDefault();
//   };

// form.addEventListener("submit",function(event){
//     alert("Hola soy el form");
// });

btn.addEventListener("click",function(e){ 
    e.preventDefault();

    let camposVacios=0;
    let radioChecked=false;

    for (let i = 0; i < inputs.length; i++) {

        if(inputs[i].value=="null"|| inputs[i].value==""){
            inputs[i].className="form-control bg-danger-subtle";
            camposVacios++;
    
        }else{
            inputs[i].className="form-control bg-success-subtle";
            console.log(camposVacios);
        }
        
    }

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            radioChecked = true;
            break;
        }
    }


    if(camposVacios>0 || !radioChecked){
        error.className="alert alert-danger text-danger m-2 d-inline";
        error.innerHTML="Please fill out all fields";

    }else{
        error.className="alert alert-danger text-danger m-2 d-none";
    }
});
