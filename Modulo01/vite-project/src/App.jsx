import { Cabecalho, Conteudo } from './components';

import './App.css'

const App = () => {
  return (
    
    <>
    <Cabecalho nomeUsuario="Danilo" />
    <Conteudo>
      <h1>Titulo</h1>
      <p>Texto</p>
    </Conteudo>
    </>
  )
};

export  { App };
