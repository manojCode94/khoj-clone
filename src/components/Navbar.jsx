import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (darkTheme, setDarkTheme)=>{

    return(
        <div className="">
            <div className='flex justify-between items-center space-x-5 w-screen'>
                <Link to="/" >
                    <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
                        Khoj
                    </p>
                </Link>
                <button type='button' onClick={()=> setDarkTheme(!darkTheme)}>
                    {darkTheme ? 'Light' : 'Dark'}
                </button>
            </div>
        </div>
    )
}

export default Navbar;