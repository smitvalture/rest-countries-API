import React, { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Loading from '../components/Loading';
import CountryCard from '../components/CountryCard';
import Header from '../components/Header';
import CountryInfo from './CountryInfo';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [page, setPage] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [toggle, setToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [apiData, setApiData] = useState({
    flag: '',
    name: '',
    nativeNames: '',
    population: '',
    region: '',
    subRegion: '',
    capital: '',
    topLevelDomain: '',
    currencies: '',
    languages: '',
    borders: '',
  });

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
    document.documentElement.classList.toggle('dark', prefersDarkMode);
  }, []);

  useEffect(() => {
    setLoading(true);
    const url = searchQuery ? `https://restcountries.com/v3.1/name/${searchQuery}` : `https://restcountries.com/v3.1/${filter ? "region" : "all"}/${filter}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching country data:', error);
      });
    console.log(apiData);
  }, [filter, searchQuery, apiData]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  const handleClick = (index) => {
    console.log(data[index]);
    const countryData = data[index];
    const nativeNames = Object.values(countryData?.name?.nativeName || {}).map(obj => obj.common);
    const curr = Object.values(countryData?.currencies || {}).map(obj => obj.name);
    const nativeNameCommon = nativeNames[1] || nativeNames[0] || '';
    const languageNames = Object.values(countryData?.languages || {}).join(', ');
    setApiData({
      flag: countryData?.flags?.svg,
      name: countryData?.name?.common,
      // nativeNames: nativeNames.join(', '),
      nativeNames: nativeNameCommon,
      population: countryData?.population,
      region: countryData?.region,
      subRegion: countryData?.subregion,
      capital: countryData.capital && countryData?.capital[0],
      topLevelDomain: countryData?.tld[0],
      currencies: curr[0],
      languages: languageNames,
      borders: countryData?.borders,
    });
    setPage(1)
  };




  return (
    <>
      <section className={`w-full min-h-screen font-Nunito flex flex-col items-center duration-300 font-Manrope ${isDarkMode ? 'bg-[#283038]' : 'bg-[#fafafa]'}`}>
        {loading && <Loading />}

        <Header isDarkMode={isDarkMode} onclick={toggleTheme} />

        {/* main body 1 */}
        {page === 0 &&
          <div className={`max-w-7xl w-full h-full px-5 py-10 flex gap-10 flex-col items-center`}>
            {/* search & filter */}
            <div className='w-full h-[140px] md:h-12 flex flex-col md:flex-row justify-between md:items-center'>
              <div className={`w-full md:w-[400px] h-[50px] md:h-full px-6 shadow-md rounded-md duration-300 flex items-center ${isDarkMode ? 'bg-[#313a44] text-gray-100' : 'bg-white text-gray-400'}`}>
                <ImSearch />
                <input
                  className='outline-none w-full bg-transparent px-4 text-gray-100'
                  placeholder='Search for a country...'
                  type='search'
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              <div className={`relative w-[240px] md:w-[180px] h-[50px] md:h-full`}>
                <div onClick={() => setToggle(!toggle)} className={`cursor-pointer h-full px-6 shadow-md text-sm rounded-md duration-300 flex items-center ${isDarkMode ? 'bg-[#313a44] text-gray-100' : 'bg-white text-gray-900'}`}>
                  <p>Filter by Region </p>
                  <RiArrowDropDownLine className={`absolute right-4 text-2xl duration-300 ${toggle && "rotate-180"}`} />
                </div>
                <div className={`absolute top-14 z-10 left-0 w-full border-gray-500 shadow-md duration-300 overflow-hidden rounded-md ${isDarkMode ? 'bg-[#313a44] text-gray-100' : 'bg-white text-gray-900'} ${toggle ? 'h-[200px] border' : 'h-0'}`}>
                  <ul className='space-y-1 p-5 font-medium'>
                    <li className='cursor-pointer hover:underline' onClick={() => { setFilter(""); setToggle(false) }}>All</li>
                    <li className='cursor-pointer hover:underline' onClick={() => { setFilter("africa"); setToggle(false) }}>Africa</li>
                    <li className='cursor-pointer hover:underline' onClick={() => { setFilter("america"); setToggle(false) }}>America</li>
                    <li className='cursor-pointer hover:underline' onClick={() => { setFilter("asia"); setToggle(false) }}>Asia</li>
                    <li className='cursor-pointer hover:underline' onClick={() => { setFilter("europe"); setToggle(false) }}>Europe</li>
                    <li className='cursor-pointer hover:underline' onClick={() => { setFilter("oceania"); setToggle(false) }}>Oceania</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* country card */}
            <div className={`w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 place-content-center place-items-center`}>
              {data.length > 0 ? (
                data.map((country, index) => (
                  <div key={index}>
                    <CountryCard
                      onclick={() => { handleClick(index) }}
                      isDarkMode={isDarkMode}
                      img={country?.flags?.svg}
                      countryName={country?.name.common}
                      population={country?.population}
                      region={country?.region}
                      capital={country?.capital}
                    />
                  </div>
                ))
              ) : (
                <p className='w-full py-32 md:col-span-2 lg:col-span-4 text-center font-semibold text-lg text-white'>No matching countries found.</p>
              )}
            </div>
          </div>
        }

        {/* main body 2 */}
        {page === 1 &&
          <CountryInfo
            isDarkMode={isDarkMode}
            onclick={() => {
              setPage(0);
              setApiData({
                flag: '',
                name: '',
                nativeNames: '',
                population: '',
                region: '',
                subRegion: '',
                capital: '',
                topLevelDomain: '',
                currencies: '',
                languages: '',
                borders: '',
              })
            }}
            img={apiData.flag}
            name={apiData.name}
            nativeNames={apiData.nativeNames}
            population={apiData.population}
            region={apiData.region}
            subRegion={apiData.subRegion}
            capital={apiData.capital}
            topLevelDomain={apiData.topLevelDomain}
            currencies={apiData.currencies}
            languages={apiData.languages}
            borders={apiData.borders}
          />}
      </section>
    </>
  );
};

export default Home;
