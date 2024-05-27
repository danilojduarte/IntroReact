import { Botao, CampoTexto } from "../../components";

const FormCriarTarefa = () => {
  return (
    <form>
      <CampoTexto />
      <Botao texto="+"/>
    </form>
  );
};

export { FormCriarTarefa };