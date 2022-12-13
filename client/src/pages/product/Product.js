import React, { useState} from "react";
import Amazon from "../../components/Gproduct/Product/Gproduct";
import Navbar from '../../components/Navbar'
import Navbar2 from '../../components/Gproduct/Pnavbar/Navbar2'
import Cart from "../../components/Gproduct/Cart/Cart";
// import Footer from "../../components/Footer";

const Product = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <>
    <Navbar />
    <Navbar2 />
    <React.Fragment>
      <Navbar2 setShow={setShow} size={cart.length} />
     
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
    {/* <Footer/> */}
    
    </>
  );
};

export default Product;
