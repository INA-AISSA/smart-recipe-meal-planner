import ReviewSection from "../components/ReviewSection";
import Navbar from "../components/Navbar";


function RecipeDetail({ recipe }) {
  return (
    <>    <Navbar />

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
