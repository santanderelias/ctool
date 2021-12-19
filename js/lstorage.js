lstorage = window.localStorage;

if(!lStorage.getItem('db')) {
    populateStorage();
  } else {
    setVars();
  }

function populateStorage() {
    lStorage.setItem('db', JSON.stringify(db)); //stringify object and store
    lStorage.setItem('dbTemp', JSON.stringify(dbTemp)); //stringify object and store
    lStorage.setItem('historyback', JSON.stringify(historyback)); //stringify object and store
    setVars();
}
  
function setVars() {  

    db = JSON.parse(lStorage.getItem('db')); //retrieve the object
    dbTemp = JSON.parse(lStorage.getItem('dbTemp')); //retrieve the object
    historyback = JSON.parse(lStorage.getItem('historyback')); //retrieve the object
  }

db.onchange = populateStorage;
dbTemp.onchange = populateStorage;
historyback.onchange = populateStorage;