import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

function App() {
  const [users, setUsers] = useState([{cover: 'https://source.unsplash.com/random/800x600', title: 'Sample Card', desc: 'This is a sample description for the sample card which is used to give an idea about how the card component looks when you add it. You have to fill up the above form with the corresponding details to generate the desierd form. Try it out! ❤', profile: 'https://source.unsplash.com/random/800x600', auth: 'Nakshatra'}]);

  const handleData = (data) => {
    setUsers((prev)=>[...prev, data]);
  };

  const handleRemove = (id) => {
    setUsers((prev)=>prev.filter((__ , index) => index !== id));
  }

  return (
    <div className='flex flex-col gap-10 justify-center items-center'>
      <Form handleData={handleData}/>
      <Cards users={users} handleRemove={handleRemove}/>
    </div>
  )
}

export default App