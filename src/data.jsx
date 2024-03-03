import React from "react";
import Home from "./componaints/home";
import Nav from "./componaints/nav";
import Cards from "./componaints/cards";
import "./App.css";
import Teacherspage from "./componaints/teacherspage";
import Projects from "./componaints/projects";
import Links from "./componaints/links";
import Footer from "./componaints/footer";
import Card_pop from "./componaints/card_pop";
import { Link } from "react-router-dom";
import Courses from "./all_page/Courses";
import Features from "./componaints/features";

function Data() {
  const userdata = [
    {
      name: {
        first: "Abhay",
        middle: " ",
        last: "Vishwakarma",
        ID: "5423",
      },
      post: {
        massage: "This is testing.",
        photo: "",
        course: "web-devlopment",
      },
      get: {
        video: "",
      },
      Contact: {
        email: "gaamagaming@gmail.com",
        phone: "+91 7408638739",
        whatsapp: "+63 94904691",
      },
    },
  ];
  const homepage = [
    {
      dis: "signifies achieving expertise in navigating, utilizing, and creating content for the internet. It involves understanding web technologies, digital marketing, design principles, and effective communication strategies in a constantly evolving digital landscape",
    },
  ];
  const card = [
    // 1st teacher card
    {
      name: {
        first: "Abhay",
        last: "Vishwakarma",
      },
      address: {
        location: "Khalilabad",
        city: "khalilabad",
        dist: "Sant kabir nagar",
        state: "Uttat pradesh",
      },
      teaching_type: "web",
      development: "development",
      course: {
        _1: "HTML",
        _2: "CSS",
        _3: "JavaScript",
        _4: "React.js",
        _5: "Node.js",
        _6: "Express.js",
        _7: "",
        _8: "",
        _9: "",
        _10: "",
      },
      about:
        "Embark on a journey into the world of web development with our comprehensive course. Learn HTML, CSS, JavaScript, and more as you master the tools and techniques to create stunning websites and dynamic web applications. Whether you're a beginner or looking to enhance your skills, our course offers hands-on experience and expert guidance to help you succeed in the ever-evolving field of web development.",
      link: {
        profile_photo:
          "https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/414997641_2007442582972989_4343336468827169681_n.jpg?ccb=11-4&oh=01_AdSb5W0ELODLhtcGZFRJYu7x52xA9fpTCM9lUvES1jyInQ&oe=65ED7DF3&_nc_sid=e6ed6c&_nc_cat=102",
        icons: {
          instagram: <i class="ri-instagram-fill"></i>,
          facebook: <i class="ri-facebook-circle-fill"></i>,
          youtube: <i class="ri-youtube-fill"></i>,
          telegram: <i class="ri-telegram-fill"></i>,
          whatsapp: <i class="ri-whatsapp-fill"></i>,
          linkedin: <i class="ri-linkedin-box-fill"></i>,
          view: <i class="ri-eye-fill"></i>,
          crown: <i class="ri-vip-crown-fill"></i>,
        },
        post: {
          video: "",
          image: "",
          total: "02",
        },
      },
      styling: {
        class: {
          button: "",
          open_window: "",
          hover: "hover:scale-[1.03]",
          shadow: "",
          scale: "scale-[1]",
        },
        color: "#F870C2",
        type: "rounded-xl",
      },
    },
    // 2nd teacher card
    {
      name: {
        first: "Abhay",
        last: "Vishwakarma",
      },
      address: {
        location: "Khalilabad",
        city: "khalilabad",
        dist: "Sant kabir nagar",
        state: "Uttat pradesh",
      },
      teaching_type: "web",
      development: "development",
      course: {
        _1: "HTML",
        _2: "CSS",
        _3: "JavaScript",
        _4: "React.js",
        _5: "Node.js",
        _6: "Express.js",
        _7: "",
        _8: "",
        _9: "",
        _10: "",
      },
      about:
        "Embark on a journey into the world of web development with our comprehensive course. Learn HTML, CSS, JavaScript, and more as you master the tools and techniques to create stunning websites and dynamic web applications. Whether you're a beginner or looking to enhance your skills, our course offers hands-on experience and expert guidance to help you succeed in the ever-evolving field of web development.",
      link: {
        profile_photo:
          "https://images.unsplash.com/photo-1664382953518-4a664ab8a8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHRlYWNoZXIlMjBwcm9maWxlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
        icons: {
          instagram: <i class="ri-instagram-fill"></i>,
          facebook: <i class="ri-facebook-circle-fill"></i>,
          youtube: <i class="ri-youtube-fill"></i>,
          telegram: <i class="ri-telegram-fill"></i>,
          whatsapp: <i class="ri-whatsapp-fill"></i>,
          linkedin: <i class="ri-linkedin-box-fill"></i>,
          view: <i class="ri-eye-fill"></i>,
        },
        post: {
          video: "",
          image: "",
          total: "02",
        },
      },
      styling: {
        class: {
          button: "",
          open_window: "",
          hover: "",
          shadow: "",
          scale: "",
        },
        color: "#F870C2",
        type: "rounded-xl",
      },
    },
    // 3rd teacher card
    {
      name: {
        first: "sohan",
        last: "",
      },
      address: {
        location: "Khalilabad",
        city: "khalilabad",
        dist: "Sant kabir nagar",
        state: "Uttat pradesh",
      },
      teaching_type: "12th",
      development: "development",
      course: {
        _1: "Hindi",
        _2: "English",
        _3: "Mathmatics",
        _4: "",
        _5: "",
        _6: "",
        _7: "",
        _8: "",
        _9: "",
        _10: "",
      },
      about:
        "Welcome to our 12th Board Courses Hub! Get ready to ace your exams with our comprehensive study materials and expert guidance. From in-depth subject tutorials to practice tests, we've got everything you need to succeed. Let's embark on this academic journey together and make your 12th board exams a breeze!",
      link: {
        profile_photo:
          "https://images.unsplash.com/photo-1523307730650-594bc63f9d67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRlYWNoZXIlMjBwcm9maWxlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
        icons: {
          instagram: <i class="ri-instagram-fill"></i>,
          facebook: <i class="ri-facebook-circle-fill"></i>,
          youtube: <i class="ri-youtube-fill"></i>,
          telegram: <i class="ri-telegram-fill"></i>,
          whatsapp: <i class="ri-whatsapp-fill"></i>,
          linkedin: <i class="ri-linkedin-box-fill"></i>,
          view: <i class="ri-eye-fill"></i>,
        },
        post: {
          video: "",
          image: "",
          total: "03",
        },
      },
      styling: {
        class: {
          button: "",
          open_window: "",
          hover: "",
          shadow: "",
          scale: "hover:scale-[1.04] cursor-pointer",
        },
        color: "#F870C2",
        type: "rounded-xl",
      },
    },
    // 4th teacher card
    {
      name: {
        first: "Abhay",
        last: "Vishwakarma",
      },
      address: {
        location: "Khalilabad",
        city: "khalilabad",
        dist: "Sant kabir nagar",
        state: "Uttat pradesh",
      },
      teaching_type: "web",
      development: "development",
      course: {
        _1: "HTML",
        _2: "CSS",
        _3: "JavaScript",
        _4: "React.js",
        _5: "Node.js",
        _6: "Express.js",
        _7: "",
        _8: "",
        _9: "",
        _10: "",
      },
      about:
        "Embark on a journey into the world of web development with our comprehensive course. Learn HTML, CSS, JavaScript, and more as you master the tools and techniques to create stunning websites and dynamic web applications. Whether you're a beginner or looking to enhance your skills, our course offers hands-on experience and expert guidance to help you succeed in the ever-evolving field of web development.",
      link: {
        profile_photo:
          "https://images.unsplash.com/photo-1518977081765-9b1b0c2538e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHx0ZWFjaGVyJTIwcHJvZmlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        icons: {
          instagram: <i class="ri-instagram-fill"></i>,
          facebook: <i class="ri-facebook-circle-fill"></i>,
          youtube: <i class="ri-youtube-fill"></i>,
          telegram: <i class="ri-telegram-fill"></i>,
          whatsapp: <i class="ri-whatsapp-fill"></i>,
          linkedin: <i class="ri-linkedin-box-fill"></i>,
          view: <i class="ri-eye-fill"></i>,
        },
        post: {
          video: "",
          image: "",
          total: "02",
        },
      },
      styling: {
        class: {
          button: "",
          open_window: "",
          hover: "",
          shadow: "",
          scale: "",
        },
        color: "#F870C2",
        type: "rounded-xl",
      },
    },
    // 5th teacher card
    {
      name: {
        first: "Abhay",
        last: "Vishwakarma",
      },
      address: {
        location: "Khalilabad",
        city: "khalilabad",
        dist: "Sant kabir nagar",
        state: "Uttat pradesh",
      },
      teaching_type: "web",
      development: "development",
      course: {
        _1: "HTML",
        _2: "CSS",
        _3: "JavaScript",
        _4: "React.js",
        _5: "Node.js",
        _6: "Express.js",
        _7: "",
        _8: "",
        _9: "",
        _10: "",
      },
      about:
        "Embark on a journey into the world of web development with our comprehensive course. Learn HTML, CSS, JavaScript, and more as you master the tools and techniques to create stunning websites and dynamic web applications. Whether you're a beginner or looking to enhance your skills, our course offers hands-on experience and expert guidance to help you succeed in the ever-evolving field of web development.",
      link: {
        profile_photo:
          "https://images.unsplash.com/photo-1517702145080-e4a4d91435bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHx0ZWFjaGVyJTIwcHJvZmlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        icons: {
          instagram: <i class="ri-instagram-fill"></i>,
          facebook: <i class="ri-facebook-circle-fill"></i>,
          youtube: <i class="ri-youtube-fill"></i>,
          telegram: <i class="ri-telegram-fill"></i>,
          whatsapp: <i class="ri-whatsapp-fill"></i>,
          linkedin: <i class="ri-linkedin-box-fill"></i>,
          view: <i class="ri-eye-fill"></i>,
        },
        post: {
          video: "",
          image: "",
          total: "02",
        },
      },
      styling: {
        class: {
          button: "",
          open_window: "",
          hover: "",
          shadow: "",
          scale: "",
        },
        color: "#F870C2",
        type: "rounded-full",
      },
    },
    // 6th teacher card
    {
      name: {
        first: "Abhay",
        last: "Vishwakarma",
      },
      address: {
        location: "Khalilabad",
        city: "khalilabad",
        dist: "Sant kabir nagar",
        state: "Uttat pradesh",
      },
      teaching_type: "web",
      development: "development",
      course: {
        _1: "HTML",
        _2: "CSS",
        _3: "JavaScript",
        _4: "React.js",
        _5: "Node.js",
        _6: "Express.js",
        _7: "",
        _8: "",
        _9: "",
        _10: "",
      },
      about:
        "Embark on a journey into the world of web development with our comprehensive course. Learn HTML, CSS, JavaScript, and more as you master the tools and techniques to create stunning websites and dynamic web applications. Whether you're a beginner or looking to enhance your skills, our course offers hands-on experience and expert guidance to help you succeed in the ever-evolving field of web development.",
      link: {
        profile_photo:
          "https://images.unsplash.com/photo-1517702145080-e4a4d91435bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHx0ZWFjaGVyJTIwcHJvZmlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
        icons: {
          instagram: <i class="ri-instagram-fill"></i>,
          facebook: <i class="ri-facebook-circle-fill"></i>,
          youtube: <i class="ri-youtube-fill"></i>,
          telegram: <i class="ri-telegram-fill"></i>,
          whatsapp: <i class="ri-whatsapp-fill"></i>,
          linkedin: <i class="ri-linkedin-box-fill"></i>,
          view: <i class="ri-eye-fill"></i>,
        },
        post: {
          video: "",
          image: "",
          total: "02",
        },
      },
      styling: {
        class: {
          button: "",
          open_window: "",
          hover: "hover:scale-[1.03]",
          shadow: "",
          scale: "",
        },
        color: "#F870C2",
        type: "rounded-full",
      },
    },
  ];
  const teacher = [
    {
      name: "Abhay vishwakarma",
      courses: "web-devlopment",
      links: {
        profile:
          "https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/414997641_2007442582972989_4343336468827169681_n.jpg?ccb=11-4&oh=01_AdR_V7tt0vZ2kNQm7mATErhbmlgW2qZK7cf-6PRazeShpA&oe=65EBF433&_nc_sid=e6ed6c&_nc_cat=102",
        goto: "",
      },
    },
    {
      name: "Rohan",
      courses: "AI",
      links: {
        profile:
          "https://images.unsplash.com/photo-1630332458166-1c3bdde17665?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        goto: "",
      },
    },
    {
      name: "Alisha Rajput",
      courses: "machine learning",
      links: {
        profile:
          "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        goto: "",
      },
    },
    {
      name: "abhay vishwakarma",
      courses: "C++",
      links: {
        profile:
          "https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI4fHx0ZWFjaGVyfGVufDB8fDB8fHww",
        goto: "",
      },
    },
    {
      name: "sumit",
      courses: "Android-devlopment",
      links: {
        profile:
          "https://images.unsplash.com/photo-1531538512164-e6c51ea63d20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjg4fHx0ZWFjaGVyfGVufDB8fDB8fHww",
        goto: "",
      },
    },
  ];
  const projrct = [
    {
      icon: {
        nextpage: <i class="ri-code-s-slash-fill"></i>,
      },
    },
  ];
  const links = [
    {
      name: "Unloking Digital Mastery: Courses for the Modern Web",
      url: "https://abhay7111.github.io/images",
      icon: {
        goto: <i class="ri-code-s-slash-fill"></i>,
        numbering: <i class="ri-checkbox-circle-fill"></i>,
      },
    },
    {
      name: "Web Wizardry: Dynamic Courses for Digital Domination",
      url: "",
      icon: {
        goto: <i class="ri-code-s-slash-fill"></i>,
        numbering: <i class="ri-checkbox-circle-fill"></i>,
      },
    },
    {
      name: "Online Excellence Ancademy: Empowering Courses for Success",
      url: "",
      icon: {
        goto: <i class="ri-code-s-slash-fill"></i>,
        numbering: <i class="ri-checkbox-circle-fill"></i>,
      },
    },
    {
      name: "Digital Skills Institute: Cutting-Edge Courses for Tommorrow's Leaders",
      url: "",
      icon: {
        goto: <i class="ri-code-s-slash-fill"></i>,
        numbering: <i class="ri-checkbox-circle-fill"></i>,
      },
    },
    {
      name: "Digital Proficiency Pathways: Tailored Courses for Online Success",
      url: "",
      icon: {
        goto: <i class="ri-code-s-slash-fill"></i>,
        numbering: <i class="ri-checkbox-circle-fill"></i>,
      },
    },
  ];
  return (
    <div className=" overflow-hidden w-full">
      <div>
        <div className="w-full"><Nav /></div>
      </div>
      <div>
        {homepage.map((item, index) => (
          <Home homepage={item} />
        ))}
        <div className=" px-10 flex gap-10 flex-wrap items-start justify-center relative">
          <div className=" mb-12 w-full flex items-center justify-between">
            <h1 className=" font-bold text-xl">Popular Subjects</h1>
            <Link to="./Courses"><button
              type="button"
              className="py-[6px] font-light text-[1.2vw] px-5 bg-[#F870C2] rounded-r-[30px] rounded-s-[100px] dark-clr "
            >
              All courses
              <span className="ml-1">
                <i class="ri-logout-circle-r-line dark-clr "></i>
              </span>
            </button></Link>
          </div>
          {card.map((item, index) => (
            <Cards card={item} />
          ))}
        </div>
        <div className="pt-16 flex flex-col items-center px-12">
          <div className=" w-full text-center text-4xl font-normal leading-tighter">
            Meet the teacher who <br /> teach you online
          </div>
          <div className=" max-w-[90vw] h-auto mt-10 flex flex-row items-center gap-7 justify-start scroll-smooth">
            {teacher.map((item, index) => (
              <Teacherspage teacher={item} />
            ))}
          </div>
        </div>
        <div>
          <Projects />
        </div>
        <div>
          {links.map((item, index) => (
            <Links links={item} />
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <Features/>
    </div>
  );
}

export default Data;
