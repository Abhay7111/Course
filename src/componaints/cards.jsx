import React from "react";
import Card_pop from "./card_pop";
import { Link } from "react-router-dom";

function Cards({ card }) {
  return (
    <>
      <div className=" size-[370px] flex-col relative rounded-xl mt-5 bg-red-400/10 p-2">
        <div>
          <div className="flex items-start gap-4 relative">
            <img
              className="size-20 rounded-lg object-cover"
              src={card.link.profile_photo}
            />
            <div>
              <h1 className="text-2xl font-medium leading-none">
                {card.teaching_type} {card.development}
              </h1>
              <section className="text-[0.76rem] overflow-hidden leading-none mt-2 flex flex-wrap gap-2 px-2 py-">
                <Link>
                  <p className="">{card.course._1}</p>
                </Link>
                <p className="">{card.course._2}</p>
                <p className="">{card.course._3}</p>
                <p className="">{card.course._4}</p>
                <p className="">{card.course._5}</p>
                <p className="">{card.course._6}</p>
                <p className="">{card.course._7}</p>
                <p className="">{card.course._8}</p>
                <p className="">{card.course._9}</p>
                <p className="">{card.course._10}</p>
              </section>
            </div>
          </div>
          <div className="max-h-52 mt-3 rounded-lg leading-5 p-2 text-zinc-400 text-[0.9rem] overflow-hidden line-clamp-[11]">
            {card.about}
          </div>
        </div>
        <div className="absolute bottom-2 h-9 flex items-center gap-2 mt-1 px-2 rounded-lg">
          <Link to="youtube"><p className="size-6 rounded-md flex items-center text-[0.9rem] justify-center bg-[#7769DF]/80">
            {card.link.icons.youtube}
          </p></Link>
          <Link to="instagram">
          <p className="size-6 rounded-md flex items-center text-[0.9rem] justify-center bg-[#7769DF]/80">
            {card.link.icons.instagram}
          </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cards;
