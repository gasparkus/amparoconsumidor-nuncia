import './css/bootstrap.css';
import './css/estilo.css';


function NavBar() {
  return (
    

<nav className="navbar navbar-expand-md navbar-dark headerColor">
            <a href="index.html" className="navbar-brand" id="logo">AMPARO CONSUMIDOR</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="equipo.html">Equipo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="servicios.html">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="novedades.html">Novedades</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contacto.html">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
  
  );
}

export default NavBar;