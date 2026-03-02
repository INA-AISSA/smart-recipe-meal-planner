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

        <Link to="/meal-planner" className="hover:text-orange-500">
          Meal Planner
        </Link>

        <Link to="/recipe" className="hover:text-orange-500">
          Recipe
        </Link>
      </div>
    </nav>
  );
}
