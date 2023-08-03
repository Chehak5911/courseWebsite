import './App.css';
import filterData from './data';
import { apiURL } from './data';
import {toast} from 'react-toastify';
import {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';

function App() {

  const[courses, setCourses] = useState([]);
  const[loading, setLoading] = useState(true);

  async function fetchData(){
    setLoading(true);
    try{
        let response = await fetch(apiURL); 
        let output = await response.json();
        setCourses(output.data);
    }
    catch(error){
      toast.error("Something went wrong");
    }
   setLoading(false); 
  }

  useEffect( () => {
    fetchData();
  }, []
  );



  return (
    <div className="App">

  <div> <Navbar /> </div>
  <div> <Filter filterData={filterData} /> </div> 
  <div>  
     { loading ? (<Spinner />) : (<Cards courses={courses} />) }
  </div>
    </div>
  );
}

export default App;
