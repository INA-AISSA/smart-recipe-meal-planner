import { useState } from "react";

export default function ReviewSection() {
  const [review, setReview] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleReview = (type) => {
    setReview(type);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-10 relative">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">
        Did you like this recipe?
      </h2>

      {/* Emoji Buttons */}
      <div className="flex gap-6 text-4xl justify-center mb-6">
        <button
          onClick={() => handleReview("like")}
          className={`transition transform hover:scale-125 ${
            review === "like" ? "scale-125" : ""
          }`}
        >
          👍
        </button>

        <button
          onClick={() => handleReview("neutral")}
          className={`transition transform hover:scale-125 ${
            review === "neutral" ? "scale-125" : ""
          }`}
        >
          😐
        </button>

        <button
          onClick={() => handleReview("dislike")}
          className={`transition transform hover:scale-125 ${
            review === "dislike" ? "scale-125" : ""
          }`}
        >
          👎
        </button>
      </div>

      <p className="text-center text-gray-600 text-sm">
        Your feedback helps us recommend better recipes next time.
      </p>

      {/* Popup Message */}
      {showPopup && (
        <div className="absolute top-4 right-4 bg-green-100 text-green-700 px-4 py-2 rounded-lg shadow animate-bounce">
          Thanks for your feedback! 😊
        </div>
      )}
    </div>
  );
}
