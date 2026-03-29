import { useState } from "react";

// This component allows users to input ingredients and displays them as tags.
// let user type ingredient like egg, rice etc and it only collect user input doesn't display anything
export default function IngredientInput() {
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = () => {
    if (!input.trim()) return;
    setIngredients([...ingredients, input]);
    setInput("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-10">
      <h2 className="text-xl font-semibold text-green-700 mb-4">
        Enter Ingredients
      </h2>

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. rice, tomato, egg"
          className="flex-1 border-2 border-orange-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
        />

        <button
          onClick={addIngredient}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {ingredients.map((item, i) => (
          <span
            key={i}
            className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}