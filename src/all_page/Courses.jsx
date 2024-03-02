import React from "react";
import Nav from "../componaints/nav";
import { Link } from "react-router-dom";
import Course_page from "./course_page";
import Footer from "../componaints/footer";

function Courses() {
  const Coursesdata = [
    {
      insrtructor: {
        name: {
          first: "Abhay",
          last: "vishwakarma",
        },
        overview:'INDEPTH',
        thumbnail:
          "https://cdn.dribbble.com/users/6827757/screenshots/16129278/media/32c04a45b145c13cc543cb2c781a00f0.png?resize=320x240&vertical=center",
        courses: {
          title: "Why web development ?",
          teaching_type: "Web",
          devlopment: "development",
          attributes: {
            _1: "Tutorial",
            _2: "Web Development",
            _3: "Animation",
            _4: "Designing",
            _5:'Figma',
            _6:'React',
            _7:'JavaScript',
          },
          subjects: {
            _1: "HTML",
            _2: "CSS",
            _3: "JavaScript",
            _4: "React.js",
            _5: "Node.js",
            _6: "Express.js",
            _07: "",
            _08: "",
            _09: "",
            _10: "",
          },
        },
        address: {
          location: "Khalilabad",
          city: "khalilabad",
          dist: "Sant kabir nagar",
          state: "Uttat pradesh",
        },
        about_course: "",
        price: "FREE",
        class:{
          padding:'px-2 py-1',
          hide:'',
        },
      },
    },
    {
      insrtructor: {
        name: {
          first: "Abhay",
          last: "vishwakarma",
        },
        overview:'designe',
        thumbnail:
          "https://cdn.dribbble.com/users/8953545/screenshots/18563309/media/56643ab68608be6d418c535bbb833f55.png?resize=320x240&vertical=center",
        courses: {
          title: "Lets designe a web page",
          teaching_type: "Web",
          devlopment: "development",
          attributes: {
            _1: "Normal",
            _2: "Web-Devlopment",
            _3: "Figma",
            _4: "Designing",
            _5: "Canva",
            _6: "Mind-maping",
            _7: "Scatching",
          },
          subjects: {
            _1: "HTML",
            _2: "CSS",
            _3: "JavaScript",
            _4: "React.js",
            _5: "Node.js",
            _6: "Express.js",
            _07: "",
            _08: "",
            _09: "",
            _10: "",
          },
        },
        address: {
          location: "Khalilabad",
          city: "khalilabad",
          dist: "Sant kabir nagar",
          state: "Uttat pradesh",
        },
        about_course: "",
        price: "FREE",
        class:{
          padding:'px-2 py-1',
          hide:'',
        },
      },
    },
    {
      insrtructor: {
        name: {
          first: "Abhay",
          last: "vishwakarma",
        },
        overview:'INDEPTH',
        thumbnail:
          "https://cdn.dribbble.com/users/7856250/screenshots/15837287/media/2f310b78d410e5c7336144341bd3b7f4.png?resize=320x240&vertical=center",
        courses: {
          title: "Let's clone google drive",
          teaching_type: "web",
          devlopment: "development",
          attributes: {
            _1: "HTML",
            _2: "CSS",
            _3: "JavaScript",
            _4: "Remix-icon",
            _5: "Google-Drive",
            _6: "Goodlefont",
            _7: "Pixabuy",
          },
          subjects: {
            _1: "HTML",
            _2: "CSS",
            _3: "JavaScript",
            _4: "React.js",
            _5: "Node.js",
            _6: "Express.js",
            _07: "",
            _08: "",
            _09: "",
            _10: "",
          },
        },
        address: {
          location: "Khalilabad",
          city: "khalilabad",
          dist: "Sant kabir nagar",
          state: "Uttat pradesh",
        },
        about_course: "",
        price: "FREE",
        class:{
          padding:'px-2 py-1',
          hide:'',
        },
      },
    },
    {
      insrtructor: {
        name: {
          first: "Abhay",
          last: "vishwakarma",
        },
        overview:'INDEPTH',
        thumbnail:
          "https://cdn.dribbble.com/userupload/4381442/file/original-3d10e6e61f58cd48f99d610e7a62dc0e.png?resize=1024x768",
        courses: {
          title: "Basice of UI/UX designe",
          teaching_type: "UI/UX",
          devlopment: "development",
          attributes: {
            _1: "UI/UX",
            _2: "Web-Development",
            _3: "Figma",
            _4: "Canva",
            _5: "Paint",
            _6: "Photoshop",
            _7: "illustration",
          },
          subjects: {
            _1: "HTML",
            _2: "CSS",
            _3: "JavaScript",
            _4: "React.js",
            _5: "Node.js",
            _6: "Express.js",
            _07: "",
            _08: "",
            _09: "",
            _10: "",
          },
        },
        address: {
          location: "Khalilabad",
          city: "khalilabad",
          dist: "Sant kabir nagar",
          state: "Uttat pradesh",
        },
        about_course: "",
        price: "FREE",
        class:{
          padding:'px-2 py-1',
          hide:'',
        },
      },
    },
  ];
  return (
    <div className="h-screen">
      <Nav />
      <div className="w-full text-[1em] text-zinc-400 font-light flex flex-col items-center justify-center tracking-widest leading-none pt-10">
        Lets build our first program with
        <span className="text-9xl tracking-tighter font-semibold">
          PLICK<span className="text-8xl">&</span>CODE
        </span>
      </div>
      <div className="w-full flex items-start justify-center gap-9 mt-20 px-32 flex-wrap">
        {Coursesdata.map((item, index) => (
          <Course_page Coursesdata={item} />
        ))}
      </div>
      <div className="w-full mb-32 flex items-center justify-between">
        <div className="left w-fit px-10">
          <p className="text-4xl leading-none tracking-tighter font-normal ml-10 mt-32 opacity-70">
            Start your journey <br /> today <br /> to boost your skills.
          </p>
        </div>
        <div className="right w-1/3 pr-10 mt-20">
          <p className=" line-clamp-5 text-4xl font-medium tracking-wide opacity-75">
          You have the power within to achieve greatness. Embrace it, pursue your dreams relentlessly.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Courses;
