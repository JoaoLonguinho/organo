
// import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => { // Feito de forma diferente, utilizando arrow function
    // console.log(props.label)

    // let valorDigitado = 'Uffa'

    // const [valorDigitado, setValorDigitado] = useState('teste') // hook

    const aoDigitar = (event) => {
        props.aoAlterado(event.target.value);
    }
    
    return (
        <div className="campo-texto">
            <label htmlFor={props.label}>{props.label}</label>
            <input value={props.valor} type="text" onChange={aoDigitar} required={props.obrigatorio} placeholder={props.ph} name={props.label}></input>
        </div>
    )
}

export default CampoTexto