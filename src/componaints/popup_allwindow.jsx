import React, { useEffect } from 'react'
import Card_pop from './card_pop';

function Popup_allwindow() {
  useEffect(() => {
    const close = document.querySelector('.close_botton');
    const pop_window_01 = document.querySelector('.pop_window_01');

    close.addEventListener("click", (e) => {
         pop_window_01.style.display = 'none'
    })
});
  return (
    <div >
      <div className='close_botton absolute right-4 top-4 scale-[1.5] cursor-pointer'><i class="ri-close-fill"></i></div>
      <div>
        {/* <Card_pop/> */}
      </div>
    </div>
  )
}

export default Popup_allwindow