let text = "some random text to start ";
let pattern = /palabra/i;
let result = text.match(pattern);

document.getElementById("writableDiv").innerHTML = result;