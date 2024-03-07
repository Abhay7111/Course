import React from 'react'
import Abhay from './abhay';

function Abhaydata() {
     const abhaydatafull = [
          {
               name:"Abhay vishwakarma",
               course:"Web-devlopment",
               profile:"https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/414997641_2007442582972989_4343336468827169681_n.jpg?ccb=11-4&oh=01_AdR_V7tt0vZ2kNQm7mATErhbmlgW2qZK7cf-6PRazeShpA&oe=65EBF433&_nc_sid=e6ed6c&_nc_cat=102",
               thumbnail:"https://cdn.dribbble.com/userupload/12506489/file/original-20f64e56ee4cc13ddad4f3c05e54fb57.png?resize=320x240&vertical=center",
               link:{
                    instagram:"",
                    facebook:"",
                    whatsapp:"",
               },
               icons:{
                    instagram:<i class="ri-instagram-line"></i>,
                    facebook:<i class="ri-facebook-fill"></i>,
                    whatsapp:<i class="ri-whatsapp-line"></i>,
               },
          },
     ];
  return (
    <div>
<div>
     {abhaydatafull.map((item, index)=>(
          <Abhay abhaydatafull={item}/>
     ))}
</div></div>
  )
}

export default Abhaydata