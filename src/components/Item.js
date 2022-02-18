import { Link } from "react-router-dom";

const Item = (props) => {
    let link="/item/";
    let camino=link.concat(props.id)
    return(
        <div className="juego-container col-3">
            <div className="juego-image">
                <img src={props.thumbnail} alt={props.title} width={"100px"}/>
            </div>
            <div className="juego-info">
                <Link to={camino}><h4>{props.title}</h4></Link>
                <h5>Precio: ${props.price}</h5>
                <p>Categoría: {props.category}</p>
                <p>{props.description}</p>
                <p>Stock disponible: {parseInt(props.stock)}</p>
            </div>
        </div>
    );
}

export default Item