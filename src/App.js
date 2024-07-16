import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js'
import Formulario from './componentes/Formulario/index.js';
import Squad from './componentes/Squad/index.js';
import Rodape from './componentes/Rodape/index.js';
import {v4 as uuidv4} from 'uuid'

function App() {

  const [squads, setSquads] = useState([
    {
      id: uuidv4(),
      nome:'Na Minha Maquina Funciona',      
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome:'Centralizadores de div',      
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome:'Socorrro Stack OverFlow',      
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome:'Fiscais de ;',      
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome:'Perdidos no Debug',     
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome:'Deploy na Sexta-feira',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome:'Delete Sem Where',
      cor: '#FF8A29'
    }
])

const [participantes, setParticipantes] = useState([])

const novoParticipanteAdicionado = (participante) => {
  setParticipantes([...participantes,participante])
}

function deletarParticipante(id){
  setParticipantes(participantes.filter(participante=> participante.id !== id));
}

function mudarCorSquad(cor,id){
  setSquads(squads.map(squad=>{
    if(squad.id === id){
      squad.cor = cor;
    }
    return squad;
  }))
}

function cadastrarSquad(novaSquad){
  setSquads([...squads, {...novaSquad, id: uuidv4()}])
}

function resolverFavorito(id){
  setParticipantes(participantes.map(participante=>{
    if(participante.id === id) participante.favorito = !participante.favorito;
    return participante
  }))
}

  return (
    <div className="App">
      <Banner/>
      <Formulario squads={squads.map(squad => squad.nome)} participanteAdicionado={participante => novoParticipanteAdicionado(participante)} cadastrarSquad={cadastrarSquad}/>
      
      <section className="squads">
        {squads.map(squad => 
          <Squad key={squad.id} id={squad.id}  mudarCor={mudarCorSquad} nome={squad.nome} cor={squad.cor} participantes={participantes.filter(participante => participante.squad === squad.nome)} aoDeletar={deletarParticipante} aoFavoritar={resolverFavorito}/> )}
      </section>
      <Rodape/>
    </div>
  );
}

export default App;
