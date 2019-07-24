import React from 'react';
import {Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const Recipe = ({title,calories,image,ingredients}) => {


   
  

return (

     <div>
   
     <Row className="show-image">
      <Col md={3} sm={5} xs={12} xl={3} lg={3}>
       {<img src={image} alt="" />}
      </Col>
      </Row>
      <Row className ="show-title">
      <Col>
       <h5>
       <Link to={{pathname:`/info/${title}`,
        state:{title:title,calories:calories,ingredients:ingredients,image:image}
     }}>{title}</Link>
       </h5>
      </Col>
      </Row>
      
     </div>

    

)

}

export default Recipe;