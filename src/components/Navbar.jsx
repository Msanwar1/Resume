import React from 'react'


const Navbar = () => {
  return (
    <div className=' bg-slate-100'>
      <span className='font-bold text-4xl flex text-center bg-slate-100 font-san pl-32  ml-96'>M.S.Anwar <br /> Hussain Basha <span><img className='h-20 w-20 rounded-full ml-10' src="./images/Anwarphoto.jpg" alt="Anwar" /></span> </span> 
      <div className='flex space-x-6 p-4 place-content-center '>
      <div className='flex'><span className='cursor-pointer underline text-blue-700 hover:font-bold '><img src="./images/linkedin.jpg" alt="linkedin" className='h-5 w-5 float-left ' /> <a href="https://www.linkedin.com/in/m-s-anwar-hussain-basha-761212211/">LinkedIn</a>  </span></div>
        <div className='flex '><span className=' text-black-700  '><img src="./images/phone.jpg" alt="phone" className='h-5 w-4  float-left ' /> +91 7995061337  </span></div>
        <div className='flex'><span className='cursor-pointer underline text-orange-700 hover:font-bold '><img src="./images/email.jpg" alt="github" className='h-5 w-5 float-left ' /> <a href="http://gmail.com">Anwarms108@gmail.com</a>  </span></div>
        <div className='flex'><span className='cursor-pointer underline text-black-700 hover:font-bold '><img src="./images/github.jpg" alt="github" className='h-5 w-5 float-left ' /> <a href="https://github.com/Msanwar1">GITHUB</a>  </span></div>
      </div>
      <div>        
      </div>      
    </div>
    
  )
}

export default Navbar
