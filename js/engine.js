
modalTitle.innerHTML = `Fecha: ${dia}/${mes}`;

function dPrint(){
  print()
}

//if ('serviceWorker' in navigator) {
//  navigator.serviceWorker.register('./sw.js');
//}

console.log('service worker deactivated');



//populate printdoc
//guardarTEMP
/*
var dataBaseOut = {'': 0};
function saveDataBaseToLocalStorage() {
  const dataBaseStr = JSON.stringify(dataBase);
  localStorage.setItem("dataBaseStr", dataBaseStr);
  var dataBaseOut = JSON.parse(localStorage.getItem("dataBaseStr"));
  return dataBaseOut;
}
*/
