import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Slider from '../components/Slider'

function AllUsers() {

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
    <div className='lg:py-[25px] md:px-[80px] sm:py-[10px] sm:px-[25px] bg-[#E6EAF8]'>
    <div className='bg-white'>
      <Header/>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 mx-4 sm:mx-8 mt-[70px]'>
      {users.map(user => (
        <Card key={user.id} user={user} />
      ))}
      </div>
      <Slider/>
    </div>
    </div>
  )
}

export default AllUsers
