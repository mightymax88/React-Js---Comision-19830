import { Link } from "react-router-dom";

const onAdd = () => {
    return (
        <div>
            <Link to={'/cart'}><button type="button">Finalizar compra</button></Link>
            <Link to={'/cart'}><button type="button">Modificar cantidad</button></Link>
        </div>
    )
}

export default onAdd;