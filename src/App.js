import { useState } from 'react';
import Banner from './components/Banner';

import Formulario from './components/Formulario';

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
      </section>
  );
}

export default App;
