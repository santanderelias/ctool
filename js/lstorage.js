lstorage = window.localStorage;

if(!localStorage.getItem('db')) {
    populateStorage();
  } else {
    setVars();
  }

function populateStorage() {
   localStorage.setItem('db', 'db');
   localStorage.setItem('dbTemp', 'dbTemp');
   localStorage.setItem('historyback', historyback);
   setVars();
}
  
function setVars() {  
    db = localStorage.getItem('db', db);
    db = localStorage.getItem('db', dbTemp);
    db = localStorage.getItem('db', historyback);
  }

db.onchange = populateStorage;
dbTemp.onchange = populateStorage;
historyback.onchange = populateStorage;