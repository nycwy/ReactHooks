import { useState } from "react";

export default function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggle() {
    setIsVisible((prev) => !prev);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 text-center w-full max-w-sm">
        <button
          onClick={handleToggle}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition mb-4"
        >
          {isVisible ? "Hide" : "Show"}
        </button>

        {isVisible && (
          <p className="text-gray-700 text-lg font-medium">
            This is a secret message!
          </p>
        )}
      </div>
    </div>
  );
}
