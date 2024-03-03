import React, { useEffect } from 'react'

function Features() {

useEffect(() => {
  const menu_bar3line = document.querySelector(".menu_bar3line");
  const max630_hide = document.querySelector(".max630_hide");
  const max630_bgclr = document.querySelector(".max630_bgclr");
  const max630_ul = document.querySelector(".max630_ul");
  const open_icon = document.querySelector(".open_icon");
  const close_icon = document.querySelector(".close_icon");
  const main_nav = document.querySelector(".main_nav");

  close_icon.addEventListener("click", (e) => {
    max630_hide.style.display = "block";
    max630_bgclr.style.display = "block";
    max630_ul.style.display = "block";
    close_icon.style.display = "none";
    menu_bar3line.style.display = "block";
    open_icon.style.display = "block";
    main_nav.style.backgroundColor = "transparent"
  })
  open_icon.addEventListener("click",(e) => {
    max630_ul.style.display = "none";
    close_icon.style.display = "block";
    open_icon.style.display = "none";
    max630_bgclr.style.display = "none";
    main_nav.style.backgroundColor = "#1f1f1fe8"
  })
});
     
  return (
    <>
    </>
  )
}

export default Features