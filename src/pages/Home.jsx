import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      
      <div className="min-h-[calc(100vh-80px)] bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 flex items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8">
          
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Cook Smart. <br /> Plan Better. <br /> Eat Happier.
            </h1>

            <p className="text-lg mb-8">
              Smart Recipe and Meal Planner helps you decide what to cook based
              on ingredients you have, plan meals for the week, and create a
              grocery list easily.
            </p>

            <div className="flex space-x-4">
              <Link
                to="/recipes"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-100 transition"
              >
                🍳 Explore Recipes
              </Link>

              <Link
                to="/meal-planner"
                className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition"
              >
                📅 Plan Meals
              </Link>
            </div>
          </div>

          {/* Right Image / Visual */}
          <div className="flex justify-center items-center">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1493770348161-369560ae357d"
                alt="Food"
                className="rounded-xl w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;