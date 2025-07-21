import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Front-end',
        'Back-end',
        'DBA'
    ]


    const aoSalvar = (e) => {
        e.preventDefault()
        console.log("Form foi submetido")
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os campos abaixo para criar o card de seu perfil</h2>
                <CampoTexto obrigatorio={true} label="Nome" ph="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" ph="Digite seu cargo" />
                <CampoTexto obrigatorio={false} label="Imagem" ph="Faça o upload de sua imagem" />
                <ListaSuspensa label="Time" itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}
export default Formulario