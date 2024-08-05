const Alerta = (props) => {
  return (
    <div className={`${props.alert} ${props.borde}`}>
      <p className="m-0"></p>
      {props.children}
    </div>
  );
};

export default Alerta;
