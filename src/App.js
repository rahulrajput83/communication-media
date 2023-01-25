import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';

function App() {
  const [data, setData] = useState([])
  const [cart, setCart] = useState([]);

  /* Fetch API on component mounted */
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((res) => {
        setData(res.products)
      })
      .catch(() => {
        console.log('err')
      })
  }, [])

  /* triggers when add to cart btn clicked */
  const handleCart = (item) => {
    const index = cart.findIndex(e => e.title === item.title);
    if (index === -1) {
      const dataCart = [...cart];
      dataCart.push(item)
      setCart(dataCart)
    }
  }

  /* Triggers when like btn clicked */
  const handleLike = (item) => {
    let title = item.title;
    console.log(title)
    const index = data.findIndex((e) => e.title === title);
    let likeData = [...data]
    if (likeData[index].like) {
      likeData[index].like = false;
    }
    else {
      likeData[index].like = true;
    }
    setData(likeData)
  }

  return (
    <BrowserRouter>
      {/* Routes for the application */}
      <Navbar cart={cart} />
      <Routes>
        <Route path='/' element={<Home data={data} handleLike={handleLike} handleCart={handleCart} cart={cart} />} />
        <Route path='/:id' element={<Product handleLike={handleLike} handleCart={handleCart} data={data} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
