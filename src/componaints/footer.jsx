import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full sm:overflow-hidden sm:w-full footer">
      <div className="flex items-start justify-between w-full relative mt-16 gap-14 footer_child01 px-14 ">
        <div className=" footer_child02">
          <div className="logo flex flex-col items-center">
            <div className="logo text-[1.8rem] font-bold w-12 break-words leading-[23px] mb-4">
              PLICK
            </div>
            <li className="list-none w-fit mb-4">
              <a
                className="flex-wrap tracking-tighter leading-none text-[1.1rem]"
                href="#"
              >
                Get 100+ best online courses from us
              </a>
            </li>
            <div>
              <ul className="flex gap-1 social_media_footer">
                <li>
                  <a
                    className="p-2 w-8 h-8 rounded-full hover:bg-[#F870C2] bg-zinc-700"
                    href="#"
                  >
                    <i class="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="p-2 w-8 h-8 rounded-full hover:bg-[#F870C2] bg-zinc-700"
                    href="#"
                  >
                    <i class="ri-instagram-line"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="p-2 w-8 h-8 rounded-full hover:bg-[#F870C2] bg-zinc-700"
                    href="#"
                  >
                    <i class="ri-whatsapp-line"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="p-2 w-8 h-8 rounded-full hover:bg-[#F870C2] bg-zinc-700"
                    href="#"
                  >
                    <i class="ri-discord-line"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="p-2 w-8 h-8 rounded-full hover:bg-[#F870C2] bg-zinc-700"
                    href="#"
                  >
                    <i class="ri-youtube-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" footer_child02">
          <div className="logo flex flex-col items-start">
            <div className="logo text-[1.4rem] font-bold break-words leading-[23px] mb-4">
              Explore
            </div>
            <li className="list-none w-40 mb-4 leading-none">
              <a className="leading-none hvr-clr" href="#">
                Gellery
              </a>
            </li>
            <li className="list-none w-40 mb-4 leading-none">
              <Link to="/aboutus">About us</Link>
            </li>
            <li className="list-none w-40 mb-4 leading-none">
              <Link className="leading-none hvr-clr" to="/courses">
                Courses
              </Link>
            </li>
            <li className="list-none w-40 mb-4 leading-none">
              <Link className="leading-none hvr-clr" to="/help">
                Coming Soon
              </Link>
            </li>
            <li className="list-none w-40 mb-4 leading-none">
              <a className="leading-none hvr-clr" href="#">
                FAQ's
              </a>
            </li>
          </div>
        </div>
        <div className=" footer_child02">
          <div className="logo flex flex-col items-start">
            <div className="logo text-[1.4rem] font-bold break-words leading-[23px] mb-4">
              Links
            </div>
            <li className="list-none w-40 mb-4 leading-none">
              <a className="leading-none hvr-clr" href="#">
                Instructor
              </a>
            </li>
            <li className="list-none w-40 mb-4 leading-none">
              <a className="leading-none hvr-clr" href="#">
                Events
              </a>
            </li>
            <li className="list-none w-40 mb-4 leading-none">
              <a className="leading-none hvr-clr" href="#">
                About
              </a>
            </li>
            <li className="list-none w-40 mb-4 leading-none">
              <a className="leading-none hvr-clr" href="#">
                Portfolios
              </a>
            </li>
            <li className="list-none w-40 mb-4 leading-none">
              <a className="leading-none hvr-clr" href="#">
                Social media
              </a>
            </li>
          </div>
        </div>
        <div className=" footer_child02">
          <div className="logo flex flex-col items-start">
            <div className="logo text-[1.7rem] font-medium break-words leading-[23px] mb-4 w-full text-center">
              Contact
            </div>
            <ul>
              <li>
                <a href="#">+91 7408638739</a>
              </li>
              <li>
                <a href="#">gaamagaming+edictin@gmail.com</a>
              </li>
              <li>
                <a href="#">Sant kabir nagar, Uttar pradesh India</a>
              </li>
            </ul>
            <div className="w-full mt-5 rounded-full items-center flex gap-2 bg-zinc-50">
              <input
                className="bg-zinc-50 w-full rounded-full px-2 h-9 border-none"
                type="Search"
                placeholder="Search your course"
              />
              <a href="#" className="rounded-full">
                <div className="w-[40px] h-[40px] bg-clr rounded-full flex items-center justify-center">
                  <i class="ri-search-line"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center relative  ">
        <a
          className="text-[1.5rem] mr-9 font-medium tracking-tighter underline underline_1 underline-offset-4"
          href="https://github.com/Abhay7111/"
        >
          on our github
        </a>
      </div>
      <div className="border-t-[1px] border-zinc-700 pt-3 pb-2 flex items-center justify-center mt-40 copy_right">
        <p className="text-[0.8rem] opacity-40 font-light">
          ©Copyright 2024 by plick.Netlify.app
        </p>
      </div>
    </div>
  );
}

export default Footer;
