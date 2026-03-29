import { useState } from "react";

export default function MealPlanner({ plan = [], setPlan }) {
  const [day, setDay] = useState("");
  const [meal, setMeal] = useState("");
  const [desc, setDesc] = useState("");

  const addMeal = () => {
    console.log("CLICKED"); // DEBUG

    if (!day.trim() || !meal.trim()) {
      alert("Please enter day and meal");
      return;
    }

    const newMeal = {
      day,
      meal,
      desc,
    };

    setPlan([...plan, newMeal]);

    // reset
    setDay("");
    setMeal("");
    setDesc("");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Meal Planner</h2>

      <input
        value={day}
        onChange={(e) => setDay(e.target.value)}
        placeholder="Day"
        className="border p-2 mb-2 w-full"
      />

      <input
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
        placeholder="Meal"
        className="border p-2 mb-2 w-full"
      />

      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
        className="border p-2 mb-2 w-full"
      />

      <button
        onClick={addMeal}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Meal
      </button>

      <div className="mt-4">
        {plan.map((item, i) => (
          <div key={i}>
            {item.day} - {item.meal}
          </div>
        ))}
      </div>
    </div>
  );
}