import React from 'react';
import cartIcon from './imagenes/cart.png';

class CartWidget extends React.Component{
    constructor() {
        super();
        this.state = {
            quant: 3,
            color: "blue"
        };
    }
    changeColor = () => {
        this.setState({color: "blue"});
    }
    render() {
        return (
            <button type="button" onClick={this.changeColor}><img src={cartIcon} alt="carro" width="35" height="35"/></button>
        )
    }
}

export default CartWidget;