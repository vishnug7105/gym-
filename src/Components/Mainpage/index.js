import React from "react"

const Hero =() => {
  return (
    <>
    {/* large screen */}
    <section>
   <div className ="relative hidden md:block lg:block" style={{height:"40rem"}}>
      <img
         src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fHww&w=1000&q=80"
         alt="gym-freak"
         className="w-full h-full"/>
      <div className="absolute z-30 top-20 left-64 ">
         <h1 className="text-bold text-4xl text-white  "> Fitness Studio </h1>
         <div className=" text-bold text-6xl text-white w-1/2 mt-8">
            <h2 className="w-full"> Where Fitness Becomes Your LifeStyle</h2>
         </div>
         <button className="mt-6 px-8 py-2 bg-navcol-300 text-bold  text-white hover:text-black hover:bg-white">
         Book Now </button>
      </div >
   </div>
   {/*small screen*/}
   <div className=" relative sm:flex md:hidden  h-1/2">
      <img
         src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fHww&w=1000&q=80"
         alt="gym"
         className="w-full h-full"/>
      <div className="absolute z-10 top-12 left-12 w-1/2">
         <h2 className=" text-bold text-3xl text-white w-full"> Where Fitness Becomes Your LifeStyle</h2>
         <button className="mt-6 px-8 py-2 bg-navcol-300 text-bold  text-white hover:text-black hover:bg-white">
         Book Now </button>
      </div>
   </div>
</section>

<section>
   <div className=" md:mt-8 gap-4 md:flex md:flex-row-reverse ">
      <div className="bg-navcol-10  text-center sm:w-100%">
         <h1 className="md:text-6xl  text-4xl text-center font-bold text-white  md:m-24"> About Fitness Studio </h1>
         <p className=" m-2 md:max-w-md md:ml-32 text-lg text-white ">I'm a paragraph. Click here to add your own text and edit me. It’s easy.
            Just click “Edit Text” or double click me to add your own content and make changes to the font.
            I’m a great place for you to tell a story and let your users know a little more about you.
         </p>
         <button className="px-2 py-2 m-8 bg-navcol-300  hover:text-black hover:bg-white cursor-pointer"> Read More</button>
      </div>
      <div className="md:w-1/2 md:h-1/2 ">
         <img
            src="https://preview.free3d.com/img/2019/03/2408222960969057426/9qrt4q83.jpg"
            alt="Fitness-room"
            className="w-full h-full "/>
      </div>
   </div>
</section>
{/* large screen*/}
<section>
   <div className="hidden md:block lg:block">
      <div >
         <h1 className="text-center mt-10 text-5xl font-bold text-navcol-300">Our Classes</h1>
      </div>
      <hr className="h-1  m-8 mt-4 bg-navcol-700 border-0"/>
      <div className=" m-12 flex justify-between">
         <h1 className="text-4xl font-bold text-navcol-600 hover:text-navcol-400 cursor-pointer">Base Fit</h1>
         <h3 className="text-xl text-navcol-600 ml-28">45min</h3>
         <button className="px-4 py-2 bg-navcol-600 hover:bg-opacity-75 text-white ">Book Now</button>
      </div>
      <hr className="h-1 m-8 mt-4 bg-navcol-700 border-0"/>
      <div className=" m-12 flex justify-between">
         <h1 className="text-4xl font-bold text-navcol-600 hover:text-navcol-400 cursor-pointer">Base Strength</h1>
         <h3 className="text-xl text-navcol-600">45min</h3>
         <button className="px-4 py-2 bg-navcol-600 hover:bg-opacity-75 text-white ">Book Now</button>
      </div>
      <hr className="h-1 m-8 mt-4 bg-navcol-700 border-0"/>
      <div className=" m-12 flex justify-between">
         <h1 className="text-4xl font-bold text-navcol-600 hover:text-navcol-400 cursor-pointer">Base Endurance</h1>
         <h3 className="text-xl text-navcol-600 mr-8">45min</h3>
         <button className="px-4 py-2 bg-navcol-600 hover:bg-opacity-75 text-white ">Book Now</button>
      </div>
      <hr className="h-1 bg-navcol-300 border-0 m-8" />
   </div>
</section>
{/* small screen*/}
<section>
   <div className="mt-8  sm:block md:hidden lg:hidden ">
      <h1 className="text-4xl font-bold text-center text-navcol-300">Our Classes</h1>
      <div>
         <h1 className="text-3xl font-bold m-6 ml-9">Base Fit</h1>
         <hr className="h-[1px] m-6 bg-navcol-600 border-0"/>
         <h3 className="ml-12 text-xl">Mon, Tue, Wed, Thu, Fri, Sat</h3>
         <h4 className="text-xl ml-12">45min</h4>
         <button className="px-24 py-2 bg-navcol-300 ml-32 mt-8 hover:bg-opacity-75% text-white">Book Now</button>
      </div>
      <div>
         <h1 className="text-3xl font-bold m-6 ml-9">Base Fit</h1>
         <hr className="h-[1px] m-6 bg-navcol-600 border-0"/>
         <h3 className="ml-12 text-xl">Mon, Tue, Wed, Thu, Fri, Sat</h3>
         <h4 className="text-xl ml-12">45min</h4>
         <button className="px-24 py-2 bg-navcol-300 ml-32 mt-8 hover:bg-opacity-75% text-white">Book Now</button>
      </div>
      <div>
         <h1 className="text-3xl font-bold m-6 ml-9">Base Fit</h1>
         <hr className="h-[1px] m-6 bg-navcol-600 border-0"/>
         <h3 className="ml-12 text-xl">Mon, Tue, Wed, Thu, Fri, Sat</h3>
         <h4 className="text-xl ml-12">45min</h4>
         <button className="px-24 py-2 bg-navcol-300 ml-32 mt-8 hover:bg-opacity-75% text-white">Book Now</button>
      </div>
   </div>
</section>
<section>
   <h1 className="md:text-5xl text-4xl text-center  text-navcol-300 font-bold mt-24 ">
      Join Base and Transform Your Body and Mind
   </h1>
   <div className="mt-24 md:flex ">
      <img
         src="https://uploads-ssl.webflow.com/634053de3cf351fe4c9ff01b/634053de3cf35156309ff4fb_fitness-center-gym-3d-model-max-1.jpg"
         alt="communitygym"
         className="md:w-1/2 w-full"/>
      <div className="">
         <h1 className="text-4xl md:mt-32 text-center font-bold text-navcol-400">Community </h1>
         <p className="text-xl max-w-md mt-8 md:ml-24 ml-16 text-center"> Fitness is not about being better than someone.
            Fitness is about being better than the person you were yesterday.
            Excuses don’t burn calories.Excuses are for people who don’t want it bad enough.
         </p>
      </div>
   </div>
   <div className=" md:flex md:flex-row-reverse">
      <img
         src="https://planner5d.com/assets/images/use-cases/gym-design-planner/gym-design-planner-1.webp"
         alt="motivation"
         className="md:w-1/2 w-full"/>
      <div className="">
         <h1 className="text-4xl md:mt-32 text-center font-bold text-navcol-400">Motivation</h1>
         <p className="text-xl max-w-md mt-8 md:mr-24 ml-16 text-center">The last three or four reps is what makes the muscle grow.
            This area of pain divides the champion from someone else who is not a champion.
            Think BIG and don’t listen to people who tell you it can’t be done. Life’s too short to think small.
         </p>
      </div>
   </div>
   <div className=" md:flex ">
      <img
         src="https://uploads-ssl.webflow.com/634053de3cf351fe4c9ff01b/634053de3cf35156309ff4fb_fitness-center-gym-3d-model-max-1.jpg"
         alt="communitygym"
         className="md:w-1/2 w-full"/>
      <div className="">
         <h1 className="text-4xl md:mt-32 text-center font-bold text-navcol-400">Results </h1>
         <p className="text-xl max-w-lg mt-8 md:ml-24 ml-16 text-center"> Those noticeable physical changes from exercise
            (be it muscle growth, fat loss, or a lower resting heart rate) depends on the person and their baseline
            level of fitness. "My [clients] generally see initial changes within four to six weeks, and actual results
            within eight to 12 weeks,
            " Wilson explains.
         </p>
      </div>
   </div>
</section>
{/* Follow section*/}
<section>
   <h1 className="text-5xl text-center mt-[40px] text-navcol-300  "> Follows us on @Studio Fitness</h1>
   <div className="md:flex  md:justify-between gap-1  m-3 ">
      <div>
         <img
            src="https://e1.pxfuel.com/desktop-wallpaper/957/831/desktop-wallpaper-man-gym-muscle-physical-exercise-human-back-barbell-athletic-gym-men.jpg"
            alt="model-1"
            className=" md:w-[280px] md:h-[200px] mt-4"/>
      </div>
      <div>
         <img
            src="https://img.freepik.com/free-photo/young-happy-sportswoman-getting-ready-workout-tying-shoelace-fitness-center_637285-470.jpg"
            alt="model-1"
            className=" md:w-[280px] md:h-[200px] sm:w-full  mt-4"/>
      </div>
      <div>
         <img
            src="https://c4.wallpaperflare.com/wallpaper/787/610/414/muscle-press-pose-athlete-workout-hd-wallpaper-preview.jpg"
            alt="model-1"
            className="md:w-[280px] md:h-[200px]  mt-4"/>
      </div>
      <div>
         <img
            src="https://img.freepik.com/free-photo/woman-doing-squats-smith-machine_7502-9063.jpg?w=360"
            alt="model-1"
            className=" md:w-[280px] md:h-[200px] mt-4 w-full "/>
      </div>
      <div>
         <img
            src="https://media.istockphoto.com/id/1195045259/photo/get-your-body-in-balance.jpg?s=612x612&w=0&k=20&c=BPmNGwNUEqE987N7Di3HKihP0bY9hY4cHbKK4rKPVuQ="
            alt="model-1"
            className=" md:w-[280px] md:h-[200px] mt-4 sm:w-full"/>
      </div>
   </div>
</section>
{/* Contact details*/}
<section>
   <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
         <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
               Let's Get Moving
            </p>
            <p className="py-6">Sign Up For Updates</p>
         </div>
         <div className=" flex justify-center items-center">
            <form
               action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
               method="POST"
               className=" flex flex-col w-full md:w-1/2">
               <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                  />
               <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                  />
               <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
               </textarea>
               <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
               Submit</button>
            </form>
         </div>
      </div>
   </div>
</section>
<div className="bg-gray-800 text-sm p-4 text-center text-white">
   Copyright © 2023 vishnu vardhan.All Rights reserved.
</div>
    </>
  )
}

export default Hero;
