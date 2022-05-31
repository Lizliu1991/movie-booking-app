import React from 'react'


function SelectedSeats({items}) {



  return (
    <div className="flex border-solid border-blue-500">
    
    {items.map((item, index) => <p  key={index}
    className=" mr-5 text-bold text-blue-700">{item}</p>)} 
    </div>
  )
}

export default SelectedSeats