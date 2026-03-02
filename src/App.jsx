import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IngredientInput from "./components/IngredientInput";
import RecipeList from "./components/RecipeList";
import MealPlanner from "./pages/MealPlanner";
import GroceryList from "./components/GroceryList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<IngredientInput />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/meal-planner" element={<MealPlanner />} />
        <Route path="/grocery-list" element={<GroceryList />} />
      </Routes>
    </div>
  );
}
export default App;






