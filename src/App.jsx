import React, { useState } from 'react';
import './App.css';

import Header from "./components/Header"
import CardPerson from "./components/CardPerson"

//Data (if using real Api will fetch data and retrun object using useEffects)
import data from './Data/api.json'; 



export default function App() {


  // we can pass "users"(not data) in the filterData(function) and uncoment the API call

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   async function getUsers() {
  //     try {
  //       const response = await fetch('/api/users');
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getUsers();
  // }, []);


      //search state
      const [searchQuery, setSearchQuery] = useState('');

      //filter cards with the input
      function filterData(data, searchQuery) {
        const filteredData = data.filter(person => 
          Object.values(person).some((value) =>
          typeof value === 'string'
            ? value.toLowerCase().includes(searchQuery.toLowerCase())
            : false)
        );
        return filteredData;
      }
      
      const filteredDataShow = filterData(data, searchQuery);



  return (

    <div className="App">

        <Header value={searchQuery} setValue={setSearchQuery}/>
   
      <div className='container'>
      {filteredDataShow.map((person) => (
          <CardPerson
            key={person.phone}
            name={`${person.firstName} ${person.lastName}`}
            location={person.location}
            status={person.available}
            img={person.image}
            phone={person.phone}
            email={person.email}
          />
        ))}
      </div>

    </div>

  );
}


