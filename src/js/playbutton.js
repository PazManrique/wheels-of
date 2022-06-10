
let names = ["Cristina", "paz", "Lau", "Vero", "sara"]
console.log(names)
let btnValidate = document.getElementById('btn-validate')
let random = ""



btnValidate.addEventListener("click", function () {

    let random = ''
    function randomFunc() {

        random = names[Math.floor(Math.random() * names.length)];
        console.log(random)
    }
    randomFunc()

    function render() {
        window.alert(`El ganador es ${random}.
        May the odds be ever in your favour`)
    }
    render();

})

