// Global id. Will use with each input and button
var inputId = 1;


function makeNewInput(){
    // New section
var newSection = document.createElement("section")
newSection.id = "inputs"+inputId

// New lable
var newLabel = document.createElement("label");
newLabel.setAttribute("for", "input");
newLabel.innerHTML = "User Input : ";

// New input
let newInput = document.createElement("input");
newInput.className = "input";
newInput.type = "text";
newInput.name = "input";
newInput.id = inputId;

// Show Sub inputs button
let newButton = document.createElement("button");
newButton.innerHTML = "+";
newButton.id = inputId

    // sub Label
    var newSubLabel = document.createElement("label");
    newSubLabel.setAttribute("for", "input");
    newSubLabel.innerHTML = "Sub Input : ";
    newSubLabel.style = "visibility: hidden;"

    // Sub Input
    var newSubInput = document.createElement("input");
    newSubInput.className = "subInput";
    newSubInput.style = "visibility: hidden;"
    newSubInput.type = "text";
    newSubInput.name = "subInput";
    newSubInput.id = newInput.id;
    

    // Button to remove
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove sub field";
    removeButton.style = "visibility: hidden;"
    removeButton.onclick = function () {
        newButton.style = "visibility: visible;"
        newSubLabel.style = "visibility: hidden;"
        newSubInput.style = "visibility: hidden;"
        removeButton.style = "visibility: hidden;"
    }
    removeButton.id = newInput.id

// Make subsection visible
newButton.onclick = function(){
    newButton.style ="visibility: hidden;"
    newSubLabel.style = "visibility: visible;"
    newSubInput.style = "visibility: visible;"
    removeButton.style = "visibility: visible;"
    }
// Start pos for all input fields on the page
    let form = document.getElementById("inputFields");
    // Start pos for each field crated

    form.appendChild(newSection);
    document.getElementById(newSection.id).appendChild(newLabel) 
    document.getElementById(newSection.id).appendChild(newInput) 
    document.getElementById(newSection.id).appendChild(newButton)
    document.getElementById(newSection.id).appendChild(newSubLabel);
    document.getElementById(newSection.id).appendChild(newSubInput);
    document.getElementById(newSection.id).appendChild(removeButton)
 
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


    var allInputSection = inputFields.querySelectorAll('section')
    var obj = { title: webpageTitle, content:[] };

    for (let index = 0; index < allInputSection.length; index++) {
        let title = allInputSection[index].querySelector('input').value;
        let data = allInputSection[index].querySelector("input.subInput").value;
        let id = allInputSection[index].querySelector('input').id;

    
        obj.content.push({
            "text": title,
            "data": data,
            "id": id
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
