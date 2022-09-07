import React ,{useEffect, useState} from 'react';
import './Maquillage.css';
import axios from 'axios';


const Maquillage  = () => {
    const [article, setArticle] = useState([]);
    const fetchData = async () => {
      await 
      axios
        .get("http://localhost:5000/api-article/all-article")
        .then((res) => {
          setArticle(res.data);
          
        })
        .catch((err) => {
              console.log(err);
          },);
      };
useEffect(() => {
    fetchData();
 }, []);

 const handleAddArticle = (id) => {
   console.log(id);
 }
    return (
        
        <div>
        <h1>MAQUILLAGES </h1>
        <div className="newarticle">
        {article.map((articles, key) =>(
            <div className="card" key={key}>        
            <div className="article-image">
              <img src={articles.image} alt={articles.title}/>
           </div>
           <div className="article-name">
              <h6>{articles.title} </h6>
           </div>
           <div className="article-price">{articles.price}</div>
           <div>
           <button className="article-add-button" onClick= {() => handleAddArticle(articles._id)}>Add to cart</button>
           </div>
            </div>
        ) )} 
        </div>
        </div>
    )
}

export default Maquillage;
