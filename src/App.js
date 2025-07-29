import { useState } from 'react';
import Banner from './components/Banner';

import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores], colaborador);
  }
  return (
      <section>
        <Banner />
        <Formulario aoColaboradorCadastrado = {colaboradores=> aoNovoColaboradorAdicionado(colaboradores)}/>
        <Time nomeDoTime="Gestores"/>
        <Time nomeDoTime="Colaboradores"/>
      </section>
  );
}

export default App;
