
let names = ["Cristina", "paz", "Lau", "Vero", "sara"]
console.log(names)
let btnValidatePlay = document.getElementById('btnValidatePlay')
let btnValidateStop = document.getElementById('btnValidateStop')
let random = ""
let avatar = document.getElementById("randomName");
let suspense = document.getElementById ('suspense')
let winner = document.getElementById ('winner')

btnValidatePlay.addEventListener("click", function () {
    if (names.length>1){
    return avatar.setAttribute("class", "shake")};
    return window.alert (`No has ingresado el numero minimo de participantes`)
    
});

btnValidateStop.addEventListener("click", function () {
    
    avatar.removeAttribute("class", "shake");
    let random = ''
    random = names[Math.floor(Math.random() * names.length)];
    console.log(random);
        winner.innerHTML = `El ganador es ${random}.
         - Que la suerte esté siempre de tu lado -`
                console.log (winner);
                winner.style.display='flex'}
                


);


