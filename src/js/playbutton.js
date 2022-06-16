let inputTitle = document.querySelector("#title");
let btnTitle = document.querySelector("#btn-title");
let resultTitle = document.querySelector("#game-title");


btnTitle.addEventListener('click', () => {
  let title = inputTitle.value;
  resultTitle.innerHTML = title;
  clearTitle();
});

function clearTitle() {
  document.querySelector("#title").value = "";
}



let el, i;
let names = [{ name: "Laura" },{ name: "Paz" },{ name: "Sara" },
{ name: "Vero" },{ name: "Nerea" },{ name: "Tania" },{ name: "Viviana" },
{ name: "Juliet" },{ name: "Esther" },{ name: "Marina" },{ name: "Marta" }, 
{ name: "Iria" },{ name: "MaryBell" },{ name: "Cris" },];

let panel = document.querySelector("#panel");

function clearForm() {
  document.querySelector("#name").value = "";
}

function renderItem() {
  panel.textContent = "";
  names.forEach(x => {
    el = document.createElement("option");
    //element.innerText = `${x.name}`;
    el.innerText = `${x.name}`;
    panel.append(el);
  });
}

function create() {
  let playername = document.querySelector("#name").value;
  names = [...names, { name: playername }];
  clearForm();
  console.log(names);
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#name").value = names[i].name;
  // document.querySelector("#name").value = names[i].name;
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





/*BOTON***************************************************************************************************/
//let names = ["Cristina", "paz", "Lau", "Vero", "sara"]
console.log(names)
let btnValidatePlay = document.getElementById('btnValidatePlay')
let btnValidateStop = document.getElementById('btnValidateStop')
let random = ""
let avatar = document.getElementById("randomName");
let suspense = document.getElementById('#suspense')


btnValidatePlay.addEventListener("click", function () {
  if (names.length > 1) {
    return avatar.setAttribute("class", "shake")
  };
  return window.alert(`No has ingresado el numero minimo de participantes`)

});

btnValidateStop.addEventListener("click", function () {

  avatar.removeAttribute("class", "shake");
  let random = ''
  random = names[Math.floor(Math.random() * names.length)];
  console.log(random)
  window.alert(`El ganador es ${random}.
            // May the odds be ever in your favour`)

            


});
 




