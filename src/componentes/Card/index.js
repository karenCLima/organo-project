import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Card.css'

const Card = ({id,nome, funcao, avatar, corDeFundo, aoDeletar, favorito, aoFavoritar}) =>{

    function favoritar(){
        aoFavoritar(id);
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }

    return(
       <div className="card">
        <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(id)}/>
        <div className="cabecalho" style={{backgroundColor:corDeFundo}}>
            <img src={avatar} alt={nome}/>

        </div>
        <div className="rodape">
            <h4>{nome}</h4>
            <h5>{funcao}</h5>
            <div className='favoritar'>
                {favorito 
                ? <AiFillHeart {...propsfavorito} color='#ff0000'/>
                : <AiOutlineHeart {...propsfavorito}/>}
            </div>
        </div>
       </div> 
    )
}

export default Card