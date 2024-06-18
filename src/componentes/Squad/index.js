import Card from '../Card'
import './Squad.css'
import hexToRgba from 'hex-to-rgba'

const Squad = (props)=>{

    const css = { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor,'0.5')}

    return(
        props.participantes.length > 0 && <section className="squad" style={css}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.cor} type='color' className='input-cor'/>
            <h3 style={{borderColor:props.cor}}>{props.nome}</h3>

            <div className='participantes'>
                
                {props.participantes.map((participante,indice) => {

                    return <Card 
                    key={indice} 
                    id={participante.id}
                    corDeFundo={props.cor}  
                    nome={participante.nome} funcao={participante.funcao} avatar={participante.avatar} favorito={participante.favorito} 
                    aoDeletar={props.aoDeletar}
                    aoFavoritar={props.aoFavoritar}
                    />
                })}
            </div>
        </section>
    )
}

export default Squad