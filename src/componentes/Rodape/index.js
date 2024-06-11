import './Rodape.css'

const Rodape = ()=>{
    return(
        <div className='rodapeBase'>
            <div className='redes'>
                <img src='/imagens/fb.png' alt='facebook'/>
                <img src='/imagens/tw.png' alt='twitter'/>
                <img src='/imagens/ig.png' alt='instagram'/>
            </div>

            <img className='logo' src='/imagens/logo.png' alt='logo organo'/>

            <p>Desenvolvido por Karen Lima- Alura </p>
        </div>
    )
}

export default Rodape