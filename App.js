import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import {Route, Routes, Link} from 'react-router-dom'

function App() {

  let [NewPosts,SetNewPosts] = useState(['1','2','3','4']);
  let [RecommendPosts,SetRecommendPosts] = useState(['1','2','3','4']);
  let[a,b] = useState(Array(40).fill(0));


  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand href="home">LOGO</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="funding">Funding</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="login">Login</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/home' element={<Mainpage/>} />
        <Route path='/funding' element={<FundingPage/>} />
        <Route path='/about' element={<div>우리 사이트에 관하여...</div>} />
      </Routes>

      

    </div>
  );

  function Mainpage(){
    return(
      <>
        <div className='Posts'>
          <p>신규기업</p>
        </div>

        <div className="box">
          {NewPosts.map((post, index) => <Posts key={index} />)}
        </div>

        <div className='Posts'>
          <p>추천기업</p>
        </div>

        <div className="box">
          {RecommendPosts.map((post, index) => <Posts key={index} />)}
        </div>
      </>
    );

  }

  function Posts(){
    return(
      <Card style={{ width: '18rem' }} className='Card'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );  
  }

  function FundingPosts(){
    return(
      <Card style={{ width: '18rem' }} className='FundingCard'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );  
  }

  function FundingPage(){
    return(
      <div className='Fundingbox'>
        {a.map((post, index) => <FundingPosts key={index} />)}
      </div>
    );
  }


}

export default App;
