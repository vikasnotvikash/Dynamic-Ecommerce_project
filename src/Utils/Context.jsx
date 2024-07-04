// import axios from '../Utils/axios';
import React, { createContext, useEffect, useState } from 'react'

export const Productcontext = createContext();

const Context = (props) => {
    const [products, setproducts] = useState(JSON.parse(localStorage.getItem("products")) || null);  

    // const getProducts = async () => {
    //     try
    //     {
    //         const {data} = await axios("/products");
    //         setproducts(data);
    //     }
    //     catch(e)
    //     {
    //         console.log(e);
    //     }
    // };

    // useEffect(() => {
    //     getProducts();
    // },[])

    console.log(products);

  return (
    <Productcontext.Provider value={[products, setproducts]}>
        {props.children}
    </Productcontext.Provider>
  )
}

export default Context;