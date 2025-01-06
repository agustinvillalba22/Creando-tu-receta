import React, { useState } from 'react';
import Home from './components/Home';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import RecipeHistory from './components/RecipeHistory/RecipeHistory';
import Header from './components/Header';

const App = () => {
  const [view, setView] = useState('home');
  const [recipes, setRecipes] = useState([]);

  const changeView = (newView) => setView(newView);

  return (
    <div>
      {/* Header */}
      <Header changeView={changeView} />

      {/* Vistas */}
      {view === 'home' && <Home changeView={changeView} />}
      {view === 'create-recipe' && (
        <CreateRecipe changeView={changeView} setRecipes={setRecipes} recipes={recipes} />
      )}
      {view === 'recipe-history' && (
        <RecipeHistory changeView={changeView} recipes={recipes} />
      )}
    </div>
  );
};

export default App;
