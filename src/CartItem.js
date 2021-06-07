import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            title : 'Mobile Phone',
            price : '9999',
            qty : 1,
            img : ''
        }
    }
    increaseQuantity = () => {
        console.log(this.state);
    }
    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            className="action-icons" 
                            alt="increase" 
                            src="https://image.flaticon.com/icons/png/128/992/992651.png" 
                            onClick = {this.increaseQuantity}
                        />
                        <img 
                            className="action-icons" 
                            alt="decrease" 
                            src="https://image.flaticon.com/icons/png/128/992/992683.png" 
                        />
                        <img 
                            className="action-icons" 
                            alt="delete" 
                            src="https://image.flaticon.com/icons/png/128/484/484662.png" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height: 120,
        width: 120,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;