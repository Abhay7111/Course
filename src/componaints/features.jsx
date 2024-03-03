import React, { useEffect } from 'react'

function Features() {

  const menu_bar3line = document.querySelector(".menu_bar3line");
  const max630_hide = document.querySelector(".max630_hide");

  menu_bar3line.addEventListener("click", (e)=>{
    max630_hide.style.display = "block"
  })
     
  return (
    <div>Features</div>
  )
}

export default Features