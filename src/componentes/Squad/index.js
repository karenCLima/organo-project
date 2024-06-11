import Card from '../Card'
import './Squad.css'

const Squad = (props)=>{

    const css = {backgroundColor: props.corSecundaria}

    return(
        props.participantes.length > 0 && <section className="squad" style={css}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>

            <div className='participantes'>
                {props.participantes.map(participante => <Card key={participante.nome} corDeFundo={props.corPrimaria}  nome={participante.nome} funcao={participante.funcao} avatar={participante.avatar} />)}
            </div>
        </section>
    )
}

export default Squad