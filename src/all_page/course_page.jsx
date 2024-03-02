import React from "react";

function Course_page({ Coursesdata }) {
  return (
    <div className="w-60 min-h-[380px] bg-clr relative rounded-2xl">
      <div className="w-full relative">
        <img className="rounded-2xl" src={Coursesdata.insrtructor.thumbnail} />
        <div className=" rounded-2xl w-full h-full bg-zinc-900/30 z-10 absolute top-0 left-0"></div>
        <div className="absolute top-1 z-20 right-2 bg-clr2 py-[1px] text-[0.8em] text-zinc-700 px-2 rounded-md">
          {Coursesdata.insrtructor.overview}
        </div>
        <div className="absolute top-1 z-20 left-2 bg-clr2 py-[1px] text-[0.8em] text-zinc-700 px-2 rounded-md font-semibold">
          {Coursesdata.insrtructor.courses.teaching_type}
        </div>
      </div>
      <div className=" mb-2 px-2 mt-1 leading-7 text-[2em] text-zinc-700 font-semibold tracking-tighter">
        {Coursesdata.insrtructor.courses.title}
      </div>
      <div className=" text-zinc-700 w-full flex items-center justify-start
      leading-none gap-2 text-[0.7em] flex-wrap">
        <span className={`bg-clr2  ${Coursesdata.insrtructor.class.padding} ${Coursesdata.insrtructor.class.hide} rounded-md text-zinc-700`}>
          {Coursesdata.insrtructor.courses.attributes._1}
        </span>
        <span className={`bg-clr2  ${Coursesdata.insrtructor.class.padding} ${Coursesdata.insrtructor.class.hide} rounded-md text-zinc-700`}>
          {Coursesdata.insrtructor.courses.attributes._3}
        </span>
        <span className={`text-zinc-700 bg-clr2  ${Coursesdata.insrtructor.class.padding} ${Coursesdata.insrtructor.class.hide} rounded-md`}>
          {Coursesdata.insrtructor.courses.attributes._2}
        </span>
        <span className={`text-zinc-700 bg-clr2 ${Coursesdata.insrtructor.class.padding} ${Coursesdata.insrtructor.class.hide} rounded-md`}>
          {Coursesdata.insrtructor.courses.attributes._4}
        </span>
        <span className={`text-zinc-700 bg-clr2 ${Coursesdata.insrtructor.class.padding} ${Coursesdata.insrtructor.class.hide} rounded-md`}>
          {Coursesdata.insrtructor.courses.attributes._5}
        </span>
        <span className={`text-zinc-700 bg-clr2 ${Coursesdata.insrtructor.class.padding} ${Coursesdata.insrtructor.class.hide}  rounded-md`}>
          {Coursesdata.insrtructor.courses.attributes._6}
        </span>
        <span className={`text-zinc-700 bg-clr2  ${Coursesdata.insrtructor.class.padding} ${Coursesdata.insrtructor.class.hide} rounded-md`}>
          {Coursesdata.insrtructor.courses.attributes._7}
        </span>
      </div>
      <div className="text-[#00009F]/50 px-2 mt-1 w-full flex items-center justify-between text-[0.84em] bg-sky-500 py-2">
        insrtructor{" "}
        <h3 className="text-zinc-700 text-[1em]">
          {" "}
          {Coursesdata.insrtructor.name.first}{" "}
          {Coursesdata.insrtructor.name.last}
        </h3>
      </div>
      <div className="text-zinc-700/80 flex items-center justify-between py-2 px-2 text-[0.86em]">
        Price Value{" "}
        <span className=" font-semibold text-3xl text-zinc-700">
          {" "}
          <span className="text-sky-600 text-2xl">₹ </span>
          {Coursesdata.insrtructor.price}
        </span>
      </div>
    </div>
  );
}

export default Course_page;
