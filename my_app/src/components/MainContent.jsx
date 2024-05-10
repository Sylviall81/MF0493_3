import {React, useState, useEffect} from 'react'
import { fetchData } from '../services/jsonPlaceholderService.js'
import ItemCard from './ItemCard.jsx';
import { Grid} from "@chakra-ui/react";

function MainContent () {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData();
        console.log('data results:', data.results);
        setApiData(data.results);
      
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAsync();
  }, []);

  return (


    <Grid templateColumns='repeat(4, 1fr)' gap={8}>
    

      {apiData.map((item) => (
        <ItemCard key={item} 
          username = {item.login.username} 
          gender = {item.gender} 
          age = {item.dob.age} 
          country={item.location.city} 
          profile_img={item.picture.large} 
          cell = {item.cell}
          email = {item.email}/>

      ))}
      </Grid>
  )
}

export default MainContent