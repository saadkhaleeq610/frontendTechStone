import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import { store } from "./store/store";
import Slider from './components/Slider';
import AllUsers from './pages/AllUsers';

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
      <AllUsers/>
    </Provider>
    </>
  )
}

export default App
