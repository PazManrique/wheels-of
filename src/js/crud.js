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
let names = [ { firstname: "Mauricio"  },
{ firstname: "Jorge"  },
{ firstname: "Andrés" },
{ firstname: "Rafael" }];

let panel = document.querySelector("#panel");

function clearForm() {
  document.querySelector("#name").value = "";
}

function renderItem() {
  panel.textContent = "";
  names.forEach(x => {
    element = document.createElement("option");
    //element.innerText = `${x.name}`;
    element.innerText = `${x.firstname}`;
    panel.append(element);
  });
}

function create() {
  let fn = document.querySelector("#name").value;
  names = [...names, { firstname: fn}];
  clearForm();
  console.log(names);
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#name").value = names[i].firstname;
  
}

function update() {
  names[i].name = document.querySelector("#name").value;
 // clearForm();
  renderItem();
}

function deleteItem() {
  names.splice(i, 1);
  //clearForm();
  renderItem();
}

 renderItem();





