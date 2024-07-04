import React, { useContext, useState } from 'react'
import { Productcontext } from '../Utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Create = () => {

    const navigate = useNavigate();
    const [products,setproducts] = useContext(Productcontext);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [descripton, setDescription] = useState("");

    const Addproducthandler = (e) => {
        // toast.success("New product added successfully");

    if(title.trim().length < 5 || image.trim().length  < 5 || category.trim().length  < 5 || price.trim().length  < 1 || descripton.trim().length  < 5)
        {
            alert('All fields are required and title should be at least 5 characters long');
            return;
        }

        e.preventDefault();
        const product = {
            id: nanoid(),
            title,
            image,
            category,
            price,
            descripton,
        }
        setproducts([...products, product]);
        localStorage.setItem("products", JSON.stringify([...products, product]));
        toast.success("product added successfully")
        navigate("/");

    }

    return (
        <form onSubmit={Addproducthandler} className='p-[5%] w-screen h-screen flex-col flex items-center'>
            <h1 className='w-1/2 mb-5 text-3xl'>Add new product</h1>
            <input
                type="url"
                placeholder='image link'
                className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
                onChange={(e) => setImage(e.target.value)}
                value={image}
            />
            <input
                type="text"
                placeholder='title'
                className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <div className='w-1/2 flex justify-between'>
                <input
                    type="text"
                    placeholder='category'
                    className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                />
                <input
                    type="number"
                    placeholder='price'
                    className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
            </div>
            <textarea 
                onChange={(e) => setDescription(e.target.value)}
                placeholder='enter product description here...'
                value={descripton} 
                rows={10}
                className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'>
            </textarea>

            <div className='w-1/2'>
                <button className='py-2 px-5 border rounded-md border-blue-400 text-blue-600'>
                    ADD
                </button>
            </div>
        </form>
    )
}

export default Create;