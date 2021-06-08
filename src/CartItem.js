import React from 'react';

class CartItem extends React.Component {

    // increaseQuantity = () => {
    //     // console.log(this.state);
    //     this.setState((prevState)=>{
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     });
    // }
    // decreaseQuantity = () => {
    //     const {qty} = this.state;
    //     if(qty===0){
    //         return ;
    //     }
    //     this.setState((prevState)=>{
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     });
    // }
    render() {
        const { price, title, qty } = this.props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity, OnDeleteProduct } = this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt='' style={styles.image}/>
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
                            onClick = {()=>onIncreaseQuantity(product)}
                        />
                        <img 
                            className="action-icons" 
                            alt="decrease" 
                            src="https://image.flaticon.com/icons/png/128/992/992683.png" 
                            onClick = {()=>onDecreaseQuantity(product)}
                        />
                        <img 
                            className="action-icons" 
                            alt="delete" 
                            src="https://image.flaticon.com/icons/png/128/484/484662.png" 
                            onClick = {()=> OnDeleteProduct(product.id)}
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