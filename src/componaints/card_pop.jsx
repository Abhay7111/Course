import React, {useEffect} from 'react'

function Card_pop({card}) {
  useEffect((e)=>{
    const course_overview = document.querySelector('.course_overview');
    const course_overview_02 = document.querySelector('.course_overview_02');
    const course_overview_03 = document.querySelector('.course_overview_03');
    
    const courses = document.querySelector('.Courses');
    const post = document.querySelector('.post');
    const projects = document.querySelector('.projects');
    const social_media = document.querySelector('.social_media');
    const about_him = document.querySelector('.about_him');
    const profile = document.querySelector('.profile');

    const courses_02 = document.querySelector('.Courses_02');
    const post_02 = document.querySelector('.post_02');
    const projects_02 = document.querySelector('.projects_02');
    const social_media_02 = document.querySelector('.social_media_02');
    const about_him_02 = document.querySelector('.about_him_02');
    const profile_02 = document.querySelector('.profile_02');

    const courses_03 = document.querySelector('.Courses_03');
    const post_03 = document.querySelector('.post_03');
    const projects_03 = document.querySelector('.projects_03');
    const social_media_03 = document.querySelector('.social_media_03');
    const about_him_03 = document.querySelector('.about_him_03');
    const profile_03 = document.querySelector('.profile_03');

    
    const post_overview = document.querySelector('.post_overview');
    const projects_overview = document.querySelector('.projects_overview');
    const social_media_overview = document.querySelector('.social_media_overview');
    const about_him_overview = document.querySelector('.about_him_overview');
    const profle_overview = document.querySelector('.profle_overview');
    
    const post_overview_02 = document.querySelector('.post_overview');
    const projects_overview_02 = document.querySelector('.projects_overview');
    const social_media_overview_02 = document.querySelector('.social_media_overview');
    const about_him_overview_02 = document.querySelector('.about_him_overview');
    const profle_overview_02 = document.querySelector('.profle_overview');
    
    const post_overview_03 = document.querySelector('.post_overview');
    const projects_overview_03 = document.querySelector('.projects_overview');
    const social_media_overview_03 = document.querySelector('.social_media_overview');
    const about_him_overview_03 = document.querySelector('.about_him_overview');
    const profle_overview_03 = document.querySelector('.profle_overview');
    
    const first_window = document.querySelector('.first_window');
    const second_window = document.querySelector('.second_window');
    const thired_window = document.querySelector('.thired_window');
    
    const open_window_01 = document.querySelector('.open_window_01');
    const open_window_02 = document.querySelector('.open_window_02');
    const open_window_03 = document.querySelector('.open_window_03');

    const close_window_01 = document.querySelector('.close_window_01');
    const close_window_02 = document.querySelector('.close_window_02');
    const close_window_03 = document.querySelector('.close_window_03');
    const main_pop = document.querySelector('.main_pop');

    main_pop.style.display = "none"

    close_window_01.addEventListener("click", function(){
      open_window_01.style.display = "none"
      open_window_02.style.display = "none"
      open_window_03.style.display = "none"
      main_pop.style.display = "none"
    });
    close_window_02.addEventListener("click", function(){
      open_window_01.style.display = "none"
      open_window_02.style.display = "none"
      open_window_03.style.display = "none"
      main_pop.style.display = "none"
    });
    close_window_03.addEventListener("click", function(){
      open_window_01.style.display = "none"
      open_window_02.style.display = "none"
      open_window_03.style.display = "none"
      main_pop.style.display = "none"
    });

    first_window.addEventListener("click", function(){
      open_window_01.style.display = "block"
      main_pop.style.display = "block"
    });
    second_window.addEventListener("click", function(){
      open_window_02.style.display = "block"
      main_pop.style.display = "block"
    });
    thired_window.addEventListener("click", function(){
      open_window_03.style.display = "block"
      main_pop.style.display = "block"
    });


    courses.addEventListener("click", function(){
      course_overview.style.display = "block"
      post_overview.style.display = "none"
      projects_overview.style.display = "none"
      social_media_overview.style.display = "none"
      about_him_overview.style.display = "none"
      profle_overview.style.display = "none"

    });
    post.addEventListener("click", function(){
      course_overview.style.display = "none"
      post_overview.style.display = "block"
      projects_overview.style.display = "none"
      social_media_overview.style.display = "none"
      about_him_overview.style.display = "none"
      profle_overview.style.display = "none"

    });
    projects.addEventListener("click", function(){
      course_overview.style.display = "none"
      post_overview.style.display = "none"
      projects_overview.style.display = "block"
      social_media_overview.style.display = "none"
      about_him_overview.style.display = "none"
      profle_overview.style.display = "none"

    });
    social_media.addEventListener("click", function(){
      course_overview.style.display = "none"
      post_overview.style.display = "none"
      projects_overview.style.display = "none"
      social_media_overview.style.display = "block"
      about_him_overview.style.display = "none"
      profle_overview.style.display = "none"

    });
    about_him.addEventListener("click", function(){
      course_overview.style.display = "none"
      post_overview.style.display = "none"
      projects_overview.style.display = "none"
      social_media_overview.style.display = "none"
      about_him_overview.style.display = "block"
      profle_overview.style.display = "none"

    });
    profile.addEventListener("click", function(){
      course_overview_02.style.display = "none"
      post_overview_02.style.display = "none"
      projects_overview_02.style.display = "none"
      social_media_overview_02.style.display = "none"
      about_him_overview_02.style.display = "none"
      profle_overview_02.style.display = "block"
    });
    
    courses_02.addEventListener("click", function(){
      course_overview_02.style.display = "block"
      post_overview_02.style.display = "none"
      projects_overview_02.style.display = "none"
      social_media_overview_02.style.display = "none"
      about_him_overview_02.style.display = "none"
      profle_overview_02.style.display = "none"

    });
    post_02.addEventListener("click", function(){
      course_overview_02.style.display = "none"
      post_overview_02.style.display = "block"
      projects_overview_02.style.display = "none"
      social_media_overview_02.style.display = "none"
      about_him_overview_02.style.display = "none"
      profle_overview_02.style.display = "none"

    });
    projects_02.addEventListener("click", function(){
      course_overview_02.style.display = "none"
      post_overview_02.style.display = "none"
      projects_overview_02.style.display = "block"
      social_media_overview_02.style.display = "none"
      about_him_overview_02.style.display = "none"
      profle_overview_02.style.display = "none"

    });
    social_media_02.addEventListener("click", function(){
      course_overview_02.style.display = "none"
      post_overview_02.style.display = "none"
      projects_overview_02.style.display = "none"
      social_media_overview_02.style.display = "block"
      about_him_overview_02.style.display = "none"
      profle_overview_02.style.display = "none"

    });
    about_him_02.addEventListener("click", function(){
      course_overview_02.style.display = "none"
      post_overview_02.style.display = "none"
      projects_overview_02.style.display = "none"
      social_media_overview_02.style.display = "none"
      about_him_overview_02.style.display = "block"
      profle_overview_02.style.display = "none"

    });
    profile_02.addEventListener("click", function(){
      course_overview_02.style.display = "none"
      post_overview_02.style.display = "none"
      projects_overview_02.style.display = "none"
      social_media_overview_02.style.display = "none"
      about_him_overview_02.style.display = "none"
      profle_overview_02.style.display = "block"
    });

    courses_03.addEventListener("click", function(){
      course_overview_03.style.display = "block"
      post_overview_03.style.display = "none"
      projects_overview_03.style.display = "none"
      social_media_overview_03.style.display = "none"
      about_him_overview_03.style.display = "none"
      profle_overview_03.style.display = "none"

    });
    post_03.addEventListener("click", function(){
      course_overview_03.style.display = "none"
      post_overview_03.style.display = "block"
      projects_overview_03.style.display = "none"
      social_media_overview_03.style.display = "none"
      about_him_overview_03.style.display = "none"
      profle_overview_03.style.display = "none"

    });
    projects_03.addEventListener("click", function(){
      course_overview_03.style.display = "none"
      post_overview_03.style.display = "none"
      projects_overview_03.style.display = "block"
      social_media_overview_03.style.display = "none"
      about_him_overview_03.style.display = "none"
      profle_overview_03.style.display = "none"

    });
    social_media_03.addEventListener("click", function(){
      course_overview_03.style.display = "none"
      post_overview_03.style.display = "none"
      projects_overview_03.style.display = "none"
      social_media_overview_03.style.display = "block"
      about_him_overview_03.style.display = "none"
      profle_overview_03.style.display = "none"

    });
    about_him_03.addEventListener("click", function(){
      course_overview_03.style.display = "none"
      post_overview_03.style.display = "none"
      projects_overview_03.style.display = "none"
      social_media_overview_03.style.display = "none"
      about_him_overview_03.style.display = "block"
      profle_overview_03.style.display = "none"

    });
    profile_03.addEventListener("click", function(){
      course_overview_03.style.display = "none"
      post_overview_03.style.display = "none"
      projects_overview_03.style.display = "none"
      social_media_overview_03.style.display = "none"
      about_him_overview_03.style.display = "none"
      profle_overview_03.style.display = "block"
    });

    
  })
  return (
     <div className={` ${card.dev_mode.second_class} relative bg-green-400 w-[85vw] h-[85vh] rounded-2xl overflow-hidden`}>
        <div className={` ${card.dev_mode.class} w-full h-full bg-clr2 relative flex`}>
          <div className={` ${card.dev_mode.close} absolute top-2 right-4 scale-[1.3] cursor-pointer rounded-full w-5 h-5 flex items-center justify-center`}>{card.popup_window.icon.close}</div>
          <div className='relative w-[13vw] h-full bg-clr top-0'>
            <div className=' pt-5 w-full flex flex-col items-center'><p className='text-[2.5rem] font-semibold tracking-tighter leading-none text-zinc-800'>{card.type_course}</p><span className=' font-medium tracking-tighter text-zinc-800 leading-none'>{card.devlopment}</span></div>
            <div className='w-full text-center text-zinc-800 font-light tracking-tighter pt-1'>{card.teacher.name}</div>
            <div className='w-full flex justify-center mt-4'>
              <ul className=' w-fit cursor-pointer'>
                <li className={`text-zinc-800 text-[0.99rem] ${card.dev_mode.open_box._1}`}>Courses</li>
                <li className={`text-zinc-800 text-[0.99rem] ${card.dev_mode.open_box._2}`}>Post</li>
                <li className={`text-zinc-800 text-[0.99rem] ${card.dev_mode.open_box._3}`}>Projects</li>
                <li className={`text-zinc-800 text-[0.99rem] ${card.dev_mode.open_box._4}`}>Social media</li>
                <li className={`text-zinc-800 text-[0.99rem] ${card.dev_mode.open_box._5}`}>About him</li>
              </ul>
            </div>
            <div className='w-full h-32 absolute bottom-3 left-0 flex items-center justify-center'>
              <div className='w-24 h-24 rounded-full bg-zinc-800 overflow-hidden'>
                <img className={` ${card.dev_mode.open_box._6} w-full h-full object-cover rounded-full`} src={card.teacher.profile_link} />
              </div>
            </div>
          </div>
          <div className='w-[84%] h-full bg-zinc-800 overflow-scroll flex gap-3'>
            <div className={`${card.dev_mode.pop_box._6} w-full h-full bg-clr2`}>
              <h3 className=' text-[1.7rem] font-semibold ml-4 mt-2 w-full text-zinc-700'>{card.course} <span className='font-normal text-zinc-700'>with</span> {card.teacher.name}</h3>
                <div className='w-1/3 h-40 bg-red-400 ml-5 mt-4 rounded-xl flex flex-col'>
                <div className=' pt-3 ml-2 flex flex-col items-start'><p className='text-[2rem] font-medium tracking-tighter leading-none text-zinc-800'>{card.type_course}</p></div>
                <div>
                  <div><p className='text-zinc-800 ml-1 font-medium relative -top-1'>{card.course}</p></div>
                  <ul className='text-[0.8rem] pl-3 w-fit flex gap-2 relative -top-1'>
                    <li className='text-zinc-700 cursor-pointer w-fit'>{card.popup_window.course._1}</li>
                    <li className='text-zinc-700 cursor-pointer w-fit'>{card.popup_window.course._2}</li>
                    <li className='text-zinc-700 cursor-pointer w-fit'>{card.popup_window.course._3}</li>
                    <li className='text-zinc-700 cursor-pointer w-fit'>{card.popup_window.course._4}</li>
                    <li className='text-zinc-700 cursor-pointer w-fit'>{card.popup_window.course._5}</li>
                  </ul>
                </div>
                </div>
            </div>
            <div className={`${card.dev_mode.pop_box._1} w-full h-full bg-stone-400`}></div>
            <div className={`${card.dev_mode.pop_box._2} w-full h-full bg-rose-600`}></div>
            <div className={`${card.dev_mode.pop_box._3} w-full h-full bg-pink-400`}></div>
            <div className={`${card.dev_mode.pop_box._4} w-full h-full bg-purple-400`}></div>
            <div className={`${card.dev_mode.pop_box._5} w-full h-full bg-purple-800`}></div>
          </div>
     </div>
     </div>
  )
}

export default Card_pop