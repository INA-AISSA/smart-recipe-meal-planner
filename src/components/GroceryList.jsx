import recipes from "../data/recipes";

export default function GroceryList({ plan = [] }) {
  let ingredients = [];

  plan.forEach((p) => {
    const recipe = recipes.find((r) =>
      p.meal.toLowerCase().includes(r.name.toLowerCase())
    );

    if (recipe) {
      ingredients.push(...recipe.ingredients);
    }
  });

  const uniqueIngredients = [...new Set(ingredients)];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Grocery List</h2>

      {uniqueIngredients.length === 0 ? (
        <p>No ingredients found.</p>
      ) : (
        uniqueIngredients.map((item, i) => (
          <div key={i}>{item}</div>
        ))
      )}
    </div>
  );
}

