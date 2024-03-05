import React, { useEffect } from "react";
import Nav from "../componaints/nav";
import { Link } from "react-router-dom";
import Web_development from "./web-development";
import Footer from "../componaints/footer";
import Aidevelopment from "./AI-development";

function Courses() {
  useEffect(() => {
    const dropdownwebdevelopment = document.querySelector(
      ".dropdownwebdevelopment"
    );
    const coursesclicktodownwindow = document.querySelector(
      ".coursesclicktodownwindow"
    );
    const coursesclicktoclosewindow = document.querySelector(
      ".coursesclicktoclosewindow"
    );

    const dropdownwebdevelopment2 = document.querySelector(
      ".dropdownwebdevelopment2"
    );
    const coursesclicktodownwindow2 = document.querySelector(
      ".coursesclicktodownwindow2"
    );
    const coursesclicktoclosewindow2 = document.querySelector(
      ".coursesclicktoclosewindow2"
    );

    coursesclicktodownwindow.addEventListener("click", () => {
      dropdownwebdevelopment.style.height = "auto";
      dropdownwebdevelopment.style.marginBottom = "10vh";
      coursesclicktodownwindow.style.display = "none";
      coursesclicktoclosewindow.style.display = "block";
    });

    coursesclicktoclosewindow.addEventListener("click", () => {
      coursesclicktoclosewindow.style.display = "none";
      dropdownwebdevelopment.style.marginBottom = "0vh";
      coursesclicktodownwindow.style.display = "block";
      dropdownwebdevelopment.style.height = "0vh";
    });
    
    coursesclicktodownwindow2.addEventListener("click", () => {
      dropdownwebdevelopment2.style.height = "auto";
      dropdownwebdevelopment2.style.marginBottom = "10vh";
      coursesclicktodownwindow2.style.display = "none";
      coursesclicktoclosewindow2.style.display = "block";
    });

    coursesclicktoclosewindow2.addEventListener("click", () => {
      coursesclicktoclosewindow2.style.display = "none";
      dropdownwebdevelopment2.style.marginBottom = "0vh";
      coursesclicktodownwindow2.style.display = "block";
      dropdownwebdevelopment2.style.height = "0vh";
    });
  });

  const Coursesdata = [
    {
      insrtructor: {
        name: {
          first: "Abhay",
          last: "vishwakarma",
        },
        profile:
          "https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/414997641_2007442582972989_4343336468827169681_n.jpg?ccb=11-4&oh=01_AdR_V7tt0vZ2kNQm7mATErhbmlgW2qZK7cf-6PRazeShpA&oe=65EBF433&_nc_sid=e6ed6c&_nc_cat=102",
        dec: "Embark on a transformative journey into the dynamic world of web development with Plick Courses. Our web development curriculum is designed to equip you with the essential skills and knowledge needed to thrive in this ever-evolving field. From mastering the fundamentals of HTML, CSS, and JavaScript to exploring advanced frameworks and technologies like React, Angular, and Node.js, our courses cover the full spectrum of web development.",
        overview: "INDEPTH",
        thumbnail:
          "https://cdn.dribbble.com/users/6827757/screenshots/16129278/media/32c04a45b145c13cc543cb2c781a00f0.png?resize=320x240&vertical=center",
        links: {
          icon: {
            instagram: <i class="ri-instagram-line text-zinc-800"></i>,
            youtube: <i class="ri-youtube-line text-zinc-800"></i>,
            facebook: <i class="ri-facebook-line text-zinc-800"></i>,
            linkedin: <i class="ri-linkedin-line text-zinc-800"></i>,
          },
          link: {
            instagram: "",
            youtube: "",
            facebook: "",
            linkdin: "",
          },
        },
        courses: {
          title: "website development",
          teaching_type: "Web",
          devlopment: "development",
          attributes: {
            _1: "Tutorial",
            _2: "Web Development",
            _3: "Animation",
            _4: "Designing",
            _5: "Figma",
            _6: "React",
            _7: "JavaScript",
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
        class: {
          padding: "px-2 py-1",
          hide: "",
        },
      },
    },
    {
      insrtructor: {
        name: {
          first: "Abhay",
          last: "vishwakarma",
        },
        profile:
          "https://images.unsplash.com/photo-1630332458166-1c3bdde17665?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dec: "Embark on a transformative journey into the dynamic world of web development with Plick Courses. Our web development curriculum is designed to equip you with the essential skills and knowledge needed to thrive in this ever-evolving field. From mastering the fundamentals of HTML, CSS, and JavaScript to exploring advanced frameworks and technologies like React, Angular, and Node.js, our courses cover the full spectrum of web development.",
        overview: "INDEPTH",
        thumbnail:
          "https://cdn.dribbble.com/userupload/13405533/file/original-c5289e172229063e06dcb9d301339e16.png?resize=320x240&vertical=center",
        links: {
          icon: {
            instagram: <i class="ri-instagram-line text-zinc-800"></i>,
            youtube: <i class="ri-youtube-line text-zinc-800"></i>,
            facebook: <i class="ri-facebook-line text-zinc-800"></i>,
            linkedin: <i class="ri-linkedin-line text-zinc-800"></i>,
          },
          link: {
            instagram: "",
            youtube: "",
            facebook: "",
            linkdin: "",
          },
        },
        courses: {
          title: "Why web development ?",
          teaching_type: "Web",
          devlopment: "development",
          attributes: {
            _1: "Tutorial",
            _2: "Web Development",
            _3: "Animation",
            _4: "Designing",
            _5: "Figma",
            _6: "React",
            _7: "JavaScript",
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
        class: {
          padding: "px-2 py-1",
          hide: "",
        },
      },
    },
    {
      insrtructor: {
        name: {
          first: "Abhay",
          last: "vishwakarma",
        },
        profile:
          "https://images.unsplash.com/photo-1630332458166-1c3bdde17665?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dec: "Embark on a transformative journey into the dynamic world of web development with Plick Courses. Our web development curriculum is designed to equip you with the essential skills and knowledge needed to thrive in this ever-evolving field. From mastering the fundamentals of HTML, CSS, and JavaScript to exploring advanced frameworks and technologies like React, Angular, and Node.js, our courses cover the full spectrum of web development.",
        overview: "INDEPTH",
        thumbnail:
          "https://cdn.dribbble.com/userupload/13405533/file/original-c5289e172229063e06dcb9d301339e16.png?resize=320x240&vertical=center",
        links: {
          icon: {
            instagram: <i class="ri-instagram-line text-zinc-800"></i>,
            youtube: <i class="ri-youtube-line text-zinc-800"></i>,
            facebook: <i class="ri-facebook-line text-zinc-800"></i>,
            linkedin: <i class="ri-linkedin-line text-zinc-800"></i>,
          },
          link: {
            instagram: "",
            youtube: "",
            facebook: "",
            linkdin: "",
          },
        },
        courses: {
          title: "Why web development ?",
          teaching_type: "Web",
          devlopment: "development",
          attributes: {
            _1: "Tutorial",
            _2: "Web Development",
            _3: "Animation",
            _4: "Designing",
            _5: "Figma",
            _6: "React",
            _7: "JavaScript",
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
        class: {
          padding: "px-2 py-1",
          hide: "",
        },
      },
    },
    {
      insrtructor: {
        name: {
          first: "Abhay",
          last: "vishwakarma",
        },
        profile:
          "https://images.unsplash.com/photo-1630332458166-1c3bdde17665?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dec: "Embark on a transformative journey into the dynamic world of web development with Plick Courses. Our web development curriculum is designed to equip you with the essential skills and knowledge needed to thrive in this ever-evolving field. From mastering the fundamentals of HTML, CSS, and JavaScript to exploring advanced frameworks and technologies like React, Angular, and Node.js, our courses cover the full spectrum of web development.",
        overview: "INDEPTH",
        thumbnail:
          "https://cdn.dribbble.com/userupload/13405533/file/original-c5289e172229063e06dcb9d301339e16.png?resize=320x240&vertical=center",
        links: {
          icon: {
            instagram: <i class="ri-instagram-line text-zinc-800"></i>,
            youtube: <i class="ri-youtube-line text-zinc-800"></i>,
            facebook: <i class="ri-facebook-line text-zinc-800"></i>,
            linkedin: <i class="ri-linkedin-line text-zinc-800"></i>,
          },
          link: {
            instagram: "",
            youtube: "",
            facebook: "",
            linkdin: "",
          },
        },
        courses: {
          title: "Why web development ?",
          teaching_type: "Web",
          devlopment: "development",
          attributes: {
            _1: "Tutorial",
            _2: "Web Development",
            _3: "Animation",
            _4: "Designing",
            _5: "Figma",
            _6: "React",
            _7: "JavaScript",
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
        class: {
          padding: "px-2 py-1",
          hide: "",
        },
      },
    },
    {
      insrtructor: {
        name: {
          first: "Abhay",
          last: "vishwakarma",
        },
        profile:
          "https://images.unsplash.com/photo-1630332458166-1c3bdde17665?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dec: "Embark on a transformative journey into the dynamic world of web development with Plick Courses. Our web development curriculum is designed to equip you with the essential skills and knowledge needed to thrive in this ever-evolving field. From mastering the fundamentals of HTML, CSS, and JavaScript to exploring advanced frameworks and technologies like React, Angular, and Node.js, our courses cover the full spectrum of web development.",
        overview: "INDEPTH",
        thumbnail:
          "https://cdn.dribbble.com/userupload/13405533/file/original-c5289e172229063e06dcb9d301339e16.png?resize=320x240&vertical=center",
        links: {
          icon: {
            instagram: <i class="ri-instagram-line text-zinc-800"></i>,
            youtube: <i class="ri-youtube-line text-zinc-800"></i>,
            facebook: <i class="ri-facebook-line text-zinc-800"></i>,
            linkedin: <i class="ri-linkedin-line text-zinc-800"></i>,
          },
          link: {
            instagram: "",
            youtube: "",
            facebook: "",
            linkdin: "",
          },
        },
        courses: {
          title: "Why web development ?",
          teaching_type: "Web",
          devlopment: "development",
          attributes: {
            _1: "Tutorial",
            _2: "Web Development",
            _3: "Animation",
            _4: "Designing",
            _5: "Figma",
            _6: "React",
            _7: "JavaScript",
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
        class: {
          padding: "px-2 py-1",
          hide: "",
        },
      },
    },
  ];
  const aidata = [
    {
      insrtructor: {
        name: {
          first: "Abhay",
          last: "vishwakarma",
        },
        profile:
          "https://cdn.dribbble.com/userupload/12330580/file/original-de6b46ad333c035e5af24a163492a1bc.png?resize=320x240&vertical=center",
        dec: "Embark on a transformative journey into the dynamic world of web development with Plick Courses. Our web development curriculum is designed to equip you with the essential skills and knowledge needed to thrive in this ever-evolving field. From mastering the fundamentals of HTML, CSS, and JavaScript to exploring advanced frameworks and technologies like React, Angular, and Node.js, our courses cover the full spectrum of web development.",
        overview: "INDEPTH",
        thumbnail:
          "https://cdn.dribbble.com/userupload/12394954/file/original-5b21a8bcc12efaee4ad36b7db50c61de.jpg?crop=0x0-2200x1650&resize=320x240&vertical=center",
        links: {
          icon: {
            instagram: <i class="ri-instagram-line text-zinc-800"></i>,
            youtube: <i class="ri-youtube-line text-zinc-800"></i>,
            facebook: <i class="ri-facebook-line text-zinc-800"></i>,
            linkedin: <i class="ri-linkedin-line text-zinc-800"></i>,
          },
          link: {
            instagram: "",
            youtube: "",
            facebook: "",
            linkdin: "",
          },
        },
        courses: {
          title: "AI",
          teaching_type: "AI",
          devlopment: "",
          attributes: {
            _1: "Tutorial",
            _2: "AI",
            _3: "Build_AI",
            _4: "Python",
            _5: "Java",
            _6: "Learning",
            _7: "",
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
        class: {
          padding: "px-2 py-1",
          hide: "",
        },
      },
    },
    {
      insrtructor: {
        name: {
          first: "Abhay",
          last: "vishwakarma",
        },
        profile:
          "https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/414997641_2007442582972989_4343336468827169681_n.jpg?ccb=11-4&oh=01_AdR_V7tt0vZ2kNQm7mATErhbmlgW2qZK7cf-6PRazeShpA&oe=65EBF433&_nc_sid=e6ed6c&_nc_cat=102",
        dec: "Embark on a transformative journey into the dynamic world of web development with Plick Courses. Our web development curriculum is designed to equip you with the essential skills and knowledge needed to thrive in this ever-evolving field. From mastering the fundamentals of HTML, CSS, and JavaScript to exploring advanced frameworks and technologies like React, Angular, and Node.js, our courses cover the full spectrum of web development.",
        overview: "INDEPTH",
        thumbnail:
          "https://cdn.dribbble.com/users/6827757/screenshots/16129278/media/32c04a45b145c13cc543cb2c781a00f0.png?resize=320x240&vertical=center",
        links: {
          icon: {
            instagram: <i class="ri-instagram-line text-zinc-800"></i>,
            youtube: <i class="ri-youtube-line text-zinc-800"></i>,
            facebook: <i class="ri-facebook-line text-zinc-800"></i>,
            linkedin: <i class="ri-linkedin-line text-zinc-800"></i>,
          },
          link: {
            instagram: "",
            youtube: "",
            facebook: "",
            linkdin: "",
          },
        },
        courses: {
          title: "AI",
          teaching_type: "AI",
          devlopment: "",
          attributes: {
            _1: "Tutorial",
            _2: "AI",
            _3: "Build_AI",
            _4: "Python",
            _5: "Java",
            _6: "Learning",
            _7: "",
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
        class: {
          padding: "px-2 py-1",
          hide: "",
        },
      },
    },
    {
      insrtructor: {
        name: {
          first: "Abhay",
          last: "vishwakarma",
        },
        profile:
          "https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/414997641_2007442582972989_4343336468827169681_n.jpg?ccb=11-4&oh=01_AdR_V7tt0vZ2kNQm7mATErhbmlgW2qZK7cf-6PRazeShpA&oe=65EBF433&_nc_sid=e6ed6c&_nc_cat=102",
        dec: "Embark on a transformative journey into the dynamic world of web development with Plick Courses. Our web development curriculum is designed to equip you with the essential skills and knowledge needed to thrive in this ever-evolving field. From mastering the fundamentals of HTML, CSS, and JavaScript to exploring advanced frameworks and technologies like React, Angular, and Node.js, our courses cover the full spectrum of web development.",
        overview: "INDEPTH",
        thumbnail:
          "https://cdn.dribbble.com/users/6827757/screenshots/16129278/media/32c04a45b145c13cc543cb2c781a00f0.png?resize=320x240&vertical=center",
        links: {
          icon: {
            instagram: <i class="ri-instagram-line text-zinc-800"></i>,
            youtube: <i class="ri-youtube-line text-zinc-800"></i>,
            facebook: <i class="ri-facebook-line text-zinc-800"></i>,
            linkedin: <i class="ri-linkedin-line text-zinc-800"></i>,
          },
          link: {
            instagram: "",
            youtube: "",
            facebook: "",
            linkdin: "",
          },
        },
        courses: {
          title: "AI",
          teaching_type: "AI",
          devlopment: "",
          attributes: {
            _1: "Tutorial",
            _2: "AI",
            _3: "Build_AI",
            _4: "Python",
            _5: "Java",
            _6: "Learning",
            _7: "",
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
        class: {
          padding: "px-2 py-1",
          hide: "",
        },
      },
    },
    {
      insrtructor: {
        name: {
          first: "Abhay",
          last: "vishwakarma",
        },
        profile:
          "https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/414997641_2007442582972989_4343336468827169681_n.jpg?ccb=11-4&oh=01_AdR_V7tt0vZ2kNQm7mATErhbmlgW2qZK7cf-6PRazeShpA&oe=65EBF433&_nc_sid=e6ed6c&_nc_cat=102",
        dec: "Embark on a transformative journey into the dynamic world of web development with Plick Courses. Our web development curriculum is designed to equip you with the essential skills and knowledge needed to thrive in this ever-evolving field. From mastering the fundamentals of HTML, CSS, and JavaScript to exploring advanced frameworks and technologies like React, Angular, and Node.js, our courses cover the full spectrum of web development.",
        overview: "INDEPTH",
        thumbnail:
          "https://cdn.dribbble.com/users/6827757/screenshots/16129278/media/32c04a45b145c13cc543cb2c781a00f0.png?resize=320x240&vertical=center",
        links: {
          icon: {
            instagram: <i class="ri-instagram-line text-zinc-800"></i>,
            youtube: <i class="ri-youtube-line text-zinc-800"></i>,
            facebook: <i class="ri-facebook-line text-zinc-800"></i>,
            linkedin: <i class="ri-linkedin-line text-zinc-800"></i>,
          },
          link: {
            instagram: "",
            youtube: "",
            facebook: "",
            linkdin: "",
          },
        },
        courses: {
          title: "AI",
          teaching_type: "AI",
          devlopment: "",
          attributes: {
            _1: "Tutorial",
            _2: "AI",
            _3: "Build_AI",
            _4: "Python",
            _5: "Java",
            _6: "Learning",
            _7: "",
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
        class: {
          padding: "px-2 py-1",
          hide: "",
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
      <div>
        <div className=" w-full mt-14 overflow-hidden">
          <div className=" w-full h-16 z-50 px-6 border-t border-b flex items-center justify-between dropdownwindowwebdevement hover_bgbefore">
            <h1 className="text-[1.5rem]">Web-development</h1>
            <div className="scale-[2] pr-2">
              <i class="ri-arrow-down-s-fill font-medium coursesclicktodownwindow hidden"></i>
              <i class="ri-arrow-right-s-fill text-blue-500 font-medium coursesclicktoclosewindow "></i>
            </div>
          </div>
          <div className=" overflow-hidden relative w-full h-auto dropdownwebdevelopment ">
            <div className="w-full flex items-start justify-center gap-5 mt-10 px-5 flex-wrap relative">
              {Coursesdata.map((item, index) => (
                <Web_development Coursesdata={item} />
              ))}
            </div>
          </div>
        </div>
        <div className=" w-full overflow-hidden">
          <div className=" w-full h-16 z-50 px-6 border-t border-b flex items-center justify-between dropdownwindowwebdevement2 hover_bgbefore">
            <h1 className="text-[1.5rem]">AI-development</h1>
            <div className="scale-[2] pr-2">
              <i class="ri-arrow-down-s-fill font-medium coursesclicktodownwindow2 "></i>
              <i class="ri-arrow-right-s-fill text-blue-500 font-medium coursesclicktoclosewindow2 hidden "></i>
            </div>
          </div>
          <div className=" overflow-hidden relative w-full h-0 dropdownwebdevelopment2 ">
            <div className="w-full flex items-start justify-center gap-5 mt-10 px-5 flex-wrap relative">
              {aidata.map((item, index) => (
                <Aidevelopment aidata={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mb-32 flex items-center justify-between">
        <div className="left w-fit px-10">
          <p className="hvr_line text-4xl leading-none tracking-tighter font-normal ml-10 mt-32 opacity-70">
            Start your journey <br /> today <br /> to boost your skills.
          </p>
        </div>
        <div className="right w-1/3 pr-10 mt-20">
          <p className="hvr_line line-clamp-5 text-4xl font-medium tracking-wide opacity-75">
            You have the power within to achieve greatness. Embrace it, pursue
            your dreams relentlessly.
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
