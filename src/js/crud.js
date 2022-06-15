/* const inputName = document.getElementById('name1');
const btnAdd = document.getElementById('btn-add');
let result1 = document.getElementById('result1');

btnAdd.addEventListener('click', () => {
    let name = inputName.value;
    let result = AddName(name);
    result1.innerHTML = `Lista de participantes: ${result}`;
});

function AddName(name) {
    let array_names = ['Lau', 'Paz', 'Sara', 'Vero'];
    let names = array_names.push(name);
    //for (let i= 0; i < names.length; i++){
    return names;
}; */

let inputTitle = document.querySelector("#title");
let btnTitle = document.querySelector("#btn-title") ;
let resultTitle = document.querySelector("#game-title");


btnTitle.addEventListener('click', () => {
  let title = inputTitle.value;
  resultTitle.innerHTML = title;
  clearTitle();
});

function clearTitle() {
  document.querySelector("#title").value = "";
}



let element, i;
let names = [];
let panel = document.querySelector("#panel");

function clearForm() {
  document.querySelector("#name").value = "";
}

function renderItem() {
  panel.textContent = "";
  names.forEach(x => {
    element = document.createElement("option");
    element.innerText = `${x.name}`;
    panel.append(element);
  });
}

function create() {
  let competitor = document.querySelector("#name").value;
  names = [...names, { name: competitor}];
  clearForm();
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#name").value = names[i].name;
}

function update() {
  names[i].name = document.querySelector("#name").value;
  clearForm();
  renderItem();
}

function deleteItem() {
  names.splice(i, 1);
  clearForm();
  renderItem();
}

 renderItem();





