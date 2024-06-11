import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js'
import Formulario from './componentes/Formulario/index.js';
import Squad from './componentes/Squad/index.js';
import Rodape from './componentes/Rodape/index.js';

function App() {

  const squads = [
    {
      nome:'Na Minha Maquina Funciona',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome:'Centralizadores de div',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome:'Socorrro Stack OverFlow',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome:'Fiscais de ;',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome:'Perdidos no Debug',
      corPrimaria: '#D86EDF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome:'Deploy na Sexta-feira',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome:'Delete Sem Where',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
]

const [participantes, setParticipantes] = useState([])

const novoParticipanteAdicionado = (participante) => {
  setParticipantes([...participantes,participante])
}

  return (
    <div className="App">
      <Banner/>
      <Formulario squads={squads.map(squad => squad.nome)} participanteAdicionado={participante => novoParticipanteAdicionado(participante)}/>
      
      {squads.map(squad => <Squad key={squad.nome} nome={squad.nome} corPrimaria={squad.corPrimaria} corSecundaria={squad.corSecundaria} participantes={participantes.filter(participante => participante.squad === squad.nome)}/> )}
      
      <Rodape/>
    </div>
  );
}

export default App;
