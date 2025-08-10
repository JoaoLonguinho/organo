import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

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
    setColaboradores([...colaboradores, colaborador]);
  }

  const aoColaboradorRemovido = (nome) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.nome !== nome));
  }
  return (
      <section>
        <Banner />
        <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaboradores => aoNovoColaboradorAdicionado(colaboradores)} />
        {times.map(time => <Time
        key={time.nome}
        nomeDoTime={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoColaboradorRemovido={aoColaboradorRemovido}
        />)}
        <Rodape />
      </section>
  );
}

export default App;
