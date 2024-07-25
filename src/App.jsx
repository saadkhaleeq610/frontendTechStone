import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import { store } from "./store/store";
import Slider from './components/Slider';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users?page=2');
        const result = await response.json();
        setUsers(result.data);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Provider store={store}>
      <Header/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 sm:mx-8 md:mx-[100px] mt-[70px]'>
      {users.map(user => (
        <Card key={user.id} user={user} />
      ))}
      </div>
      <Slider/>
    </Provider>
    </>
  )
}

export default App
