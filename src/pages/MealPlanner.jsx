import { useState } from "react";
import Navbar from "../components/Navbar";
import GroceryList from "../components/GroceryList";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function MealPlanner() {
  const [plan, setPlan] = useState({});

  const handleChange = (day, value) => {
    setPlan({ ...plan, [day]: value });
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Weekly Meal Planner
          </h1>

          <p className="text-gray-600 mb-10">
            Plan your meals for the week and generate your grocery list automatically.
          </p>

          {/* Planner Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {days.map((day) => (
              <div
                key={day}
                className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
              >
                <h2 className="text-lg font-semibold text-orange-600 mb-3">
                  {day}
                </h2>

                <input
                  type="text"
                  placeholder="e.g. Pasta, Rice, Omelette"
                  value={plan[day] || ""}
                  onChange={(e) => handleChange(day, e.target.value)}
                  className="w-full border-2 border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-400"
                />
              </div>
            ))}
          </div>

          <GroceryList plan={plan} />
        </div>
      </div>
    </>
  );
}
