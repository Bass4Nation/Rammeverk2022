
function makeNewInput(){

var idStuff = 1;
var inputForm = document.getElementById('inputFields');


var newLabel = document.createElement("label");
newLabel.setAttribute("for", "input");
newLabel.innerHTML = "User Input : ";

let newInput = document.createElement("input");
newInput.className = "input";
newInput.type = "text";
newInput.name = "input";

let form = document.getElementById("inputFields");

form.appendChild(newLabel)
form.appendChild(newInput);
}






function submitForm(){

    var inputFields = document.getElementById('inputFields')
    var inputElements = inputFields.querySelectorAll('input')
    var obj = { title: "init", content:[] };

for (let index = 0; index < inputElements.length; index++) {
    if(index == 0){
        obj.title = inputElements[index].value
    }else{
        obj.content.push({"text" :  inputElements[index].value, "id" : index})
    }   
}
var json = JSON.stringify(obj)
console.log(json)


}