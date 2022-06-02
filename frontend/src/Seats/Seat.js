import React,{useState} from 'react'
import SeatMap from './SeatMap'

function Seat() {

const [seats, setSeats] = useState(
 [
    'R1 A','R1 B','R1 C', 'R1 D','R1 E','R1 F',
    'R2 A','R2 B','R2 C', 'R2 D','R2 E','R2 F',
    'R3 A','R3 B','R3 C', 'R3 D','R3 E','R3 F',
    'R4 A','R4 B','R4 C', 'R4 D','R4 E','R4 F',
    'R5 A','R5 B','R5 C', 'R5 D','R5 E','R5 F',
    'R6 A','R6 B','R6 C', 'R6 D','R6 E','R6 F'
]
)

  return (
    <div className="flex flex-col items-center justify-center ">
        <h1  className="mt-5">Book your seat</h1>
        
        <SeatMap seats={seats}/>

    </div>
  )
}

export default Seat