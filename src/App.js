import data from "./data";
import "./App.css";
import { useState } from "react";
import Tours from "./components/Tours";

function App() {
  const [tours, setTours] = useState(data);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  if (tours.length === 0) {
    return (
      <div className="flex items-center justify-center flex-col h-[100vh]">
        <h2 className="text-2xl">No Tours Left</h2>
        <button
          onClick={() => setTours(data)}
          className="mt-4 py-2 px-20 border border-white cursor-pointer bg-gray-300 hover:bg-gray-100 transition-all duration-300"
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
