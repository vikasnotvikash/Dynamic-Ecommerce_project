import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Productcontext } from '../Utils/Context';

const Edit = () => {

        const [products,setproducts] = useContext(Productcontext);
        const {id} = useParams();
        const navigate = useNavigate();
        const [product, setProduct] = useState({
            title:"",
            image:"",
            category:"",
            price:"",
            description:""
        })

        const ChangeHandler = (e) => {
            // console.log(e.target.value, e.target.name)
            setProduct({...product,[e.target.name]:e.target.value })
        }


        // const [title, setTitle] = useState("");
        // const [image, setImage] = useState("");
        // const [category, setCategory] = useState("");
        // const [price, setPrice] = useState("");
        // const [descripton, setDescription] = useState("");
    
        useEffect(()=> {
            setProduct(products.filter((p)=> p.id == id)[0]);
        },[id]);

        // console.log(product);



        const Addproducthandler = (e) => {
            e.preventDefault();
            // toast.success("New product added successfully");
    
        if( product.title.trim().length < 5 ||
            product.image.trim().length  < 5 ||
            product.category.trim().length  < 5 ||
            product.price.trim().length  < 1 ||
            product.description.trim().length  < 5)
            {
                alert('All fields are required and title should be at least 5 characters long');
                return;
            }
    

            // const product = {
            //     id: nanoid(),
            //     title,
            //     image,
            //     category,
            //     price,
            //     description,
            // }

            const pi = products.findIndex((p) => p.id == id);
            const copyData = [...products];
            copyData[pi] = {...products[id], ...product}
            setproducts(copyData);

            // setproducts([...products, product]);
            localStorage.setItem("products", JSON.stringify(copyData));
            navigate(-1);

        }

        console.log(products);
    return (
        <form onSubmit={Addproducthandler} className='p-[5%] w-screen h-screen flex-col flex items-center'>
            <h1 className='w-1/2 mb-5 text-3xl'>Edit product</h1>
            <input
                type="url"
                placeholder='image link'
                className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
                name='image'
                onChange={ChangeHandler}
                value={product && product.image}
            />
            <input
                type="text"
                placeholder='title'
                className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
                name='title'
                onChange={ChangeHandler}
                value={product && product.title}
            />
            <div className='w-1/2 flex justify-between'>
                <input
                    type="text"
                    placeholder='category'
                    className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
                    name='category'
                    onChange={ChangeHandler}
                    value={product && product.category}
                />
                <input
                    type="number"
                    placeholder='price'
                    className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
                    name='price'
                    onChange={ChangeHandler}
                    value={product && product.price}
                />
            </div>
            <textarea
                name='description'
                onChange={ChangeHandler}
                placeholder='enter product description here...'
                value={product && product.description}
                rows={10}
                className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'>
            </textarea>

            <div className='w-1/2'>
                <button className='py-2 px-5 border rounded-md border-blue-400 text-blue-600'>
                    Edit product
                </button>
            </div>
        </form>
    )
}

export default Edit