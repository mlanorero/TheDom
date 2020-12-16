let beginning = "<ul>";
let liststring = "";
let ending = "</ul>";

let li = document.createElement("li");
li.appendChild(liststring);
liststring.innerHTML("First Item");

// do not modify after this line
document.querySelector("#myDiv").innerHTML = beginning + liststring + ending;
