import "./App.css";
import { useState } from "react";
import Alerta from "./Components/Alerta";
import Card from "./Components/Card";
import Contador from "./Components/Contador";
import Formulario from "./Components/Formulario";
import usuarios from "./Constants/usuarios";
import {v4 as uuidv4} from "uuid";

const App = () => {
  const [users, setUsers] = useState(usuarios);

  const agregarUsuario = (usuario) => {
    usuario.id = uuidv4()
    const nuevoEstadoUsuarios = [...users, usuario];
    setUsers(nuevoEstadoUsuarios);
  };


  return (
    <div className="container">
      <h1>Desafió 11</h1>
      <hr />
      <h2>Ejercicio con Props:</h2>
      <h3>1.Tarjeta de Presentación:</h3>
      <p>
        Crea un componente Tarjeta que reciba como props el nombre, profesión y
        una foto de una persona. Muestra estos datos de forma visualmente
        atractiva dentro del componente.
      </p>
      <strong>
        Nota: <em>Imagen generada aleatoriamente con mockAPI</em>
      </strong>
      <hr />
      <Card
        foto="https://loremflickr.com/250/250/people"
        nombre="Nombre: John Doe"
        profesion="Profesión: Desarrollador Web"
      />
      <hr />
      <h2>Ejercicio con Children:</h2>
      <h3>2. Alerta Personalizada: </h3>
      <p>
        Crea un componente Alerta que reciba un tipo de alerta (success,
        warning, error) como prop. Usa props.children para mostrar el contenido
        del mensaje dentro de la alerta, con estilos visuales acordes al tipo.
      </p>
      <hr />
      <div className="container d-flex flex-column">
        <Alerta
          alert="alert alert-success"
          borde=" border border-3 border-success rounded-pill align-self-center ">
          <strong className="success">Success!</strong> La aplicación inicio
          correctamente!
        </Alerta>
        <Alerta
          alert="alert alert-warning"
          borde=" border border-3 border-warning rounded-pill align-self-center">
          <strong className="warning">Warning!</strong> La aplicación debe
          reiniciarse para trabajar correctamente!
        </Alerta>
        <Alerta
          alert="alert alert-danger "
          borde="border border-3 border-danger rounded-pill align-self-center">
          <strong className="danger">Danger!</strong> Algo salio mal y debe
          reiniciar el proceso de ejecución!
        </Alerta>
      </div>
      <hr />
      <h2>Ejercicio con Estado:</h2>
      <h3>3. Contador:</h3>
      <p>
        Crea un componente Contador que tenga un estado inicial de 0. Agrega
        botones para incrementar y decrementar el valor del contador,
        actualizando el estado en cada clic.
      </p>
      <hr />
      <Contador />
      <hr />
      <h2>Ejercicio Combinado:</h2>
      <h3>4. Formulario de Contacto:</h3>
      <p>
        Crea un formulario con campos para nombre, email y mensaje. Usa el
        estado para almacenar los valores de los campos a medida que el usuario
        los completa. Agrega un botón de envío que muestre los datos del
        formulario en una alerta (puedes usar el componente Alerta creado
        anteriormente).
      </p>
      <hr />
      <Formulario agregarNuevoUsuario={agregarUsuario} />

      <hr />
    </div>
  );
};

export default App;

