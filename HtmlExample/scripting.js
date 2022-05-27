
function makeNewInput(){

var newLabel = document.createElement("label");
newLabel.setAttribute("for", "inputX");
newLabel.innerHTML = "User Input X";

let newInput = document.createElement("input");
newInput.className = "input";
newInput.type = "text"

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