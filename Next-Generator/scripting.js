

function makeNewInput(){

// var idStuff = 1;
// var inputForm = document.getElementById('inputFields');


var newLabel = document.createElement("label");
newLabel.setAttribute("for", "input");
newLabel.innerHTML = "User Input : ";

let newInput = document.createElement("input");
newInput.className = "input";
newInput.type = "text";
newInput.name = "input";
newInput.id = "elements";

let newButton = document.createElement("button");
newButton.innerHTML = "+";
newButton.setAttribute("onclick", "underInput()")
newButton.id = "createSub"

let form = document.getElementById("inputFields");

form.appendChild(newLabel);
form.appendChild(newInput);
form.appendChild(newButton);
}

function underInput(){

    let form = document.getElementById("inputFields");
    var newSubInput = document.createElement("input");
    var newSubLabel = document.createElement("label");

    var id = 3;
    var removeButton = document.getElementById("createSub" + id).style.display = "none";

    newSubLabel.innerHTML = "Sub Input : "

    newSubInput.className = "input";
    newSubInput.type = "text";
    newSubInput.name = "input";
    newSubInput.id = "subInput";

    if(){
        
        newSubLabel.innerHTML = "Sub Input : "

        newInput.className = "input";
        newInput.type = "text";
        newInput.name = "input";
        newInput.id = "subInput";

        form.appendChild(newSubLabel);
        form.appendChild(newSubInput);
        removeButton;
        
    }
    else if(){
        
    }

}

//Change picture onchange with Select tag
function onChanger(){
    var e = document.getElementById("templates");
    var selectValue = e.value;

    if(selectValue == "temp1"){
        document.getElementById("selectedHidden1").style.display = "block";
        document.getElementById("selectedHidden2").style.display = "none";
        
        document.getElementById("selectedHidden1").src = "pictures/basic.png"
    }
    else if(selectValue == "temp2"){
        document.getElementById("selectedHidden1").style.display = "block";
        document.getElementById("selectedHidden2").style.display = "block";
        
        document.getElementById("selectedHidden1").src = "pictures/basic-with-pages-part1.png"
        document.getElementById("selectedHidden2").src = "pictures/basic-with-pages-part2.png"
    }
    else{
        console.log("Not valid")
    }
    
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
writeToJson(json)
}

function writeToJson(jsonString){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent("["+jsonString + "]");
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "database.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

}

function generateWebpage(){
    var shell = WScript.CreateObject("WScript.Shell");
    shell.Run("command here");
}