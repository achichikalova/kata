const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  
  let ingredientsInStock = bakeryA.concat(bakeryB);
  
  for (let recipe of recipes) {
    let ingredientsNeeded = recipe.ingredients;
    
    if(ingredientsInStock.includes(ingredientsNeeded[0]) === true 
    && ingredientsInStock.includes(ingredientsNeeded[1]) === true) {
      return recipe.name;
    };
  }
};

//Second solution to get one ingridient from one bakery:

//const chooseRecipe = function(bakeryA, bakeryB, recipes) {

//   for (let recipe of recipes) {

//     let ingredientsNeeded = recipe.ingredients;

//     if(bakeryA.includes(ingredientsNeeded[0]) === true 
//     && bakeryB.includes(ingredientsNeeded[1]) === true 

//     || bakeryA.includes(ingredientsNeeded[1]) === true 
//     && bakeryB.includes(ingredientsNeeded[0]) === true ) {

//       return recipe.name;
      
//     };    
//   }
// }

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));