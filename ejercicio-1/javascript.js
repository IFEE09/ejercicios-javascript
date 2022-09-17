let inputNombre = document.getElementById('nombre');

inputNombre.addEventListener("click", inputVacio);

function inputVacio() { 
    if(inputNombre === "" || inputNombre === null) {
        inputNombre.classList.add("input-vacio");
    }
 
    
}