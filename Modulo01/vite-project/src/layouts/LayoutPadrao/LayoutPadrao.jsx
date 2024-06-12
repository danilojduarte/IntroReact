import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../components";

import { Inicial } from "../../pages";

const LayoutPadrao = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Danilo" />
      <Conteudo>
        <Outlet />
      </Conteudo>
      <Rodape criador="Danilo" />
    </>
  );
};

export { LayoutPadrao };
