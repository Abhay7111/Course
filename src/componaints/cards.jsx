import React from "react";
import Card_pop from "./card_pop";
import { Link } from "react-router-dom";


function Cards({ card }) {
  return (
    <div
      className={`w-1/4 flex gap-3 h-40 rounded-2xl bg-[${card.styling.color}]`}
    >
      <div className={`ml-2 pt-2 w-fit h-full flex items-center justify-center flex-col `}>
        <img
          className={`object-cover w-14 h-14 ${card.styling.type} ${card.styling.class.hover} ${card.styling.class.shadow} ${card.styling.class.scale} shadow_01`}
          src={card.link.profile_photo}
        />
        <div className=" pt-2 leading-[16px] w-full h-full rounded-md ">
          <div>
            <p className="text-zinc-800 text-[0.9rem]">{card.course._1}</p>
          </div>
          <div>
            <p className="text-zinc-800 text-[0.9rem]">{card.course._2}</p>
          </div>
          <div>
            <p className="text-zinc-800 text-[0.9rem]">{card.course._3}</p>
          </div>
          <div>
            <p className="text-zinc-800 text-[0.9rem]">{card.course._4}</p>
          </div>
          <div>
            <p className="text-zinc-800 text-[0.9rem]">{card.course._5}</p>
          </div>
        </div>
      </div>
      <div className=" w-full h-full relative">
        <div className="">
          <p className="text-zinc-700 text-[2rem] font-medium leading-none tracking-tighter w-full flex flex-col">
            {card.teaching_type}{" "}
            <span className="text-[1rem] text-zinc-700 -top-1 tracking-tight leading-none relative">
              {card.development}
            </span>
          </p>
        </div>
        <div className=" w-full h-10 text-start text-zinc-700 text-[0.86rem]">
          <span className="font-thin text-zinc-700">with</span>{" "}
          {card.name.first} {card.name.last}
        </div>
        <div className=" w-fit absolute top-0 right-2 pt-1 cursor-pointer text-zinc-700 text-[0.8em]">
          <Link to="./Courses">{card.link.post.total}
          {card.link.icons.view} 
           {card.link.icons.crown}</Link>
        </div>
        <div className="">
          <p className="text-zinc-600 text-[0.8em] line-clamp-5 leading-[15px] -mt-4 pr-2">{card.about}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
