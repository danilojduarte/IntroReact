import { Cabecalho, Conteudo, Rodape } from './components';

import './App.css'

const App = () => {
  return (
    
    <>
    <Cabecalho nomeUsuario="Danilo" />
    <Conteudo>
      <h1>Titulo</h1>
      <p>Texto</p>
    </Conteudo>
    <Rodape />
    </>
  )
};

export  { App };
