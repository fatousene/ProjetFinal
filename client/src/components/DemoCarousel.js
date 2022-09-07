import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import IMG1 from "../Assets/IMG1.jpg"
import IMG3 from "../Assets/IMG3.jpg"
import IMG4 from "../Assets/IMG4.jpg"
import './Navbar.css';

class DemoCarousel extends Component  {
  state = {
      get: []
  }
    componentDidMount(){
        fetch('http://localhost:5000/api-article/all-article')
.then((res) => {
    return res.json()
})
.then((result) => {
    this.setState({get: result})
})
    };

  
render (){
    return(
    <>
	<div  className="carousel">
    <Carousel>
		<Carousel.Item interval={1500}>
		<img className="d-block w-100" src={IMG1} alt="img"/>
        <Carousel.Caption> 
            <h1 className="h1">BIENVENUE DANS VOTRE BOUTIQUE DE MODE EN LIGNE  </h1>
		</Carousel.Caption>
		</Carousel.Item>
        <Carousel.Item interval={1500}>
		<img className="d-block w-100" src={IMG3} alt="img"/>
        <Carousel.Caption> 
            <h1 className="h1">BIENVENUE DANS VOTRE BOUTIQUE DE MODE EN LIGNE </h1>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={2000}>
		<img className="d-block w-100" src={IMG4} alt="img"/>
        <Carousel.Caption> 
            <h1 className="h1">BIENVENUE DANS VOTRE BOUTIQUE DE MODE EN LIGNE </h1>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
    </div>
    <br/>
    </>
    )
}
}
export default DemoCarousel;