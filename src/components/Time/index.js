import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
    return (
        <section className="time" style={{ background: props.corPrimaria }}>
            <h3 style={{ borderColor: props.corSecundaria }}>{props.nomeDoTime}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}

export default Time;