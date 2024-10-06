import React, { useState } from "react";

const Tour = ({ id, name, price, info, image, removeTour }) => {
  const [readmore, setReadMore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`;
  const readmoreHandler = () => {
    setReadMore(!readmore);
  };

  return (
    <div className="w-[400px] max-h-max m-[1rem] p-[1rem] rounded-lg  flex flex-col shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-[380px] aspect-square object-cover"
      />
      <div className="my-5 mx-1">
        <div className="">
          <h3 className="text-[#1faa59] text-lg">₹ {price}</h3>
          <h4 className="text-2xl">{name}</h4>
        </div>

        <div>
          {description}
          <span
            onClick={readmoreHandler}
            className="text-[#1230e8] cursor-pointer"
          >
            {readmore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>
      <button
        onClick={() => removeTour(id)}
        className="mt-[18px] px-[80px] py-[10px] border border-[#b4161b] cursor-pointer rounded-lg text-lg font-bold bg-[#b4161b21] hover:bg-red-700 hover:text-white hover:transition-all hover:duration-300"
      >
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
