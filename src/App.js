import Banner from './components/Banner';
import CampoTexto from './components/CampoTexto';

function App() {
  return (
      <section>
        <Banner />
        <CampoTexto label="Nome" ph="Digite seu nome"/>
        <CampoTexto label="Cargo" ph="Digite seu cargo"/>
        <CampoTexto label="Imagem" ph="Faça o upload de sua imagem"/>
      </section>
  );
}

export default App;
