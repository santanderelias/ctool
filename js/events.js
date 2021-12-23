
//shortcut keys
document.addEventListener('keydown', keyShortcuts);
//events btns 
//reset dnote & temp DB
btnReset.addEventListener("click", resetDnote);
//save tempdb to actual db
btnSave.addEventListener("click", saveDb);
//event add to table
btnPlus.addEventListener("click", createRemito);
btnPreview.addEventListener("click", toDoc);
btnPlus.addEventListener("focus", highlight(btnPlus))
btnPreview.addEventListener("focus", highlight(btnPreview))
btnSave.addEventListener("focus", highlight(btnSave))
inputSele.addEventListener("focus", highlight(inputSele))
cantSele.addEventListener("focus", highlight(cantSele))
btnReset.addEventListener("focus", highlight(btnReset));

