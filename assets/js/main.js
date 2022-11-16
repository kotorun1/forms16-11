// // //1)
// let genres = document.getElementById('genres')
// console.log(genres.options[genres.selectedIndex].value);
// console.log(genres.options[genres.selectedIndex].text);

// // 2)
// let classic = new Option("Классика", "classic");
// genres.append(classic);
// // 3)
// classic.selected = true

// Редактируемый div

// let elem = document.getElementById('elem');

// function start() {
//     area = document.createElement('textarea');
//     area.value = elem.innerHTML;
//     area.onkeydown = function(event) {
//         if (event.key == 'Enter') {
//             this.blur();
//         }
//     };

//     area.onblur = function() {
//         end();
//     };

//     elem.replaceWith(area);
//     area.focus();
// }
// function end() {
//   elem.innerHTML = area.value;
//   area.replaceWith(elem);
// }
// Редактирование TD по клику
// let table = document.getElementById('bagua-table');
// let editingTd;

// table.onclick = function(event) {
//   let target = event.target.closest('.btn_cancel,.btn_ok,td');
//   if (!table.contains(target)) return;
//   if (target.className == 'btn_cancel') {
//     finishTdEdit(editingTd.elem, false);
//   } else if (target.className == 'btn_ok') {
//     finishTdEdit(editingTd.elem, true);
//   } else if (target.nodeName == 'TD') {
//     if (editingTd) return; 
//     makeTdEditable(target);
//   }
// };
// function makeTdEditable(td) {
//   editingTd = {
//     elem: td,
//     data: td.innerHTML
//   };
//   td.classList.add('editing');
//   let textArea = document.createElement('textarea');
//   textArea.style.width = td.clientWidth + 'px';
//   textArea.style.height = td.clientHeight + 'px';
//   textArea.className = 'edit-area';

//   textArea.value = td.innerHTML;
//   td.innerHTML = '';
//   td.appendChild(textArea);
//   textArea.focus();

//   td.insertAdjacentHTML("beforeEnd",
//     '<div class="edit-controls"><button class="btn_ok">OK</button><button class="btn_cancel">CANCEL</button></div>'
//   );
// }
// function finishTdEdit(td, isOk) {
//   if (isOk) {
//     td.innerHTML = td.firstChild.value;
//   } else {
//     td.innerHTML = editingTd.data;
//   }
//   td.classList.remove('editing');
//   editingTd = null;
// }

// Депозитный калькулятор
let dol = document.getElementById('dol');
let deposit = document.getElementById('deposit');
let srok = document.getElementById('srok');
let procent = document.getElementById('procent');
let red = document.getElementById('red');
let green = document.getElementById('green');
let posle = document.getElementById('posle');
function btnclick(){
    dol.innerHTML = 'Было:'+deposit.value
    posle.innerHTML = 'Стало:'+ Math.round(deposit.value * (1 + (procent.value/100)) ** (srok.value /12));
    let width = (Math.round(deposit.value * (1 + (procent.value/100)) ** (srok.value /12))) / deposit.value * 100 + 'px';
    red.style.width = width;
    green.style.width = 100 + 'px';
}
