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
    <div className='2xl:py-[100px] 2xl:px-[194px] lg:py-[10px] lg:px-[150px]  bg-[#E6EAF8]'>
    <div className='bg-white'>
      <Header/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 sm:mx-8 md:mx-[100px] mt-[70px]'>
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
