// Global id. Will use with each input and button
var inputId = 1;


function makeNewInput(){
var newSection = document.createElement("section")
newSection.id = "inputs"+inputId

var newLabel = document.createElement("label");
newLabel.setAttribute("for", "input");
newLabel.innerHTML = "User Input : ";

let newInput = document.createElement("input");
newInput.className = "input";
newInput.type = "text";
newInput.name = "input";
newInput.id = inputId;

let newButton = document.createElement("button");
newButton.innerHTML = "+";
newButton.id = inputId
newButton.onclick = function(){
    newButton.style ="visibility: hidden;"
        console.log(inputId)
        //Placement
        let form = document.getElementById(newSection.id);
        // sub Label
        var newSubLabel = document.createElement("label");
        newSubLabel.setAttribute("for", "input");
        newSubLabel.innerHTML = "Sub Input : ";
        // Sub Input
        var newSubInput = document.createElement("input");
        newSubInput.className = "subInput";
        newSubInput.type = "text";
        newSubInput.name = "input";
        newSubInput.id = newInput.id ;

        // Button to remove
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove sub field";
        removeButton.onclick = function () {
            form.removeChild(newSubInput)
            form.removeChild(newSubLabel)
            form.removeChild(removeButton)
            newButton.style = "visibility: visible;"

        }
        removeButton.id = newInput.id
        // Creating elements on screen
        form.appendChild(newSubLabel);
        form.appendChild(newSubInput);
        form.appendChild(removeButton)

    }
// Start pos for all input fields on the page
    let form = document.getElementById("inputFields");
    // Start pos for each field crated

    form.appendChild(newSection);
    document.getElementById(newSection.id).appendChild(newLabel) 
    document.getElementById(newSection.id).appendChild(newInput) 
    document.getElementById(newSection.id).appendChild(newButton) 
    inputId++;
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
    var webpageTitle = document.getElementById('webtitle').value;
    var inputElements = inputFields.querySelectorAll('input.input')
    var obj = { title: webpageTitle, content:[] };

for (let index = 0; index < inputElements.length; index++) {
    console.log(inputElements[index].id)

    obj.content.push({ "text": inputElements[index].value,"data": "" , "id": inputElements[index].id
})
      
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