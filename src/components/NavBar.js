import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './imagenes/mario4.png';

const Navbar = () =>{
    return (
        <div className="nav">
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-8 navLeft">
                        <img alt='logo' src={logo} width="50" height="40"/>
                        <button type="button" class="btn btn-danger">NintendAR</button>
                        <button type="button" class="btn btn-light">Acción</button>
                        <button type="button" class="btn btn-light">Aventura</button>
                        <button type="button" class="btn btn-light">Deportes</button>
                        <button type="button" class="btn btn-info">Tiendas</button>
                    </div>
                    <div className="col-4 navRight">
                        <button type="button" class="btn btn-dark">Contacto</button>
                        <input className="barraBusq" type="search" placeholder="Buscar ..." aria-label="Search"/>
                        <button className="btn btn-outline-danger" type="submit">Buscar</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;