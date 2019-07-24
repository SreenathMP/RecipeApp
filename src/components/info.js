import React from 'react';
import {Row,Col} from 'react-bootstrap'
import Nav from './Nav';
import uniqueid from 'uniqid'




function info(props){

  
    
return(

 <div>

<Nav />

     <div className="recipe-list">

<Row className="info-image">

      <Col  >
       {<img src={props.location.state.image} alt="" />}
       <h5>{props.location.state.title}</h5>
      </Col>
      <Col md={4} sm={6} xs={12}>
            <h5>Ingredients</h5>
       {<ol>{props.location.state.ingredients.map(ingredient=>(
        <li key={uniqueid()}>{ingredient.text}</li>
       ))} </ol>}
      </Col>
      
      
</Row>

    
</div>
      

</div>

);

}


export default info;