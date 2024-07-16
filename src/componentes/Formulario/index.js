import {useState} from 'react'
import Botao from '../Botao'
import Campo from '../Campo/Campo.js'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import {v4 as uuidv4} from 'uuid'
import AvatarSelector from '../AvatarSelector/index.js'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [avatar, setAvatar] = useState('')
    const [squad, setSquad] = useState('')
    const [nomeSquad, setNomeSquad] = useState('')
    const [corSquad, setCorSquad] = useState('')

    const aoSalvar = (evento)=>{
        evento.preventDefault()
        props.participanteAdicionado({
            id: uuidv4(),
            favorito: false,
            nome,
            funcao,
            avatar, 
            squad
        })
        setNome('')
        setFuncao('')
        setAvatar('')
        setSquad('')
    }

    return(
        <section className = "formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card na Squad</h2>
                <Campo 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o seu nome" valor={nome} 
                aoAlterado={valor => setNome(valor)}
                />
                <Campo obrigatorio={true}  label="Função" placeholder="Digite a sua função na squad" valor={funcao} aoAlterado={valor => setFuncao(valor)}/>
                <AvatarSelector valor={avatar} aoAlterado={valor => setAvatar(valor)}/>
                <ListaSuspensa obrigatorio={true}  label ="Squad" itens={props.squads} valor ={squad} aoAlterado={valor=> setSquad(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={(evento)=>{
                evento.preventDefault()
                props.cadastrarSquad({nome: nomeSquad, cor: corSquad})
            }}>
                <h2>Preencha os dados para criar uma nova Squad</h2>
                <Campo 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o nome da Squad" valor={nomeSquad} 
                aoAlterado={valor => setNomeSquad(valor)}
                />
                <Campo obrigatorio={true} type= 'color' label="Cor" placeholder="Digite a cor da Squad" valor={corSquad} aoAlterado={valor => setCorSquad(valor)}/>
                <Botao>Criar Squad</Botao>
            </form>
        </section>
    )
}

export default Formulario