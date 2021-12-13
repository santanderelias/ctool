console.log('>> func.js loaded')
function createRemito(pan) {
  pan.name = inputSele.options[inputSele.selectedIndex].text;
  pan.id = document.getElementById("pansele").value;
  pan.cantidad = Number(inputCant.value);
  console.log(`pan cantidad:${pan.cantidad}`)
  if (pan.cantidad == 0) {
    console.log("ingresa la variedad")
    toastMessage.innerText = "Ingresa la cantidad";
    changeClasses(liveToast, "notification", "notificationAlert");
    toast.show();
    changeAfterOnesSec(liveToast, "notificationAlert", "notification", 5500)
    inputCant.focus();
    inputCant.classList.add('is-invalid')
    return
  } else if (pan.id == "") {
    console.log("ingresa la variedad")
    toastMessage.innerText = "Ingresa la variedad";
    changeClasses(liveToast, "notification", "notificationAlert");
    toast.show();
    changeAfterOnesSec(liveToast, "notificationAlert", "notification", 5500)
    inputCant.focus();
    inputSele.classList.add('is-invalid')
    return
  } else {
    inputSele.classList.remove('is-invalid')
    inputCant.classList.remove('is-invalid')
  }
  var row = dnote.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = pan.cantidad;
  cell2.innerHTML = pan.name;
  //sort pending!!!!
  //change pan.cantidad to pan.cantidadb2c or b2b
  if (radiocheck.checked) {
    console.log(`Item ${pan.name} B2C added`)
    dbTemp.find((obj) => {
      if (obj.id === pan.id) {
        obj.cantidadb2c += pan.cantidad
        total += pan.cantidad
      }
    })
  } else {
    console.log(`Item ${pan.name} B2B added`)
    dbTemp.find((obj) => {
      if (obj.id === pan.id) {
        obj.cantidadb2b += pan.cantidad
        total += pan.cantidad
      }
    })
  }
  dfooter.innerHTML = total
  console.log(`pan total: ${total}`)
  console.log(pan)
  console.log(`Added: \n${pan.name}, \ncantidad ${pan.cantidad} Kg`)
  toastMessage.innerText = `Added: \n Item ${pan.name} \n cantidad ${pan.cantidad} Kg`;
  inputSele.value = "";
  inputCant.value = "";
  pan.id = "";
  pan.cantidad = 0;
  if (liveToast.classList.contains("notificationSuccess")) {
    changeClasses(liveToast, "notificationSuccess", "notification");
  }
  else if (liveToast.classList.contains("notificationAlert")) {
    changeClasses(liveToast, "notificationAlert", "notification");
  }
  changeClasses(liveToast, "notificationAlert", "notification");
  toast.show()
  inputCant.focus();
};

function saveDb() {
  for (var i = 0; i < 19; i++) {
    db[i].cantidadb2b += dbTemp[i].cantidadb2b
    dbTemp[i].cantidadb2b = 0
    db[i].cantidadb2c += dbTemp[i].cantidadb2c
    dbTemp[i].cantidadb2c = 0
  }
  console.log(db)
  //historylogger
  var dnoteLastElem = dnote.lastChild;
  // Copy the <li> element and its child nodes
  var historySharer = dnoteLastElem.cloneNode(true);
  historyback.appendChild(cln);
  //end history logger
  dnote.innerHTML = "";
  inputSele.value = "";
  inputCant.value = "";
  console.log('Saved!');
  total = 0;
dfooter.innerHTML = ''
  toastMessage.innerText = "Remito agregado al total";
  changeClasses(liveToast, "notification", "notificationSuccess");
  toast.show();
  changeAfterOnesSec(liveToast, "notificationSuccess", "notification", 5500)
  inputCant.focus();
}

function resetDnote() {
  for (var i = 0; i < 19; i++) {
    dbTemp[i].cantidadb2b = 0
    dbTemp[i].cantidadb2c = 0
  }
  dnote.innerHTML = "";
  inputSele.value = "";
  inputCant.value = "";
  console.log('Reseted!');
  toastMessage.innerText = "Items eliminados del remito";
  changeClasses(liveToast, "notification", "notificationAlert");
  console.log("cambiado a alert")
  toast.show();
  changeAfterOnesSec(liveToast, "notificationAlert", "notification", 5500)
  inputCant.focus();
  total = 0;
  dfooter.innerHTML = ''
}

function toDoc() {
  totaldoc.innerHTML = '<tbody id="totaldoc"></tbody>'
  for (var i = 0; i < 19; i++) {
    var pan = totaldoc.insertRow(-1);
    var name = pan.insertCell(0);
    var b2c = pan.insertCell(1);
    var b2b = pan.insertCell(2);
    name.innerHTML = db[i].name;
    b2c.innerHTML = db[i].cantidadb2c;
    b2b.innerHTML = db[i].cantidadb2b;
    total.b2c += db[i].cantidadb2c;
    total.b2b += db[i].cantidadb2b
  }
}


function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("dnote");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function keyShortcuts(e) {
  if (e.code == "KeyL") {
    saveDb();
    console.log(`Presed ${e.code}`);
  }
  else if (e.code == "F4") {
    console.log(` ${e.code}`, "Downloading package");
    modal2.toggle()
  } else if (e.code == "Period") {
    console.log(` ${e.code}`, "Period pressed, changing packaging");
    if (radiocheck.checked = true) {
      radiocheck.removeAttribute("checked")
      radiocheck2.setAttribute("checked", "")
      }
    else {
      radiocheck2.removeAttribute("checked")
      radiocheck.setAttribute("checked", "")
      }
  }
  else { console.log(` ${e.code}`); }
}

function changeClasses(a, b, c) {
  a.classList.replace(b, c);
}

function changeAfterOnesSec(a, b, c, d) {
  return new Promise(resolve => {
    setTimeout(() => {
      changeClasses(a, b, c);
    }, d);
  });
}


