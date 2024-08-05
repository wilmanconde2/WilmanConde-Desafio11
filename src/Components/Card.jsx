const Card = ({ nombre, profesion, foto }) => {
  if (!foto) {
    foto = "imgs/noDisponible.jpg";
  }
  return (
    <>
      <div className="card border-0"> 
        <div className="w-auto m-auto mb-3 border border-3 border-warning-subtle rounded-4 text-center bg-light bg-gradient">
          <img src={foto} className="col-6 text-center mx-4 my-3 rounded-5" alt="Foto Aleatoria MockAPI" />
          <div className="card-body text-center p-0">
            <h5 className="card-title text-muted">{nombre}</h5>
            <p className="card-text text-info mb-3">{profesion}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
