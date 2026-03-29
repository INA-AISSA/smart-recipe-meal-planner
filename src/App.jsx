// filepath: /Users/aissadiakite/smart recipe and meal planner/src/App.jsx
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import IngredientInput from "./components/IngredientInput";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import MealPlanner from "./pages/MealPlanner";
import GroceryList from "./components/GroceryList";

function App() {
  const [plan, setPlan] = useState([]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-green-50 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingredients" element={<IngredientInput />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route
            path="/meal-planner"
            element={<MealPlanner plan={plan} setPlan={setPlan} />}
          />
          <Route path="/grocery-list" element={<GroceryList plan={plan} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;