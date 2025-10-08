import { useParams } from "react-router";
import useCoustomHook from "../useHook/AppHoouk";

const CardDiteils = () => { 
    const { products} = useCoustomHook()
    const {id} =useParams()
  const  Data = products .find(P => String(P.id) === id)||{}
           const {image,title,ratingAvg
,downloads}= Data
    return (
        <>
       <div className=" w-10/12 mx-auto mt-5">
         <div className="  md:flex lg:flex  ">
            <div className="w-1/3 lg:mr-5 lg:ml-18 pr-9   mb-7 md:mb-0 ">
                <img className="w-[200px]" src={image} alt="" />
            </div>
            <div className="w-1/1 flex-col-reverse  ">
               <div>
                 <h1 className="text-4xl font-bold ">SmPlan:ToDo List with Reminder</h1>
                <p className=" mt-3 mb-3">Developed by <span className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent tex-[20px]">productive.io</span> </p>
               </div>
               <div className="border-1 border-b-gray-400"></div>
                  <div className=''>
             
             <div className=' flex mt-5  '>
              <div >
              <p className=' '>Downloads</p>
              <h1 className='md:text-5xl font-bold  mt-2'>29.6M</h1>
              
             </div>
            <div className="ml-19">
              <p className=''>Total Reviews</p>
              <h1 className='md:text-5xl font-bold  mt-2'>906K</h1>
              
             </div>
             <div className="ml-19">
              <p className=''>Average Ratings</p>
              <h1 className='md:text-5xl font-bold  mt-2'>132+</h1>
              
             </div>
             </div>
             <div>
                 <button className="btn text-white bg-[#00D390] mt-4 mb-4">Install Now (291 MB)</button>
             </div>
           </div>
            </div>
            <div>

            </div>
        </div>
            <div className="border-1 border-b-gray-400"></div>
            <div className="mb-9">

            </div>
            <div>
                <h3 className="text-[24px] font-bold
                mb-3">Description</h3>
                <p className="text-[20px] text-gray-600">This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
 <br /><br />
A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
<br />
<br />
For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>

            </div>
       </div>
        </>
    );
};

export default CardDiteils;