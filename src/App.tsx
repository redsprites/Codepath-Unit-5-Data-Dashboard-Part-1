import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Statistics from './components/Statistics';
import BrandAccordion from './components/BrandAccordion';
import { Brand } from './Interfaces';


function App() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const token = import.meta.env.VITE_APP_API_KEY

  const axiosInstance = axios.create({
    baseURL: 'https://www.carboninterface.com/api/v1',
    headers :{
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  });
  
   const fetchBrands = async () => {
    try{
    const response = await axiosInstance.get('/vehicle_makes')
    setBrands(response.data);
  }
  catch (error){
    console.log(error)
  }
}

  useEffect(() => {
    fetchBrands()
  },[])
  const filteredBrands = brands.filter(brand => brand.data.attributes.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1>Carbon Emission Calculator for Cars</h1>
      {brands.length > 0 && <Statistics brands={brands} />}
      <div  className="search-filter-container">
      <input
        type="text"
        placeholder="Search brands..."
        className="search-input"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
        
     
         {filteredBrands.map(brand => (
        <BrandAccordion key={brand.data.id} brand={brand} axiosInstance={axiosInstance} />
      ))}
    </div>
  )
}

export default App
