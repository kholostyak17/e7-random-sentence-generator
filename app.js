function numAleatorio(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function onLoad() {
    let who = ["El gato", "Mi hermana", "Mi amigo Ramón", "Mi novia"];
    let what = ["me ha tirado", "me ha quemado", "me ha robado", "me ha perdido"];
    let when = ["ayer por la noche", "hace un mes", "justo cuando desperté", "mientras estaba en la ducha", "mientras alimentaba al pájaro"];
    let excusa = ("".concat(numAleatorio(who), " ", numAleatorio(what), " mis ejercicios ", numAleatorio(when), "... :("));
    return excusa;
}

window.onload = () => {
    console.log("hola!!! (funciona script JS)");
    document.querySelector('#excusa').innerHTML = onLoad();
    document.querySelector('#generarExcusa').addEventListener("click", ()=>{
        document.querySelector('#excusa').innerHTML = onLoad();
    });
}
