import React from 'react'
import { BsMoon, BsMoonFill } from 'react-icons/bs';

const Header = ({ isDarkMode, onclick }) => {
    return (
        <header className={`w-full flex justify-center items-center duration-300 ${isDarkMode ? 'bg-[#313a44]' : 'bg-white'} shadow-md`}>
            <div className={`max-w-7xl w-full px-5 py-3 ${isDarkMode ? 'text-white' : 'text-black'} flex justify-between items-center`}>
                <h1 className='text-xl md:text-2xl font-semibold'>Where in the world?</h1>
                <button onClick={onclick} className='flex gap-2 justify-center items-center'>
                    {isDarkMode ? <BsMoonFill /> : <BsMoon />}
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </header>
    )
}

export default Header