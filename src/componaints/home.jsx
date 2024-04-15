import React from "react";
import Botton from "./button";
import Photos from "./photos";

function Home({ homepage }) {
  const btn = [
    {
      name: "Contact",
      style: {
        border: `20px`,
      },
    },
    {
      name: "Start Now!",
    },
  ];
  return (
    <>
      <div className=" sm:w-full sm:h-[98vh]  sm:flex">
        <div className="left sm:w-1/2 h-screen">
          <div className="top sm:w-full sm:h-1/2 flex items-center justify-center border-b-[1px] border-zinc-500">
            <h1 className="sm:text-[10vw] max630_text sm:leading-[17vh] sm:w-fit sm:h-fit text-center font-[500]">
              Mastring <br /> the web
            </h1>
          </div>
          <div className="bottom w-full h-1/2">
            <div className="w-full sm:h-20 pt-4 px-4 smoverflow-hidden">
              <p className="max630_dis sm:text-[1.2vw] sm:tracking-tighte sm:leading-none">
                {homepage.dis}
              </p>
            </div>
            <div className=" flex justify-between sm:w-[400px] sm:ml-14">
              <div className="flex">
                {btn.map((item, index) => (
                  <Botton btn={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="right sm:w-1/2 sm:h-full sm:overflow-hidden">
          <Photos />
        </div>
      </div>
    </>
  );
}

export default Home;
