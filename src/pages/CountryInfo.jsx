import React from 'react'
import { BsArrowLeft } from "react-icons/bs";

const CountryInfo = ({ isDarkMode, onclick, img, name, nativeNames, population, region, subRegion, capital, topLevelDomain, currencies, languages, borders }) => {

    return (
        <div className={`max-w-7xl w-full px-5 py-10 flex gap-10 flex-col items-center`}>
            {/* search & filter */}
            <div className='w-full md:h-12 flex flex-col md:flex-row md:items-center'>
                <button onClick={onclick} type='button' className={` w-fit h-fit py-2 px-6 shadow-md rounded-md duration-300 flex gap-2 text-sm items-center ${isDarkMode ? 'bg-[#313a44] text-gray-100' : 'bg-white text-gray-900'}`}>
                    <BsArrowLeft />
                    Back
                </button>
            </div>

            {/* country card */}
            <div className={`w-full flex flex-col justify-center items-center lg:grid grid-rows-2 grid-cols-none lg:grid-rows-none lg:grid-cols-2 gap-16 place-content-center place-items-center ${isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                <div className='w-full h-fit'>
                    <img src={img} alt="Flag Image" />
                </div>

                <div>
                    <h1 className='text-3xl font-semibold mb-5'>{name}</h1>
                    <div className='w-full h-fit grid gap-10 grid-rows-2 grid-cols-none lg:grid-rows-none lg:grid-cols-2'>
                        <div>
                            <p className='mb-2 font-extralight'><span className='font-semibold'>Native Name: </span>{nativeNames}</p>
                            <p className='mb-2 font-extralight'><span className='font-semibold'>Population: </span>{population}</p>
                            <p className='mb-2 font-extralight'><span className='font-semibold'>Region: </span>{region}</p>
                            <p className='mb-2 font-extralight'><span className='font-semibold'>Sub Region: </span>{subRegion}</p>
                            <p className='mb-2 font-extralight'><span className='font-semibold'>Capital: </span>{capital}</p>
                        </div>
                        <div>
                            <p className='mb-2 font-extralight'><span className='font-semibold'>Top Level Domain: </span>{topLevelDomain}</p>
                            <p className='mb-2 font-extralight'><span className='font-semibold'>Currencies: </span>{currencies}</p>
                            <p className='mb-2 font-extralight'><span className='font-semibold'>Languages: </span>{languages}</p>
                        </div>
                    </div>
                    <div className='w-full h-fit lg:mt-5 flex flex-wrap'>
                        <p className='font-semibold'>Border Countries: </p>
                        {borders?.map((item, index) => (
                            <button
                                key={index}
                                type='button'
                                className={`ml-2 py-1 px-3 shadow-md rounded-md duration-300 flex gap-2 text-sm items-center ${isDarkMode ? 'bg-[#313a44] text-gray-100' : 'bg-white text-gray-900'}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CountryInfo