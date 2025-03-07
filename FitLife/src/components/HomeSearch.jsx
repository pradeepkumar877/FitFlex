import React, { useEffect, useState } from 'react';
import { FaFireAlt, FaSearch } from "react-icons/fa";
import '../styles/HomeSearch.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HomeSearch = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('bodyPart');
  const [suggestions, setSuggestions] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [equipment, setEquipment] = useState([]);

  useEffect(() => { 
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const bodyPartsData = await axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', {
        headers: { 'X-RapidAPI-Key': 'YOUR_API_KEY' }
      });
      setBodyParts(bodyPartsData.data);

      const equipmentData = await axios.get('https://exercisedb.p.rapidapi.com/exercises/equipmentList', {
        headers: { 'X-RapidAPI-Key': 'YOUR_API_KEY' }
      });
      setEquipment(equipmentData.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    if (search) {
      navigate(`/${searchType}/${search}`);
      setSearch('');
      setSuggestions([]);
    }
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    if (searchType === 'bodyPart') {
      setSuggestions(bodyParts.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase())));
    } else {
      setSuggestions(equipment.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase())));
    }
  };

  return (
    <div className='home-search-component' id='search'>
        <h3>Search for Your Perfect Workout</h3>
        <div className="search-type-buttons">
          <h4>Search by: </h4>
          <span>
            <button className={searchType === 'bodyPart' ? 'active': ''} onClick={()=> setSearchType('bodyPart')} >Body Parts</button>
            <button className={searchType === 'equipment' ? 'active': ''} onClick={()=> setSearchType('equipment')} >Equipment</button>
          </span>
        </div>
        <div className='search-body'>
          <div className="search-box">
            <input 
              type="text" 
              placeholder={`Search by ${searchType}`} 
              value={search} 
              onChange={handleInputChange} 
            />
            <button onClick={handleSearch}><FaSearch /></button>
          </div>
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((item, index) => (
                <li key={index} onClick={() => { setSearch(item); setSuggestions([]); }}>{item}</li>
              ))}
            </ul>
          )}
        </div>
    </div>
  );
};

export default HomeSearch;
 