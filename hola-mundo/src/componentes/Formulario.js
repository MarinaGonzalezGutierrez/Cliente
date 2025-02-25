import { useState } from "react";
const Formulario = () => {
const [nombre, setNombre] = useState("");
const cambioEntrada = (event) => {
setNombre(event.target.value);
};
const envioForm = (event) => {
event.preventDefault();
alert(`Se ha enviado el formulario con el nombre: ${nombre}`);
};
return (
<form onSubmit={envioForm}>
<label>
Nombre:
<input type="text" value={nombre} onChange={cambioEntrada} />
</label>
<button type="submit">Enviar datos</button>
</form>
);
};
export default Formulario;