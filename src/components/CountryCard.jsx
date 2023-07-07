import React from 'react'

const CountryCard = ({ onclick, isDarkMode, img, countryName, population, region, capital }) => {
    return (
        <div onClick={onclick} className={`cursor-pointer hover:scale-105 duration-300 w-[260px] h-[330px] rounded-md shadow-md overflow-hidden flex flex-col items-center ${isDarkMode ? "bg-[#313a44] text-gray-100" : "bg-white text-gray-900"}`}>
            <div className='w-full max-h-[140px] h-full shadow-sm overflow-hidden flex justify-center items-center'>
                <img className='min-h-full min-w-full h-full w-full object-cover' src={img} alt="flag" />
            </div>
            <div className={`w-full h-full px-5 py-6 flex gap-0.5 flex-col`}>
                <h1 className='text-xl font-semibold mb-2'>{countryName}</h1>
                <p className='text-sm font-light'><span className='font-semibold'>Population: </span> {population}</p>
                <p className='text-sm font-light'><span className='font-semibold'>Region: </span> {region}</p>
                <p className='text-sm font-light'><span className='font-semibold'>Capital: </span> {capital}</p>
            </div>
        </div>
    )
}

export default CountryCard