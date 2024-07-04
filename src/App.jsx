import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Components/Home'
import Details from './Components/Details'
import Create from '../src/Components/Create';
import Edit from './Components/Edit';

const App = () => {

  const {search, pathname} = useLocation();
  console.log(search.length, pathname);


  return (
    //In summary, this line of code conditionally renders a “Home” link (styled in red) 
    //if the user is not on the root path or if there are query parameters in the URL.
    
    <div className='h-screen w-screen flex'>
      {(pathname != '/' || search.length > 0) && (<Link to="/" className='text-red-500 absolute left-[17%] top-[4%]'>
        Home
      </Link>
    )}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Create" element={<Create />}/>
        <Route path="/details/:id" element={<Details />}/>
        <Route path="/edit/:id" element={<Edit />}/>
      </Routes>
    </div>
  )
}

export default App