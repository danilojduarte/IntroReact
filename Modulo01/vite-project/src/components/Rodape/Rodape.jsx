import style from './Rodape.module.css';

const Rodape = (props) => {
  const { criador } = props;

  const anoAtual = ( new Date()).getFullYear();

  return (
    <div className={ style.Rodape }>
      <h4>
        Projeto React Basico - { anoAtual } - { criador }
      </h4>
    </div>
  );
};

export { Rodape };