export default function Hero() {
  return (
    <div
      className="h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/src/assets/hero-food.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="text-5xl font-bold mb-4">
          Cook Smart. Eat Better.
        </h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Discover recipes based on your ingredients, preferences, and past reviews.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold">
          Explore Recipes
        </button>
      </div>
    </div>
  );
}