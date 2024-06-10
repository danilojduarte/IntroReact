import { Link } from "react-router-dom";

import style from "./Cabecalho.module.css";

const Cabecalho = () => {
  return (
    <div className={style.Cabecalho}>
      <link to='/'>
        <h1>
          <span>ToDo </span>
          List
        </h1>
      </link>

      <link to='/sobre-nos'>
      Sobre Nós
      </link>
    </div>
  );
};

export { Cabecalho };
