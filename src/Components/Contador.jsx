import { useState } from "react";

const Contador = () => {
  const [estado, setEstado] = useState(0);
  const handleIncremento = () => {
    setEstado(estado + 1);
  };
  const handleDecremento = () => {
    setEstado(estado - 1);
  };
  const handleReset = () => {
    setEstado(0);
  }

  return (
    <div className="container d-flex flex-column">
      <h3 className="col-12 text-center">Valor actual: {estado}</h3>
      <button className="col-4 align-self-start btn btn-primary mb-3 rounded-pill py-1 " onClick={handleIncremento}>Incrementar</button>
      <button className="col-4 align-self-center btn btn-warning mb-3 rounded-pill py-1 " onClick={handleDecremento}>Decrementar</button>
      <button className="col-4 align-self-end btn btn-danger mb-3 rounded-pill py-1 " onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Contador;
