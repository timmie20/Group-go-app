import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-center w-full m-[55px]'>
        <Link to="/create" className="rounded-[10px] bg-orange-clr px-[18px] py-2 text-white">Create event</Link>
    </div>
  )
}

export default Home