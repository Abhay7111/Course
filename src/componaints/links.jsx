import React from "react";

function Links({ links }) {
  return (
    <div className="max630_link hvr_bg z-0 relative">
      <div className="max630_miniraper maindv_1 z-10 border-t-[1px] items-center justify-between border-b-[1px] py-3 px-3 flex sm:gap-2 relative ">
        <div className="ml-2 sm:scale-[1.5] max630_linkicon z-10">{links.icon.numbering}</div>
        <div className=" px-3 font-normal sm:text-nowrap text-start sm:tracking-tighter sm:w-10/12 sm:overflow-hidden sm:overflow-x-auto sm:text-3xl z-10 max630_linktext">
          {links.name}
        </div>
        <div className="mr-3 scale-[1.5] z-10">
          <a href={links.url} target="blank">
            {links.icon.goto}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Links;
