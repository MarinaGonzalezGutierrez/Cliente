const inicializar = () =>
    document.getElementById('enviar')
    .addEventListener('click', validar, false);

    const validaElemento = (nombre) =>{
        let elemento = document.getElementById(nombre);
        if(!elemento.checkVisibility()){
            return false;
        }
        return true;
    }

    const error = (elemento) => {
        document.getElementById('mensajeError').innerHTML = elemento.validatorMessage;
        elemento.className = 'error';
        elemento.focus();
    }

    const borrarError = () =>{
        let formulario = document.forms[0];
        formulario.elements.forEach((e) => e.className = "")
    }

    const validar = (e) =>{
          e.preventDefault();
        if(validaElemento("nombre") && validaElemento("edad") && confirm ("Pulsa enviar si quieres"))
            return true;
        else{
          
            return false;
        }
    }