    import React, { useContext, useEffect, useState } from 'react'
    import Nav from './Nav'
    import { Link, useLocation } from 'react-router-dom'
    import { Productcontext } from '../Utils/Context'
    import Loading from './Loading'
    import axios from '../Utils/axios'

    const Home = () => {

        const [products] = useContext(Productcontext);
        const {search} = useLocation();
        const category = decodeURIComponent(search.split("=")[1]);
 

        const [filteredProducts, setfilteredProducts] = useState(null);

        // const getproductscategory = async () => {
        //     try
        //     {
        //         const {data} = await axios.get(`/products/category/${category}`)
        //         setfilteredProducts(data);
        //     }
        //     catch(e)
        //     {
        //         console.log(e);
        //     }
        // }

        useEffect(()=> {
            if(!filteredProducts || category == 'undefined')
                {
                    setfilteredProducts(products)
                }
            if(category != "undefined")
                {
                    // getproductscategory();
                    setfilteredProducts(products.filter(p => p.category == category))
                }
        },[category,products]);

        console.log(filteredProducts);


    return products ? (
        <>
            <Nav />
            <div className='w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
                {filteredProducts && filteredProducts.map((pro, idx)=> (
                    <Link to={`/details/${pro.id}`} key={idx} className='mr-3 mb-3 w-[18%] h-[30vh] card p-3 border shadow rounded flex justify-center items-center flex-col'>
                    <div className='hover:scale-105 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center' 
                        style={{backgroundImage: `url(${pro.image})`}}>
                    </div>
                    <h1 className='hover:text-blue-300'>${pro.title}</h1>
                </Link>
                ))}  
            </div>
        </>
                ) 
                    :
                (
                    <Loading />
                )
    }

    export default Home