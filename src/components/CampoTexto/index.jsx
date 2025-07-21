
import './CampoTexto.css'

const CampoTexto = (props) => { // Feito de forma diferente, utilizando arrow function
    // console.log(props.label)
    return(
        <div className="campo-texto">
            <label htmlFor={props.label}>{props.label}</label>
            <input type="text" required={props.obrigatorio} placeholder={props.ph} name={props.label}></input>
        </div>
    )
}

export default CampoTexto