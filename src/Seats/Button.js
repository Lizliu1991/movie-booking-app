import React, {useState} from "react";

function Button({item,id, setSeats}) {
    const [click, setClick] = useState(false)
    const handleClick = (id) => {
        setClick(!click)
        }

  return (
    <div>

<button 
onClick={handleClick}
    style={{backgroundColor: !click ? "cadetblue": "gray"}}
    className="flex items-center justify-center w-12 h-10 px-2   text-white  text-xs">{!click ? item : "Booked"}</button>
 

    </div>
  )
}

export default Button