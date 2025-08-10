import "./Colaborador.css";

const Colaborador = ({nome, imagem, cargo, corDeFundo, aoRemover}) =>{

    // Aqui ficará o código em JS pra apagar os colaboradores

    return(
        <div className="colaborador">
            <button onClick={() => aoRemover(nome)}> Remover </button>
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape-colab">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
        
    )
}

export default Colaborador