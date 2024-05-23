import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';
import Slider from './components/slider/Slider';
import ProductList from './components/productlist/ProductList';
import axios from 'axios'
import { Route,  BrowserRouter as Router,Routes } from 'react-router-dom';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching products: ', error);
      });
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
      if(existingItem){
        const updatedCart = cart.map(item => item.id === product.id ? { ...item , quantity: item.quantity + 1}: item)
        setCart(updatedCart)
      } else {
              const newItem = { ...product, quantity: 1 };
              setCart([...cart, newItem]);
            }
    console.log('Added to cart:', product);
  };
  
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };
  
  const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };
      const incrementQuantity = (productId) =>{
        const updatedCart = cart.map(item =>{
          if(item.id === productId){
            return{...item , quantity: item.quantity +1 }
          }
          return item
        })
        setCart(updatedCart)
      }
      const decrementQuantity = (productId) => {
        const updatedCart = cart.map(item => {
          if (item.id === productId && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        setCart(updatedCart);
      };

      const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

      const filteredProducts = Array.isArray(products) ? products.filter(product =>
        product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
            
          ) : [];

  return (
    <Router>
       <Navbar cartItemCount={cartItemCount} searchTerm={searchTerm} handleSearch={handleSearch} />
       
      <div>
       
        <Routes>
        <Route path="/" element={<>
          <Slider />
          <ProductList products={products} addToCart={addToCart} />
        </>} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} incrementQuantity = {incrementQuantity} decrementQuantity={decrementQuantity} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
