"use client";

import { MaskText } from "@/components";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Header } from "../OffersSection/styles";
import "./style.css";

function NewCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div className=" mt-10">
      <Header>
        <MaskText phrases={["Leatest Projects"]} tag="h1" />
        <MaskText
          phrases={[
            "Experience the future of banking with RAFT. We're",
            "here to empower your financial journey.",
          ]}
          tag="p"
        />
      </Header>
      <div className="cards-container">
        <ul id="cards">
        
          <li  className="card" id="card1">
          <div className=" flex justify-between items-center z-50 w-[90%] mx-auto ">
              <button className="cta w-fit flex justify-center mb-2  text-white ">
                <span className="hover-underline-animation ">
                  {" "}
                  View Project{" "}
                </span>
                <svg
                  className=" fill-white mt-1"
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                >
                  <path
                    transform="translate(30)"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    data-name="Path 10"
                    id="Path_10"
                  ></path>
                </svg>
              </button>
              <p className=" text-[1em] mr-4">2023</p>
            </div>
            <div className=" p-[30px] relative overflow-hidden  rounded-[50px] h-[80vh] flex justify-center items-center transition-all duration-300 bg-[#2e2e2e] ">
            <div className="noise"></div>
              <Image
                src={
                  "https://images.unsplash.com/photo-1681301865120-7c74657dc01a?q=80&w=1407&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="featured_mobile_banner"
                fill
                draggable="false"
                className=" hover:grayscale  object-cover w-auto mx-auto hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </div>
          </li>
          <li  className="card" id="card2">
          <div className=" flex justify-between items-center z-50 w-[90%] mx-auto ">
              <button className="cta w-fit flex justify-center mb-2  text-white ">
                <span className="hover-underline-animation ">
                  {" "}
                  View Project{" "}
                </span>
                <svg
                  className=" fill-white mt-1"
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                >
                  <path
                    transform="translate(30)"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    data-name="Path 10"
                    id="Path_10"
                  ></path>
                </svg>
              </button>
              <p className=" text-[1em] mr-4">2023</p>
            </div>
            <div className=" p-[30px] relative overflow-hidden  rounded-[50px] h-[80vh] flex justify-center items-center transition-all duration-300 bg-[#2e2e2e] ">
            <div className="noise"></div>
              <Image
                src={
                  "https://images.unsplash.com/photo-1595123550441-d377e017de6a?q=80&w=1606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="featured_mobile_banner"
                fill
                draggable="false"
                className="hover:grayscale object-cover w-auto mx-auto hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </div>
          </li>
          <li  className="card" id="card3">
          <div className=" flex justify-between items-center z-50 w-[90%] mx-auto ">
              <button className="cta w-fit flex justify-center mb-2  text-white ">
                <span className="hover-underline-animation ">
                  {" "}
                  View Project{" "}
                </span>
                <svg
                  className=" fill-white mt-1"
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                >
                  <path
                    transform="translate(30)"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    data-name="Path 10"
                    id="Path_10"
                  ></path>
                </svg>
              </button>
              <p className=" text-[1em] mr-4">2023</p>
            </div>
            <div className=" p-[30px] relative overflow-hidden  rounded-[50px] h-[80vh] flex justify-center items-center transition-all duration-300 bg-[#2e2e2e] ">
            <div className="noise"></div>
              <Image
                src={
                  "https://images.unsplash.com/photo-1678705544977-0d0b86a8b5f9?q=80&w=1404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="featured_mobile_banner"
                fill
                draggable="false"
                className="hover:grayscale object-cover w-auto mx-auto hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </div>
          </li>
          <li  className="card" id="card4">
          <div className=" flex justify-between items-center z-50 w-[90%] mx-auto ">
              <button className="cta w-fit flex justify-center mb-2  text-white ">
                <span className="hover-underline-animation ">
                  {" "}
                  View Project{" "}
                </span>
                <svg
                  className=" fill-white mt-1"
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                >
                  <path
                    transform="translate(30)"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    data-name="Path 10"
                    id="Path_10"
                  ></path>
                </svg>
              </button>
              <p className=" text-[1em] mr-4">2023</p>
            </div>
            <div className=" p-[30px] relative overflow-hidden  rounded-[50px] h-[80vh] flex justify-center items-center transition-all duration-300 bg-[#2e2e2e] ">
            <div className="noise"></div>
              <Image
                src={
                  "https://images.unsplash.com/photo-1701743805124-dde90e4df301?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="featured_mobile_banner"
                fill
                draggable="false"
                className="hover:grayscale object-cover w-auto mx-auto hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </div>
          </li>
        </ul>
        {/* <ul id="cards">
        <li ref={container} className="card" id="card1">
            <div className=" p-[30px]  rounded-[50px] h-[80vh] flex justify-center items-center transition-all duration-300 bg-[#2e2e2e] ">
            <div className=' w-3/6'>
              <div className=' overflow-hidden rounded-2xl  h-[400px] w-[400px]'>
              <motion.div style={{scale: imageScale}} className=' h-[400px] w-[400px] relative'>
               <Image
                    src={featured_mobile_banner}
                    alt="featured_mobile_banner"
                    fill

                    draggable="false"
                    className=' object-cover w-auto mx-auto'
                />
               </motion.div>
              </div>
            </div>
              <div className='flex flex-col gap-4 justify-around relative w-3/6 h-full'>
                <h1 className=' absolute bottom-10 right-10 text-9xl font-bold text-white/80 opacity-30 '>1/4</h1>
               <div className=''>
               <h2 className=' font-bold text-7xl mt-9 '>Project Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit sapiente perferendis sit dolor quidem odit, magnam, repudiandae nesciunt fugit nulla quaerat ut vitae? Dicta ea cumque voluptas sed repellat?</p>
               </div>
                <button className="cta w-fit flex justify-center text-white ">
    <span className="hover-underline-animation after:bg-white"> View Project </span>
    <svg className=" fill-white mt-1" viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>
              </div>
            </div>
        </li>
        <li  className="card" id="card2">
        <div className=" p-[30px]  rounded-[50px] text-[#2e2e2e] h-[80vh] flex justify-center items-center transition-all duration-300 bg-white">
            <div className=' w-3/6'>
              <div className=' overflow-hidden rounded-2xl  h-[400px] w-[400px]'>
              <motion.div style={{scale: imageScale}} className=' h-[400px] w-[400px] relative'>
               <Image
                    src={featured_mobile_banner}
                    alt="featured_mobile_banner"
                    fill

                    draggable="false"
                    className=' object-cover w-auto mx-auto'
                />
               </motion.div>
              </div>
            </div>
              <div className='flex flex-col gap-4 justify-around relative w-3/6 h-full'>
                <h1 className=' absolute bottom-10 right-10 text-9xl font-bold  text-[#2e2e2e] opacity-30 '>1/4</h1>
               <div className=''>
               <h2 className=' font-bold text-7xl mt-9 '>Project Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit sapiente perferendis sit dolor quidem odit, magnam, repudiandae nesciunt fugit nulla quaerat ut vitae? Dicta ea cumque voluptas sed repellat?</p>
               </div>
                <button className="cta w-fit flex justify-center text-[#2e2e2e] ">
    <span className="hover-underline-animation after:bg-[#2e2e2e]"> View Project </span>
    <svg className=" fill-[#2e2e2e] mt-1" viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>
              </div>
            </div>
        </li>
        <li className="card" id="card3">
        <div className=" p-[30px]  rounded-[50px] h-[80vh] flex justify-center items-center transition-all duration-300 bg-[#2e2e2e] ">
            <div className=' w-3/6'>
              <div className=' overflow-hidden rounded-2xl  h-[400px] w-[400px]'>
              <motion.div style={{scale: imageScale}} className=' h-[400px] w-[400px] relative'>
               <Image
                    src={featured_mobile_banner}
                    alt="featured_mobile_banner"
                    fill

                    draggable="false"
                    className=' object-cover w-auto mx-auto'
                />
               </motion.div>
              </div>
            </div>
              <div className='flex flex-col gap-4 justify-around relative w-3/6 h-full'>
                <h1 className=' absolute bottom-10 right-10 text-9xl font-bold text-white/80 opacity-30 '>1/4</h1>
               <div className=''>
               <h2 className=' font-bold text-7xl mt-9 '>Project Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit sapiente perferendis sit dolor quidem odit, magnam, repudiandae nesciunt fugit nulla quaerat ut vitae? Dicta ea cumque voluptas sed repellat?</p>
               </div>
                <button className="cta w-fit flex justify-center text-white ">
    <span className="hover-underline-animation after:bg-white"> View Project </span>
    <svg className=" fill-white mt-1" viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>
              </div>
            </div>
        </li>
        <li className="card" id="card4">
        <div className=" p-[30px]  rounded-[50px] text-[#2e2e2e] h-[80vh] flex justify-center items-center transition-all duration-300 bg-white">
            <div className=' w-3/6'>
              <div className=' overflow-hidden rounded-2xl  h-[400px] w-[400px]'>
              <motion.div style={{scale: imageScale}} className=' h-[400px] w-[400px] relative'>
               <Image
                    src={featured_mobile_banner}
                    alt="featured_mobile_banner"
                    fill

                    draggable="false"
                    className=' object-cover w-auto mx-auto'
                />
               </motion.div>
              </div>
            </div>
              <div className='flex flex-col gap-4 justify-around relative w-3/6 h-full'>
                <h1 className=' absolute bottom-10 right-10 text-9xl font-bold  text-[#2e2e2e] opacity-30 '>1/4</h1>
               <div className=''>
               <h2 className=' font-bold text-7xl mt-9 '>Project Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit sapiente perferendis sit dolor quidem odit, magnam, repudiandae nesciunt fugit nulla quaerat ut vitae? Dicta ea cumque voluptas sed repellat?</p>
               </div>
                <button className="cta w-fit flex justify-center text-[#2e2e2e] ">
    <span className="hover-underline-animation after:bg-[#2e2e2e]"> View Project </span>
    <svg className=" fill-[#2e2e2e] mt-1" viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>
              </div>
            </div>
        </li>
    </ul> */}
      </div>
    </div>
  );
}

export default NewCards;
