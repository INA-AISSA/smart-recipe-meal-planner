
// Main page where the recipes appear
// It receives ingredients from the ingredient input,
// filters based on those ingredients,
// and displays recipe cards with image, name, tag, description, and a "View Recipe" button.
import { Link } from "react-router-dom";
import recipes from "../data/recipes";

export default function RecipeList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 p-6">

      <h2 className="text-3xl font-bold text-orange-600 mb-6">
        🍳 Suggested Recipes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {recipe.description}
              </span>

              <h3 className="text-lg font-bold text-orange-600 mb-2">
                {recipe.name}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                Suggested based on your ingredients.
              </p>

              <Link
                to={`/recipes/${recipe.id}`}
                className="block w-full bg-orange-500 text-white py-2 rounded-lg text-center font-semibold hover:bg-orange-600 transition"
              >
                View Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}