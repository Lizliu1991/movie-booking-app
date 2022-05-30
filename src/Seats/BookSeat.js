import React, { useState } from "react";


function BookSeat({ item,total,setTotal,id,items,setItems,index}) {

    const [click, setClick] = useState(false)
    

    const handleClick = () => {
       
        setClick(!click);
      if(!click){
        setItems(items => [item, ...items])
        setTotal(prev => prev + 1)
       
      }else{
         //delete item
          console.log(items);
          setTotal(prev => prev - 1)
      }

    }


    return (
        <div>

            <button
            key={item}
                onClick={handleClick}
                style={{ backgroundColor: !click ? "cadetblue" : "gray" }}
                className="flex items-center justify-center w-12 h-10 px-2   text-white  text-xs">{!click ? item : "Booked"}</button>

              



        </div>
    )
}

export default BookSeat