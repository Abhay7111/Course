import React from "react";
import Card_pop from "./card_pop";
import { Link } from "react-router-dom";

function Cards({ card }) {
  return (
    <div className=" py-3 px-3 size-[45%] mt-3 border border-zinc-600 gap-3 rounded-lg flex items-start justify-start">
      <div className="left w-40 h-40 rounded-lg overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={card.link.profile_photo}
        />
      </div>

      <div className="right w-8/12 h-40 gap-2 flex">
        <h1 className=" text-2xl h-fit font-bold text-zinc-700 w-1/2">{card.teaching_type}</h1>
        <h1 className=" text-[0.9rem] text-end h-fit font-normal text-zinc-700 w-1/2 mt-1">{card.date}</h1>
      </div>
    </div>
  );
}

export default Cards;
