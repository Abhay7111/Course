import React from 'react'
import Nav from '../../componaints/nav'
import Footer from '../../componaints/footer'

function contact(){
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "95ad058c-4709-4d5e-81a1-d3dc2a1b1231");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(<>thanks</>);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
     return(
          <>
           <Nav/>
           <div className='flex items-center justify-center'>
      <form className='bg-red-400 flex flex-col gap-3 p-3 w-1/4 rounded-xl' onSubmit={onSubmit}>
        <input type="text" name="name" required placeholder='Name'/>
        <input type="email" name="email" required placeholder='Example@gmail.com'/>
        <input type="number" name="number" required placeholder='+0123456789'/>
        <textarea name="message" required placeholder={<><h1></h1></>}></textarea>

        <button type="submit">Submit Form</button>

      </form>
      <span>{result}</span>

    </div>
           <Footer/>
          </>
     )

}

export default contact