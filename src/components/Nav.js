import React,{Component} from 'react';
import '../App.css';
import { Navbar,Button,FormControl,Form,Nav } from 'react-bootstrap';






class  Nav_Menu extends Component {


 

 state={

    search:""

 }

  
 handleChange=(e)=>{
    
   this.setState({

    search:e.target.value

   });

  }


  handleClick=()=>{

    
    
    this.props.getQuery(this.state.search);
  }

  
  render(){
   return (
     
    <div className="NavBar">
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Recipe App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="/" active>Food Recipe</Nav.Link>
      <Nav.Link href="/">Ingredients</Nav.Link>
      </Nav>
      <Form inline onSubmit={(e)=>{e.preventDefualt()}}>
      <FormControl type="text" placeholder="Recipe Search" className="mr-sm-2" onChange={this.handleChange}  />
      <Button variant="outline-success" onClick={this.handleClick}>Search</Button>
      </Form>
      </Navbar.Collapse>
      </Navbar>

    
</div>


 
   );
   }

  }

  

export default Nav_Menu;
   


  

 



