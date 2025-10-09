import {  useParams } from "react-router";
import useCoustomHook from "../useHook/AppHoouk";
import IMGD from"../../assets/fi_18110198.png"
import IMGS from"../../assets/fi_1828884.png"
import IMGL from"../../assets/fi_17817684.png"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
const CardDiteils = () => { 
    const [isSelected,setSelected]=useState(false)
    const { products} = useCoustomHook()
    const {id} =useParams()
 
  const  Data = products .find(P => String(P.id) === id)|| 
 {
    
      }
    
 
           const {image,ratingAvg
,downloads,companyName,reviews,ratings}= Data

const handelerDetils = () =>{
    const ExistingList =JSON.parse( localStorage.getItem("Wishlist"))
       let updatadList=[]
       if(ExistingList){
          const isDuplicate = ExistingList.some(p => p.id === Data.id)
          if (isDuplicate) return 
         updatadList=[...ExistingList,Data] 
       }
       else{
        updatadList.push(Data)
       }
  localStorage.setItem("Wishlist",JSON.stringify( updatadList))}
    return (
        <>
       <div className=" w-10/12 mx-auto mt-5">
         <div className="  md:flex lg:flex  ">
            <div className="w-1/3 lg:mr-5 lg:ml-18 pr-9   mb-7 md:mb-0 ">
                <img className="w-[200px] md:py-8 md:px-3 bg-gray-200 rounded-2xl" src={image} alt="" />
            </div>
            <div className="w-1/1 flex-col-reverse  ">
               <div>
                 <h1 className=" text-2xl md:text-4xl font-bold ">SmPlan:ToDo List with Reminder</h1>
                <p className=" mt-3 mb-3 font-bold">Developed by: <span className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent tex-[20px]">{companyName}</span> </p>
               </div>
               <div className="border-1  border-b-gray-200 "></div>
                  <div className=''>
             
             <div className=' flex mt-5  '>
              <div >
                <div className="ml-5 md:w-full w-[20px]">
                    <img  src={ IMGD} alt="" />
                </div>
              <p className='font-bold '>Downloads</p>
              <h1 className='md:text-5xl font-bold  mt-2'>{downloads}</h1>
              
             </div>
             
            <div className="md:ml-19 ml-6">
                  <div className="ml-5 md:w-full w-[20px]">
                    <img  src={ IMGL} alt="" />
                </div>
              <p className='font-bold'>Total Reviews</p>
              <h1 className='md:text-5xl font-bold  mt-2'>{reviews}</h1>
              
             </div>
             <div className=" md:ml-19 ml-6">
                 
                 <div className="ml-5 md:w-full w-[20px]">
                    <img  src={ IMGS} alt="" />
                </div>
              <p className='font-bold'>Average Ratings</p>
              <h1 className='md:text-5xl font-bold  mt-2'>{ratingAvg}</h1>
             </div>

             </div>
             <div>
                 <button onClick={()=>{
                     handelerDetils()
                      setSelected(true)
                     toast("Installation started...");
                 }
                 }   
                  className="btn text-white bg-[#00D390] mt-4 mb-4">{isSelected ===true? "Installed":"Install Now (291 MB)"}</button>
             </div>
           </div>
            </div>
        </div>
            <div className="border-1 border-b-gray-200"></div>
          {/* <div className="md:w-full md:h-full  mr-19">
      <h2 className="text-lg font-semibold mb-3">Ratings</h2>
          <BarChart
  width={500}
  height={300}
  data={ratings}
  layout="vertical"
  margin={{ top: 10, right: 20, left: 30, bottom: 0 }}
>
  <XAxis type="number" />
  <YAxis dataKey="name" type="category" />
  <Bar dataKey="count" fill="green" barSize={25} radius={[4, 4, 4, 4]} />
</BarChart>

           
          </div> */}
            <div className="w-full h-[300px] sm:h-[350px]   p-4 rounded-xl  ">
      <h2 className=" md:text-4xl font-semibold mb-2">Ratings</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={ratings}
          layout="vertical">
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8800" barSize={25} radius={[4, 4, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
             <div className="border-1 border-b-gray-200 mt-7 mb-3 "></div>
            <div className="mt-9">
                <h3 className="text-[24px] font-bold
                mb-3">Description</h3>
                <p className="text-[20px] text-gray-600 mb-3 ">This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
 <br /><br />
A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
<br />
<br />
For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>

            </div>
       </div>
           <ToastContainer />
        </>
    );
};

export default CardDiteils;