import React, { useContext } from 'react'
import { Productcontext } from '../Utils/Context'
import { Link } from 'react-router-dom';

const Nav = () => {

  const [product] = useContext(Productcontext);

  let distinct_category = product && product.reduce((acc, cv)=> [...acc,cv.category],[]);

  distinct_category = [...new Set(distinct_category)];
  // console.log(distinct_category);


  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()},0.4)`
  };


  return (
    <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
    <a className='py-2 px-5 border rounded-md border-blue-200 text-blue-500' href="/create">Add New Product</a>
    <hr className='my-3 w-[80%]'/>
    <h1 className='text-1xl mb-3 w-[80%]'>Category filter</h1>
    <div className='w-[80%]'>

      {
      distinct_category.map((c,i) => (
        <Link key={i} to={`/?category=${c}`} 
          className='mb-3 flex items-center'>
            <span style={{backgroundColor : color()}} className='rounded-full mr-2  w-[15px] h-[15px]'>
            </span>
            {c}
        </Link>
        ))
      }
    </div>
  </nav>
  )
}

export default Nav