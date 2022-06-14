const inputName = document.getElementById('name1');
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
};




