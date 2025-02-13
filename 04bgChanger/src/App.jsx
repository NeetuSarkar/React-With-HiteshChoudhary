import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Red Button */}
          <button
            className="px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-700 transition"
            onClick={() => changeColor("red")}
          >
            Red
          </button>
          {/* Green Button */}
          <button
            className="px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-700 transition"
            onClick={() => changeColor("green")}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
