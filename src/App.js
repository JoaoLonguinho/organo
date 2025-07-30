import { useState } from 'react';
import Banner from './components/Banner';

import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Front-end',
      corPrimaria: '#d9f7e9',
      corSecundaria: '#57c278'
    },
    {
      nome: 'Back-end',
      corPrimaria: '#ded9f7ff',
      corSecundaria: '#575ec2ff'
    },
    {
      nome: 'DBA',
      corPrimaria: '#f7f7d9ff',
      corSecundaria: '#c29957ff'
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores], colaborador);
  }
  return (
    <section>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaboradores => aoNovoColaboradorAdicionado(colaboradores)} />
      {times.map(time => <Time key={time.nome} nomeDoTime={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
    </section>
  );
}

export default App;
