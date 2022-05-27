import React,{ useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';

function SeatMap({seats,setSeats}) {

//     const [choose, setChoose] = useState("")
// const [selectedSeats, setSelectedSeats ]= useState([])





  return (
  <>

   <div className=" seats grid grid-cols-6  items-center justify-center  ">
  {seats.seat.map((item) => 
  <Button 
      key={uuidv4()}
      id={uuidv4()}
      item={item}
  />
   
  )}
  </div>
<div>
<p >You have selected:
{/* {selectedSeats.map(item => <p>{item}</p>)} */}
     </p>
</div>
    </>
  )
}

export default SeatMap