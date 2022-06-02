import React, { useState } from "react";
import {
  Container,
  Button,
  Modal,
  Form,
  FormLabel,
  FormControl
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Movie({
  original_title,
  backdrop_path,
  release_date,
  vote_average,
  overview,
}) {
  const [show, setShow] = useState(false);

  const time1 = "10:am";
  const time2 = "3:00pm";
  const time3 = "5:pm";
  const [timeChoosen, setTimeChoosen] = useState("")
  const history = useNavigate();


  

  return (
    <div>
      <Container fluid className="flex items-center m-5">
        <img
          className="w-1/3  top-0"
          src={"https://image.tmdb.org/t/p/w500" + backdrop_path}
          alt={backdrop_path}
        />

        <div className="ml-8">
          <h1>{original_title}</h1>
          <p><span className="uppercase font-semibold mr-3" >Release Date: </span>{release_date} </p>
          <p><span className="uppercase font-semibold mr-3">Rating: </span>{vote_average}</p>
          <p> <span className="uppercase font-semibold mr-3">Overview:</span> {overview}</p>

          <Button variant="primary" onClick={() => setShow(true)}>
            Book Ticket
          </Button>
        </div>
      </Container>
      <Modal
        backdrop="static"
        keyboard={false}
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Book Movie Ticket
            <h3 className="mt-3">{original_title} </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormLabel>Select Date</FormLabel>
            <FormControl type="date" placeholder="Select Date"></FormControl>
          </Form>
          <div className="flex items-center mx-5 ">
            <button className="bg-blue-400  px-3 m-3 focus:ring focus:ring-blue-300  " onClick={() => setTimeChoosen(time1)}>{time1}</button>
            <button className="bg-blue-400  px-3 m-3 focus:ring focus:ring-blue-300" onClick={() => setTimeChoosen(time2)}>{time2}</button>
            <button className="bg-blue-400  px-3 m-3 focus:ring focus:ring-blue-300" onClick={() => setTimeChoosen(time3)}>{time3}</button>
          </div>
          <p> {timeChoosen}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => history("/bookSeat")}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Movie;
