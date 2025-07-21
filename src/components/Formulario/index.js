import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Front-end',
        'Back-end',
        'DBA'
    ]
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os campos abaixo para criar o card de seu perfil</h2>
                <CampoTexto label="Nome" ph="Digite seu nome" />
                <CampoTexto label="Cargo" ph="Digite seu cargo" />
                <CampoTexto label="Imagem" ph="Faça o upload de sua imagem" />
                <ListaSuspensa label="Time" itens={times}/>
            </form>
        </section>
    )
}
export default Formulario