import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) ? <section className="time" style={{ background: props.corPrimaria }}>
            <h3 style={{ borderColor: props.corSecundaria }}>{props.nomeDoTime}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.corSecundaria} aoRemover={props.aoColaboradorRemovido}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time;