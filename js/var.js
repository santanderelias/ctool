
//inputfields, buttons n table
const obj = {name: 'elias', age: '29', nac: 'AR'}
const btnPlus = document.getElementById("btnPlus");
const btnSave = document.getElementById("btnSave");
const btnPreview = document.getElementById("btnPreview");
const btnReset = document.getElementById("btnReset");
const inputSele = document.getElementById("pansele");
const inputCant = document.getElementById("cantidad");
const dnote = document.getElementById("dnote");
var historyback = document.getElementById("historyback");
const dfooter = document.getElementById("dfooter");
const totaldoc = document.getElementById("totaldoc");
const modalTitle = document.getElementById("modalLabelone");
const radiocheck = document.getElementById("flexRadioDefault1");
const radiocheck2 = document.getElementById("flexRadioDefault2");
const dat = new Date();
const dia = dat.getUTCDate() + 1;
const mes = 01; //dat.getUTCMonth();
const toastTrigger = document.getElementById('liveToastBtn');
const toastLive = document.getElementById('liveToast')
const toast = new bootstrap.Toast(toastLive)
historyState = 0
const modal2 = new bootstrap.Modal(document.getElementById('modal2'), {
  keyboard: false
})
function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}
const d = new Date();
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let s = addZero(d.getSeconds());
let time = h + ":" + m + ":" + s;

//total pending
var total = 0;
//maindb
var db = [
  {
    id: "bagel",
    name: "Bagel",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "briocheMolde",
    name: "Brioche Molde 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "clasicoMolde1kg",
    name: "Clasico Molde 1kg",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "clasico500",
    name: "Clasico 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "pizza",
    name: "Pizza Pack x2",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "ciabatta",
    name: "Ciabatta",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "maiz500",
    name: "Maiz 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "mediterraneo500",
    name: "Mediterraneo 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "muesli500",
    name: "Muesli 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "multibun",
    name: "Multicereal Bun",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "multimolde",
    name: "Multicereal Molde 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "bunpapa12u",
    name: "Bun Papa 12u",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "bunpapamarket",
    name: "Bun Papa Market",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "rusticoMolde1kg",
    name: "Rustico Molde 1kg",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "rustico500",
    name: "Rustico 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "semillasMolde1kg",
    name: "Semillas Molde 1kg",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "semillas500",
    name: "Semillas 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "trigo500",
    name: "Trigo 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "rugbrod800",
    name: "Rugbrod 800g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "pandulce",
    name: "Pan de navidad",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "papa125",
    name: "Papa 125",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "clasico125",
    name: "Papa Sandwich 125",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "rustico125",
    name: "Rustico Sandwich 125",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "semillas125",
    name: "Semillas Sandwich 125",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "mediterraneo125",
    name: "Mediterraneo Sandwich 125",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "multi125",
    name: "Multicereal Sandwich 125",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "bunpapaharina",
    name: "Bun papa Harina",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "muesliMolde1kg",
    name: "Muesli Molde 1kg",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "maizMolde1kg",
    name: "Maiz Molde 1kg",
    cantidadb2b: 0,
    cantidadb2c: 0,
  }
];

//tempdb

var dbTemp = [
  {
    id: "bagel",
    name: "Bagel",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "briocheMolde",
    name: "Brioche Molde 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "clasicoMolde1kg",
    name: "Clasico Molde 1kg",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "clasico500",
    name: "Clasico 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "pizza",
    name: "Pizza Pack x2",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "ciabatta",
    name: "Ciabatta",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "maiz500",
    name: "Maiz 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "mediterraneo500",
    name: "Mediterraneo 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "muesli500",
    name: "Muesli 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "multibun",
    name: "Multicereal Bun",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "multimolde",
    name: "Multicereal Molde 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "bunpapa12u",
    name: "Bun Papa 12u",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "bunpapamarket",
    name: "Bun Papa Market",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "rusticoMolde1kg",
    name: "Rustico Molde 1kg",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "rustico500",
    name: "Rustico 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "semillasMolde1kg",
    name: "Semillas Molde 1kg",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "semillas500",
    name: "Semillas 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "trigo500",
    name: "Trigo 500g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "rugbrod800",
    name: "Rugbrod 800g",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "pandulce",
    name: "Pan de navidad",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "papa125",
    name: "Papa 125",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "clasico125",
    name: "Clasico Sandwich 125",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "rustico125",
    name: "Rustico Sandwich 125",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "semillas125",
    name: "Semillas Sandwich 125",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "mediterraneo125",
    name: "Mediterraneo Sandwich 125",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "multi125",
    name: "Multicereal Sandwich 125",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "bunpapaharina",
    name: "Bun papa Harina",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "muesliMolde1kg",
    name: "Muesli Molde 1kg",
    cantidadb2b: 0,
    cantidadb2c: 0,
  },
  {
    id: "maizMolde1kg",
    name: "Maiz Molde 1kg",
    cantidadb2b: 0,
    cantidadb2c: 0,
  }
];

const udb = {
  biomarket: {name: 'Biomarket', et: 'no', prefs: {mediterraneo500: 1, rustico500: 1, semillasMolde1kg: 3}},
  kelpMarket: {name: 'Kelp Market', et: 'si', prefs: {clasico500: 1, maiz: 1, rustico500: 1, semillas500: 2}},
  harper: {name: 'Harper', et: 'no', prefs: {clasicoMolde1kg: 1, rustico500: 1, semillasMolde1kg: 3}},
}
