import { useState } from "react";
import Swal from "sweetalert2";
import Alerta from "./Alerta";

const Formulario = ({agregarNuevoUsuario}) => {
  const formInicial = {
    id: null,
    name: "",
    email: "",
    message: "",
  };

  const [form, setForm] = useState(formInicial);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando data: ");
    console.log(form);
    agregarNuevoUsuario(form);
    Alerta(e.target.value);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Formulario enviado",
      showConfirmButton: false,
      timer: 1500
    });
    handleReset();
  };

  const handleReset = () => {
    setForm(formInicial);
  };

  return (
    <div className="container border border-info rounded-5 w-50 p-5">
      <div className="mb-3">
        <label htmlFor="lbl-nombre" className="form-label">
          Nombre Completo
        </label>
        <input
          type="text"
          className="form-control"
          id="lbl-nombre"
          placeholder="Ingrese su nombre"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lbl-email" className="form-label">
          Correo Electrónico
        </label>
        <input
          type="text"
          className="form-control"
          id="lbl-email"
          placeholder="Ingrese su email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="textArea">Mensaje</label>
        <textarea
          className="form-control"
          id="textArea"
          rows="3"
          placeholder="Escriba su mensaje"
          name="message"
          value={form.message}
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <button
          className="btn btn-primary rounded-4 mx-3"
          onClick={handleSubmit}>
          Enviar
        </button>
        <button className="btn btn-light rounded-4" onClick={handleReset}>
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default Formulario;
