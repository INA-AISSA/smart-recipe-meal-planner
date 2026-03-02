const recipes = [
    {
      name: "Vegetable Fried Rice",
      tag: "Quick & Easy",
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
    },
    {
      name: "Tomato Omelette",
      tag: "High Protein",
      image:
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db"
    },
    {
      name: "Pasta with Veggies",
      tag: "Healthy",
      image:
        "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642"
    }
  ];
  
  export default function RecipeList() {
    return (
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Suggested Recipes
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
  
              {/* Content */}
              <div className="p-5">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {recipe.tag}
                </span>
  
                <h3 className="text-lg font-bold text-orange-600 mb-2">
                  {recipe.name}
                </h3>
  
                <p className="text-sm text-gray-600 mb-4">
                  Suggested based on the ingredients you entered.
                </p>
  
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  