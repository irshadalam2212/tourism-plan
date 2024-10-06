import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="text-5xl border-dashed border-4 border-indigo-600 text-center font-extrabold px-[5vw] py-[1vh] rounded-xl m-[6vh]">
        Tourism Plan
      </h2>
      <div className="flex justify-center flex-wrap max-w-[1300px] my-0 mx-auto">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
