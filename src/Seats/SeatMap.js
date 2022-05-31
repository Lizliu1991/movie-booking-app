import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import BookSeat from './BookSeat';
import { Button } from 'react-bootstrap'
import SelectedSeats from './SelectedSeats';

function SeatMap({ seats, setSeats }) {

    const [total, setTotal] = useState(0)
    const [items, setItems] = useState([])

    const navigate = useNavigate();


    return (
        <>

            <div className=" seats grid grid-cols-6  items-center justify-center  ">
                {seats.map((item, index) =>
                    <BookSeat
                        key={index}
                        item={item}
                        total={total}
                        setTotal={setTotal}
                        items={items}
                        setItems={setItems}
                    />

                )}
            </div>

          <SelectedSeats items={items} setItems={setItems}/>


            <div className="flex items-center justify-between text-2xl">
                <p className="mr-5"> You have selected: {total} seat(s),</p>
                <p className="mr-3">{36 - total} availble</p>
                <Button variant="primary" onClick={() => navigate("/success")} >
                    Confirm
                    </Button>

            </div>

            <div>



            </div>
        </>
    )
}

export default SeatMap