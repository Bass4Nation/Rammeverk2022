
function makeNewInput(){

var idStuff = 1;
var inputForm = document.getElementById('bestForm');
var inputLength = inputForm.getElementsByTagName('input').length;

    for (var i = 0; i < inputLength; i++) {
        idStuff++
    }

var newLabel = document.createElement("label");
newLabel.setAttribute("for", "input" + idStuff);
newLabel.innerHTML = "User Input "+ idStuff + ":";

let newInput = document.createElement("input");
newInput.className = "input";
newInput.type = "text";
newInput.name = "input" + idStuff;

let form = document.getElementById("bestForm");

form.appendChild(newLabel)
form.appendChild(newInput);
}

function handleSubmit(event){;
    event.preventDefault();

    const data = new FormData(event.target);
  
    const value = data.get("text");
  
    console.log({ value });
}
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);