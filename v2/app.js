console.log('console')
// regexp
let text = "some random text to start ";
let pattern = /random/i;
let result = text.match(pattern);
console.log(result)
document.getElementById('writableDiv').innerHTML = `encontre: ${result}`;
//shortcut keys
function keyShortcuts(e) {
    if (e.ctrlKey && e.code == "KeyG") {
      e.preventDefault();
      console.log(`ctrl +${e}`);
    }
    if (e.code == "F12") {
      e.preventDefault();
    if (document.querySelector('.mobileConsole_base').style.display != "none") {
        document.querySelector('.mobileConsole_base').style.display = "none";
      }
    else { 
        document.querySelector('.mobileConsole_base').style.display = "block"; }
    }
    console.log(e) 
  }
document.addEventListener('keydown', keyShortcuts);
