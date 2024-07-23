import React from 'react'

const Body = () => {
  return (
    <div className='bg-slate-100'>
      <p className='font-bold pt-3 pb-1 font-san'>SUMMARY</p>
      <hr/>
      <p className='pt-3 font-san tracking-wide font-medium'>Passionate Computer Science graduate specializing in web development, with a robust portfolio of diverse projects. Skilled in both front-end and back-end technologies, adept at problem-solving and collaborating within teams. Seeking to launch a career in an organization that values innovation and offers opportunities for growth. Eager to apply academic knowledge and hands-on experience to contribute effectively and learn from seasoned professionals in the industry, aiming to make a meaningful impact in web development.</p>
      <p className='font-bold pt-5 pb-1 font-san'>EDUCATION</p>
      <hr />
      <p className='font-bold text-xl font-san'>SRI HARI COLLEGE <span className=''>-77%</span></p>
      <ol className='flex space-x-6 p-4 justify-evenly font-medium'>
        <li>Bachelor’s in Computer Applications and Commerce</li>
        <li className='pr-24'>Dec-2020 - June-2023</li>
      </ol>
      <p className='font-bold text-xl font-san '>JUNIOR ARTS COLLEGE[BIE-12th]<span className=''>-60%</span></p>
      <ol className='flex space-x-6 p-4 justify-evenly font-medium'>
        <li>Maths,Physics & Chemistry [M.P.C]</li>
        <li className='pr-12'>July-2018 - June-2020</li>
      </ol>
      <p className='font-bold  text-xl font-san '>MUNICIPAL HIGH SCHOOL [BSE-10th]<span className=''>-95%</span></p>
      <ol className='flex space-x-6 p-4 justify-evenly font-medium'>
        <li>Class 10th Education</li>
        <li>May-2017 - June-2018</li>
      </ol>
      <div className='flex pt-4 font-san'>
        <div className='font-bold pb-1'>PROGRAMMING SKILLS</div>
        <div className='font-bold ml-auto mr-80 pb-1'>ACCOUNTING SKILLS</div>
      </div>
      <hr />
      <div className='flex'>
        <div className='ml-8 mt-3 font-medium'>
        <ol>
            <li>• MS-Office</li>
            <li>• HTML,CSS,JavaScript,ReactJs</li>
            <li>• Jquery, Tailwind, Express,Nodejs</li>
            <li>• VS Code,Git,GitHub</li>
          </ol>
        </div>
        <div className=' ml-auto mr-80 mt-3 font-medium'>
        <ol>
            <li>• General Entries </li>
            <li>• Balance Sheet</li>
            <li>• FIFO & LIFO Statements </li>
            <li>• Statistical Management</li>
          </ol>
        </div>
      </div>
     
      <p className='font-bold pt-4 pb-1 font-san'>PROJECTS</p>
      <hr />
      <ol className='flex pt-3  text-orange-700'>
        <li className='font-san font-bold underline'>Online Food Booking (Jiggy) </li>
        <li className='ml-16 font-sans font-bold cursor-pointer hover:text-orange-800'><a href="https://msanwar1.github.io/jiggy/">VIEW</a></li>
      </ol>
      <p className='tracking-wide font-san font-medium'>• "I have created an elegantly designed online restaurant booking website, meticulously crafted using HTML, CSS, Bootstrap, and JavaScript. Every detail, from the user-friendly interface to the responsive layout, has been carefully considered to ensure a seamless and enjoyable dining experience. My aim was to make booking a table as straightforward and pleasant as possible, guaranteeing that every visitor finds the process visually appealing and effortless." </p>
      <ol className='flex pt-3 font-san  text-green-700'>
        <li className='font-san font-bold underline'>E-mail Validator</li>
        <li className='ml-40 pb-1 font-sans font-bold cursor-pointer hover:text-green-800'><a href="https://msanwar1.github.io/EmailValidator/">VIEW</a></li>
      </ol>
      <p className='tracking-wide font-san font-medium'>• "I have developed an Email validator to identify genuine emails, addressing the issue of trusting fake ones. This project was created using HTML, CSS, and JavaScript, ensuring a robust solution with a user-friendly interface. The goal was to simplify the process of verifying emails, making it reliable and efficient for users to distinguish between genuine and fraudulent emails effortlessly."</p>
      <div className='flex'>
        <div className='pt-4 pb-1 font-san font-bold'>HOBBIES</div>
        <div className=' ml-auto mr-80 pt-4 pb-1 font-bold font-san'>LANGUAGES KNOWN</div>
      </div>
      <hr />
      <div className='flex'>
        <div className=' ml-8 mt-3 font-medium'>
          <ol>
            <li>• Learning New Technologies</li>
            <li>• Reading & Writing Blogs</li>
            <li>• Playing & Watching cricket</li>
            <li>• Listening Music</li>
          </ol>
        </div>
        <div className=' ml-auto mr-80 mt-3 font-medium'>
        <ol>
            <li>• ENGLISH</li>
            <li>• HINDI</li>
            <li>• TELUGU </li>
          </ol>
        </div>
      </div>
      

    </div>
  )
}

export default Body
