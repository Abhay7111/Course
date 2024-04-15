import React from 'react'
import Nav from '../../componaints/nav'
import Footer from '../../componaints/footer'
import Thank from './thank';
import Sending from './sending';

function contact(){
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(<><Sending/></>);
    const formData = new FormData(event.target);

    formData.append("access_key", "95ad058c-4709-4d5e-81a1-d3dc2a1b1231");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(<><Thank/></>);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
     return(
          <>
           <Nav/>
           <div className='flex flex-col items-center mt-16 justify-center'>
      <form className='bg-[#2c2c2b] flex flex-col items-center gap-3 py-3 px-5 w-1/4 rounded-xl' onSubmit={onSubmit}>
        <h1 className='text-5xl font-bold mb-2'>Contact me</h1>
        <input className='px-3 py-2 outline-none border border-zinc-600 rounded-lg text-zinc-200 w-full bg-zinc-800' type="text" name="firstname" required placeholder='FirstName'/>
        <input className='px-3 py-2 outline-none border border-zinc-600 rounded-lg text-zinc-200 w-full bg-zinc-800' type="text" name="lastname" placeholder='LastName'/>
        <input className='px-3 py-2 outline-none border border-zinc-600 rounded-lg text-zinc-200 w-full bg-zinc-800' type="email" name="email" required placeholder='Example@gmail.com'/>
        <input className='px-3 py-2 outline-none border border-zinc-600 rounded-lg text-zinc-200 w-full bg-zinc-800' type="number" name="phone number" required placeholder='+0123456789'/>
        <input className='px-3 py-2 outline-none border border-zinc-600 rounded-lg text-zinc-200 w-full bg-zinc-800' type="url" name="url" id="url" placeholder='url' />
        <textarea className='px-3 py-2 outline-none border border-zinc-600 rounded-lg text-zinc-200 w-full bg-zinc-800' name="message" required placeholder={"Write somthing..."}></textarea>
        <button type="submit" className='bg-blue-500 w-fit py-2 px-6 rounded-lg'>Send massage</button>
      <span className=''>{result}</span>
      </form>

    </div>
           <Footer/>
          </>
     )

}

export default contact