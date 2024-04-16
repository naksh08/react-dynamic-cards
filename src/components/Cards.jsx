import React from 'react'
import Card from './Card'
function Cards({users, ...rest}) {
  return (
    <div className=' flex flex-col items-center py-5 gap-5 '>
        {users.map((user, index) => (
            <Card key={index} user={user} index={index} {...rest}/>
        ))} 
              
    </div>
  )
}

export default Cards