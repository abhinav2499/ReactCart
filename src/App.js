import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
    constructor(){
      super();
      this.state = {
          products:[
              {
                  title : 'Mobile Phone',
                  price : '9999',
                  qty : 1,
                  img : '',
                  id:1
              },
              {
                  title : 'Watch',
                  price : '499',
                  qty : 10,
                  img : '',
                  id:2
              },
              {
                  title : 'Laptop',
                  price : '74500',
                  qty : 3,
                  img : '',
                  id:3
              },
          ]
      }
  }
  handleIncreaseQuantity = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);
      products[index].qty+=1;

      this.setState({
          products
      })
  }
  handleDecreaseQuantity = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0){
          return ;
      }
      products[index].qty-=1;

      this.setState({
          products
      })
  }
  handleDeleteProduct = (id) => {
      const { products } = this.state;

      const items = products.filter((item)=>item.id!==id);

      this.setState({
          products:items
      })
  }
  getCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product)=>{
      count+= product.qty;
    })

    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.forEach((product)=>{
      cartTotal+= product.qty * product.price;
    })

    return cartTotal;
  }
  render(){
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar
          count = {this.getCount()}
        />
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          OnDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fonsSize:25, padding:10,fontWeight:'bold' }}>TOTAL: Rs {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
