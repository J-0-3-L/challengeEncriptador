
const mensajeResaltante = document.querySelector(".mensaje_resaltante")
mensajeResaltante.innerHTML='<img src="img/advertencia.svg" width="30"> Solo letras minusculas y sin acento'


// Función de lógica para encriptar
function logicaEncriptar(texto) {
    let textoFinal = '';
    for (let i = 0; i < texto.length; i++) {
        let ascii = texto.charCodeAt(i);
        ascii += 1;
        textoFinal += String.fromCharCode(ascii);
    }
    return textoFinal;
}

// Función de lógica para desencriptar
function logicaDesencriptar(texto) {
    let textoFinal = '';
    for (let i = 0; i < texto.length; i++) {
        let ascii = texto.charCodeAt(i);
        ascii -= 1;
        textoFinal += String.fromCharCode(ascii);
    }
    return textoFinal;
}

// Función para manejar el encriptado
function encriptar() {
    const texto = document.querySelector('#originalTexto').value;
    const textoEncriptado = logicaEncriptar(texto);
    document.querySelector('.mensaje').value = textoEncriptado;
}

// Función para manejar el desencriptado
function desencriptar() {
    const texto = document.querySelector('#originalTexto').value;
    const textoDesencriptado = logicaDesencriptar(texto);
    document.querySelector('.mensaje').value = textoDesencriptado;
}

// Función para copiar el texto
function copiarTexto() {
    const texto = document.querySelector('.mensaje').value;
    navigator.clipboard.writeText(texto)
    if (texto.trim() !== '') {
        alert("Texto copiado exitosamente");
    } else {
        alert("El campo de texto está vacío");
    }
}