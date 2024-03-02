import React from 'react'
import Blog from './Blog';

function Blogdata() {
     const blog = [
          {
               name:{
                    first:'Abhay',
                    last:'Vishwakarma',
               },
               post:{
                    blog:"In today's digital age, web development stands as a cornerstone of innovation, powering the dynamic online experiences we encounter daily. From simple websites to complex web applications, the realm of web development offers boundless opportunities for creativity, problem-solving, and digital transformation.At its core, web development encompasses a diverse array of disciplines, including front-end development, back-end development, and full-stack development. Front-end developers breathe life into web interfaces, crafting visually appealing and intuitive user experiences through HTML, CSS, and JavaScript. Meanwhile, back-end developers work behind the scenes, architecting robust server-side systems and databases to handle data and logic. And then there are the full-stack developers, who possess a comprehensive understanding of both front-end and back-end technologies, enabling them to build end-to-end solutions with seamless integration.The beauty of web development lies in its accessibility and versatility. With a laptop and an internet connection, anyone can embark on a journey of learning and mastery in this field. Countless resources, tutorials, and online courses are readily available to guide aspiring developers along their path.               Moreover, the demand for web developers continues to soar, with businesses across industries seeking to establish their online presence and engage with their audience effectively. Whether you're a seasoned professional or a novice enthusiast, the world of web development invites you to explore, innovate, and shape the digital landscape of tomorrow. So, what are you waiting for? Dive into the exciting world of web development today and unleash your potential for digital innovation!",
                    img:'',
                    title:" Unleashing the Power of Web Development: A Journey into Digital Innovation",
               },
          },
     ];
  return (
    <div>
     {blog.map((item, index) =>(
          <Blog blog={item}/>
     ))}
    </div>
  )
}

export default Blogdata