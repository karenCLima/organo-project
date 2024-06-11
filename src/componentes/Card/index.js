import './Card.css'

const Card = ({nome, funcao, avatar, corDeFundo}) =>{
    return(
       <div className="card">
        <div className="cabecalho" style={{backgroundColor:corDeFundo}}>
            <img src={avatar} alt={nome}/>

        </div>
        <div className="rodape">
            <h4>{nome}</h4>
            <h5>{funcao}</h5>
        </div>
       </div> 
    )
}

export default Card