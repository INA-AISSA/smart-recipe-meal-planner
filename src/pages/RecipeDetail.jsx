import ReviewSection from "../components/ReviewSection";
import { useParams, Link } from "react-router-dom";
import recipes from "../data/recipes";

// it's a single recipe 
// when the user click on view recipe button it will take to this page and show the recipe details like name, ingredients, steps and review section

function RecipeDetail() {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) {
    return (
      <>
        <div className="p-6">
          <h2 className="text-2xl font-bold">Recipe not found</h2>
          <p className="mt-4">We couldn't find that recipe.</p>
          <Link to="/recipes" className="mt-4 inline-block text-orange-600 underline">
            Back to recipes
          </Link>
        </div>
      </>
    );
  }

  return (
    <>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
        <p className="mb-2">Ingredients: {recipe.ingredients.join(", ")}</p>
        <p className="mb-4">{recipe.steps}</p>
        <ReviewSection />
      </div>
    </>
  );
}

export default RecipeDetail;