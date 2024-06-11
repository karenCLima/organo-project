import {useState} from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [avatar, setAvatar] = useState('')
    const [squad, setSquad] = useState('')

    const aoSalvar = (evento)=>{
        evento.preventDefault()
        props.participanteAdicionado({
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
                <h2>Preencha os dados para criar o card da Squad</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o seu nome" valor={nome} 
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto obrigatorio={true}  label="Função" placeholder="Digite a sua função na squad" valor={funcao} aoAlterado={valor => setFuncao(valor)}/>
                <CampoTexto label="Avatar" placeholder="Digite o endereço da imagem do seu avatar" valor={avatar} aoAlterado={valor => setAvatar(valor)}/>
                <ListaSuspensa obrigatorio={true}  label ="Squad" itens={props.squads} valor ={squad} aoAlterado={valor=> setSquad(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario