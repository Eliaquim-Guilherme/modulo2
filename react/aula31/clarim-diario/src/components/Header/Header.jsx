import './Header.css'

function Header() {
    const hoje = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    })

    return (
        <header className='cabecalho'>
            <div className="cabecalho__faixa">
                <span>Edição Itaguaí </span>
                <span>{hoje} </span>
                <span>R$ 1,50</span>
            </div>

            <h1 className="cabecalho__titulo">Clarim Diário</h1>
            <p className="cabecalho__lema">Algo como base pra escrever que não faço ideia</p>
            <nav className="cabecalho__menu">
                <a href="">Cidade </a>
                <a href="">Carros </a>
                <a href="">Ciência </a>
                <a href="">Esporte </a>
                <a href="">Classificados</a>
            </nav>
        </header>
    )
}

export default Header