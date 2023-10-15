function Header() {
    return (
        <header className="header">
        <nav>
            <ul>
                <li>
                  <li>
                     <a href="/">StockSE</a>
                  </li>
                </li>
            </ul>
        </nav>
        
        <input type="search" placeholder="Search..." className="search-bar" />
        <nav>
          <ul>
            <li>
              <a href="/AAPL">AÇÕES</a>
            </li>
            <li>
              <a href="/search/fiis">FIIS</a>
            </li>
            <li>
              <a href="/search/bdrs">BDRS</a>
            </li>
            <li>
              <a href="/search/fundos">FUNDOS</a>
            </li>
          </ul>
        </nav>
        <button>LOGIN</button>
      </header>
    );
}

export default Header;