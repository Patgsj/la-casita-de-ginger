// formulario de contacto y los campos que vamos a revisar
var formulario = document.getElementById("formulario");
var campos = ["nombre", "telefono", "correo", "mensaje"];

// devuelve el mensaje de error de cada campo, o "" si está bien
function mensajeDeError(id, valor) {
    valor = valor.trim();
    if (id === "nombre") {
        if (valor.length < 3) {
            return "El nombre debe tener al menos 3 letras.";
        }
    }
    // el teléfono no es obligatorio, solo se revisa si escribieron algo
    if (id === "telefono") {
        if (valor !== "" && !/^\+?[0-9 ]{8,13}$/.test(valor)) {
            return "Escribe un teléfono válido, por ejemplo +56 9 1234 5678.";
        }
    }
    if (id === "correo") {
        if (valor === "") {
            return "Escribe tu correo electrónico.";
        }
        // revisa que tenga la forma algo@algo.algo
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
            return "El correo no tiene un formato válido.";
        }
    }
    if (id === "mensaje") {
        if (valor.length < 10) {
            return "Cuéntanos un poco más, mínimo 10 caracteres.";
        }
    }
    return "";
}

// muestra el error debajo del campo y lo pinta verde o rojo
function validarCampo(id) {
    var campo = document.getElementById(id);
    var error = document.getElementById("error-" + id);
    var texto = mensajeDeError(id, campo.value);
    error.textContent = texto;
    if (texto === "") {
        campo.classList.remove("is-invalid");
        if (campo.value.trim() !== "") {
            campo.classList.add("is-valid");
        }
        return true;
    }
    campo.classList.remove("is-valid");
    campo.classList.add("is-invalid");
    return false;
}

// evento blur: revisa cada campo cuando el usuario sale de él
for (var i = 0; i < campos.length; i++) {
    document.getElementById(campos[i]).addEventListener("blur", function () {
        validarCampo(this.id);
    });
}

// evento submit: revisa todo antes de enviar y si algo falla no se envía
formulario.addEventListener("submit", function (evento) {
    var todoBien = true;
    for (var i = 0; i < campos.length; i++) {
        if (!validarCampo(campos[i])) {
            todoBien = false;
        }
    }
    var resultado = document.getElementById("resultado-formulario");
    if (!todoBien) {
        evento.preventDefault();
        resultado.textContent = "Revisa los campos marcados antes de enviar.";
        return;
    }
    resultado.textContent = "Listo, se abrirá tu correo para enviar el mensaje.";
});

// texto de ayuda del mensaje y las opciones de "¿En qué te ayudamos?"
var ayudaMensaje = document.getElementById("ayuda-mensaje");
var motivoPedido = document.getElementById("motivo-pedido");
var motivoConsulta = document.getElementById("motivo-consulta");
var motivoOtro = document.getElementById("motivo-otro");

// evento change: cambia la ayuda según la opción que elijan
motivoPedido.addEventListener("change", function () {
    ayudaMensaje.textContent = "Cuéntanos qué torta quieres, si es para 20 o 30 personas y para qué fecha.";
});

motivoConsulta.addEventListener("change", function () {
    ayudaMensaje.textContent = "Escribe tu pregunta sobre nuestros productos y te responderemos pronto.";
});

motivoOtro.addEventListener("change", function () {
    ayudaMensaje.textContent = "Cuéntanos en qué te podemos ayudar.";
});
