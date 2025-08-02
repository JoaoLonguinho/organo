import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) =>{
    return(
        <section className="time" style={{background: props.corPrimaria}}>
            <h3 style={{borderColor: props.corSecundaria}}>{props.nomeDoTime}</h3>
            <Colaborador />
        </section>
    )
}

export default Time;