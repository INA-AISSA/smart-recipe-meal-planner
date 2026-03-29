import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-orange-600">
        🍽 Smart Recipe
      </h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-orange-500">
          Home
        </Link>

        <Link to="/ingredients" className="hover:text-orange-500">
          Find Recipes
        </Link>

        <Link to="/recipes" className="hover:text-orange-500">
          Recipes
        </Link>

        <Link to="/meal-planner" className="hover:text-orange-500">
          Meal Planner
        </Link>

        <Link to="/grocery-list" className="hover:text-orange-500">
          Grocery List
        </Link>
      </div>
    </nav>
  );
}