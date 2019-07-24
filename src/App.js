import React,{Component}from 'react';
import './App.css';
import Nav from './components/Nav';
import GetRecipe from './components/GetRecipe';


class App extends Component {


  state={

    query:""
  }



  setQuery=(search)=>{

  
   this.setState({
     
    query:search
   })
   
    

  }
  render(){
  return (  
    <div className="App">
      
    <Nav getQuery={this.setQuery} />

    <GetRecipe recipe={this.state.query} />
    
  
    </div>

    
  );

  }
}

export default App;
