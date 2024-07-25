import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import { useState, useEffect } from 'react';

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
      <Header/>
      <div className='flex flex-wrap gap-4 mx-[100px]'>
      {users.map(user => (
        <Card key={user.id} user={user} />
      ))}
      </div>
    </>
  )
}

export default App
