export default function GroceryList({ plan }) {
    const items = Object.values(plan).filter(Boolean);
  
    return (
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Grocery List
        </h2>
  
        {items.length === 0 ? (
          <p className="text-gray-500">
            Add meals to your planner to generate a grocery list.
          </p>
        ) : (
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-green-50 px-4 py-2 rounded-lg"
              >
                <span className="text-gray-700">{item}</span>
                <span className="text-green-600 font-semibold">✓</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  