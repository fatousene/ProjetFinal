import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import axios from 'axios';
import FileBase from  'react-file-base64';

const  NewArticles = () => {
  const [newarticle, setNewArticle] = useState({
    title:'',
    price:'',
     })

const onInputChange = (e) => {
     setNewArticle({...newarticle, [e.target.name] : e.target.value})
     }
     const handleSubmit = async (e) => {
      e.preventDefault()
       const url=`http://localhost:5000/api-article/add-article`;
      await axios.post(url, newarticle)
      .then((res) => {
        console.log(newarticle); 
      }).catch((err) => {
        console.log(err);
      });
    }
  return (
    <div className="App">
    <h1> New Article </h1> 
       <form onSubmit={handleSubmit}>
         <label>
           <p>Title </p>
         <input type="texte" name="title" onChange={(e) => onInputChange(e)} />
         </label>
         <label>
           <p>Price </p>
         <input type="texte" name="price" onChange={(e) => onInputChange(e)} />
         </label>
         <label>
           <p>Image </p>
           <FileBase type="file" multiple={ true }     
                            onDone={(base64) =>{
                              setNewArticle({...newarticle, image: base64})
                                  }} />
         </label>
         <label>
         <p>Create </p>
         <input type="submit"/>
         </label>
     </form>  
    </div>
  );
}
export default NewArticles;