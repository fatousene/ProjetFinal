import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import DemoCarousel from './DemoCarousel';
import Maquillage from './Maquillage';
import {Container} from 'react-bootstrap';






const  Home = () => {
   
  return (
    <div className="home">
    <Container>
    <DemoCarousel/>
    <br/>
    <Maquillage/>
    </Container>
    </div>
  );
}
export default Home;