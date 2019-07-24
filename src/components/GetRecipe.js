import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';




function GetRecipe(props) { 


 const [recipes,setRecipes]=useState([]);

 const APP_ID="ad3efeb2";
 const APP_KEY="3f85d97fba01712c5a0a5fa9f722cc8a";
 

 useEffect(()=>{

    if(props.recipe)
       getRecipes();

 },[props.recipe])




 
    



const getRecipes= async ()=>{

    setRecipes([]);
    const response= await fetch(
      `https://api.edamam.com/search?q=${props.recipe}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data=await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  
  return  (
    <div className="recipe-list">
     
      
      {recipes.map(recipe => (

         <Recipe
         
         key={recipe.recipe.label}
         title={recipe.recipe.label}
         calories={recipe.recipe.calories}
         image={recipe.recipe.image}
         ingredients={recipe.recipe.ingredients}
         />

      ))}
    </div>
  );

}


export default GetRecipe;