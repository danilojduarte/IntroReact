import style from './Botao.module.css';

const Botao = (props) => {
  const { texto, tipo = "primario", ...outrasProps } = props;
  return (
    <button className={style.Botao} tipo={ tipo } {...outrasProps} >
      { texto }
    </button>
  );
};


export { Botao };