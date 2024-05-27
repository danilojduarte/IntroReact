import { Cabecalho, Conteudo, Rodape } from './components';
import { Inicial } from './pages';

import './App.css'


const App = () => {
  return (
    
    <>
    <Cabecalho 
    nomeUsuario="Danilo" />
    <Conteudo>
    <Inicial />
    </Conteudo>
    <Rodape 
    criador="Danilo"/>
    </>
  )
};

export  { App };
