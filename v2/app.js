console.log('console')
// regexp
let text = "some random text to start ";
let source = "text to search from";
let pattern = /text/i;
let result = text.match(pattern);

const dataBase = [{key: 'some random text', key: 'heres some more text to search in', key: 'a little more text'}]
function saveDb() {
  for (var i = 0; i < databMap.lenght; i++) {
  let bagel = /bagel/i;
  let target = dataBase[i].key
    db[i].cantidadb2b += dbTemp[i].cantidadb2b
    dbTemp[i].cantidadb2b = 0
    db[i].cantidadb2c += dbTemp[i].cantidadb2c
    dbTemp[i].cantidadb2c = 0
  }

console.log(result)
document.getElementById('writableDiv').innerHTML = `encontre: ${result}`;
//shortcut keys
function keyShortcuts(e) {
    if (e.ctrlKey && e.code == "KeyG") {
      e.preventDefault();
      console.log(`ctrl + ${e.code}`);
    }
    if (e.code == "F12") {
      e.preventDefault();
    if (document.querySelector('.mobileConsole_base').style.display != "none") {
        document.querySelector('.mobileConsole_base').style.display = "none";
      }
    else { 
        document.querySelector('.mobileConsole_base').style.display = "block"; }
    }
    console.log(e.code) 
  }
}
document.addEventListener('keydown', keyShortcuts());
