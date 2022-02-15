import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './imagenes/mario4.png';
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <div className="nav container-fluid">
            <div className="container-fluid">
                <div className='row'>
                    <div className="col navLeft">
                        <img alt='logo' src={logo} width="50" height="40"/>
                        <Link to={'/'}><button type="button" class="btn btn-danger">NintendAR</button></Link>
                        <Link to={'/category/pokemon'}><button type="button" class="btn btn-light">Pokemón</button></Link>
                        <Link to={'/category/mario'}><button type="button" class="btn btn-light">Mario</button></Link>
                        <Link to={'/category/sonic'}><button type="button" class="btn btn-light">Sonic</button></Link>
                    </div>
                    <div className="col navRight">
                        <button type="button" class="btn btn-dark">Contacto</button>
                        <input className="barraBusq" type="search" placeholder="Buscar ..." aria-label="Search"/>
                        <button className="btn btn-outline-danger" type="submit">Buscar</button>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;