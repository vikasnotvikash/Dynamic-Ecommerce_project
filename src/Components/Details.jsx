import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../Utils/axios';
import Loading from './Loading';
import { Productcontext } from '../Utils/Context';

const Details = () => {

    const navigate = useNavigate();
    const [products,setproducts] = useContext(Productcontext);
    const [product, setproduct] = useState(null);
    const {id} = useParams();

    // const getSingleProduct = async () => {
    //     try
    //     {
    //         const {data} = await axios.get(`/products/${id}`)
    //         setProduct(data);
    //     }
    //     catch(error){
    //         console.error(error);
    //     }
    // }


    useEffect(()=> {
        if(!product)
            {
                setproduct(products.filter((p) => p.id == id)[0]);
            }
        // getSingleProduct();
    },[]);

    const productdeleteHandler = (id) => {
        const filteredProducts = products.filter((p) => p.id !== id); 
        setproducts(filteredProducts);
        localStorage.setItem('products', JSON.stringify(filteredProducts));
        navigate("/");
    }

    return product ? ( 
        <div className='w-[70%] h-full m-auto p-[10%] flex justify-between items-center'>
            <img className='object-contain w-[40%] h-[80%]' src={`${product.image}`}
            />
            <div className='content w-[45%]'>
                <h1 className='text-4xl'>{product.title}</h1>
                <h3 className='text-zinc-500 my-5'>{product.category}</h3>
                <h2 className='text-red-400 mb-3'>{product.price}</h2>
                <p className='mb-5'>
                  {product.description}
                </p>
                <Link to={`/edit/${product.id}`} className='py-2 px-5 border rounded-md border-blue-200 text-blue-500 mr-2'>Edit</Link>
                <button onClick={() => productdeleteHandler(product.id)} className='py-2 px-5 border rounded-md border-red-200 text-red-500'>Delete</button>
            </div>
        </div>
    )
    :
    (
        <Loading />
    )
}

export default Details