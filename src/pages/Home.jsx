import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

const Home = () => {
  const [data, setData] = useState([]);
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
  const [button, setButton] = useState(0);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching country data:', error);
      });
  }, [apiData]);

  function handleClick(index) {
    // console.log(data[index]);
    const countryData = data[index];
    const nativeNames = Object.values(countryData?.name?.nativeName || {}).map(obj => obj.common);
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
      capital: countryData?.capital[0],
      topLevelDomain: countryData?.tld[0],
      currencies: Object.values(countryData?.currencies).join(', '),
      languages: languageNames,
      borders: countryData?.borders?.join(', '),
    });
  }

  return (
    <>
      <section className='w-screen h-screen flex justify-center items-center font-Manrope bg-[#262b35]'>
        {loading && <Loading />}
        <div className='max-w-6xl h-full'></div>
        <button onClick={() => handleClick(100)}>Fetch Data</button>
      </section>
    </>
  );
};

export default Home;
