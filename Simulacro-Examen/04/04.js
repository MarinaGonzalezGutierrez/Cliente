// Completa el siguiente código para que al hacer clic en el botón con el id miBoton, se añada un nuevo elemento <li> con el texto "Nuevo ítem" al final de la lista con el id miLista.

document.getElementById("miBoton").addEventListener("click", function() {
   let li = document.createElement("li");

   li.textContent = "Nuevo Ítem";

    document.getElementById("miLista").appendChild(li);
});
