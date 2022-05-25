import React,{useState} from 'react'
import { Container, Button, Modal,Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function Movie({original_title,backdrop_path,release_date, vote_average,overview}) {
 

const [show, setShow] = useState(false)

const time1= "10:am";
const time2 = "3:00pm";
const history= useNavigate();



  return (
   <div >
   <Container fluid className='flex items-center mb-5' >
  

<img src={"https://image.tmdb.org/t/p/w500" + backdrop_path}  alt={backdrop_path} />


<div  className='ml-6'>
<h1>{original_title}</h1>
             <p>Release Date: {release_date} </p>   
             <p>Rating: {vote_average}</p> 
                    <p> Overview: {overview}</p>
                    <Button variant="primary" onClick={() => setShow(true)}>Book Ticket</Button>     
 </div>


</Container>
<Modal backdrop="static" keyboard={false} show={show} onHide={() => setShow(false)}>

    <Modal.Header closeButton>
        <Modal.Title>
        Book Movie Ticket  
        <h3>{original_title} </h3>
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    

<Form>
   
    
        <FormLabel>Select Date</FormLabel>
        <FormControl type="date" placeholder="Select Date"></FormControl>
   
</Form>
<button  className='m-3 bg-gray-200 px-2'>{time1}</button>
<button className='ml-3 bg-gray-200 px-2'>{time2}</button>


    </Modal.Body>
    <Modal.Footer>
                    <Button variant="primary" onClick={() => history('/bookSeat')}>Book Now</Button>
                </Modal.Footer>
</Modal>


   </div>
  )
}

export default Movie