const Juego = (props) => {
    return(
        <div className="juego-container">
            <div className="juego-image">
                <img src={props.thumbnail} alt={props.title} width={"100px"}/>
            </div>
            <div className="juego-info">
                <h3>{props.title}</h3>
                <h4>Precio: ${props.price}</h4>
                <p>Categoría: {props.category}</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Juego