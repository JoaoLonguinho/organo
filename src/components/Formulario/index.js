import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState(props.times[0] || '');
    const aoSalvar = (e) => {
        e.preventDefault();
        // console.log("Form foi submetido", nome, cargo, imagem, time);
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }
    
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os campos abaixo para criar o card de seu perfil</h2>
                <CampoTexto 
                valor={nome} 
                aoAlterado={valor => setNome(valor)} 
                obrigatorio={true} 
                label="Nome" ph="Digite seu nome" />

                <CampoTexto 
                valor={cargo} 
                aoAlterado={valor => setCargo(valor)} 
                obrigatorio={true} 
                label="Cargo" 
                ph="Digite seu cargo" />
                
                <CampoTexto 
                valor={imagem} 
                aoAlterado={valor => setImagem(valor)} 
                obrigatorio={false} 
                label="Imagem" 
                ph="Faça o upload de sua imagem" />
                
                <ListaSuspensa
                valor={time}
                aoAlterado={valor => setTime(valor)}
                obrigatorio={true} 
                label="Time" 
                itens={props.times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}
export default Formulario