"use client";

import { MaskText } from "@/components";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Header } from "../OffersSection/styles";
import "./style.css";

function Cards() {
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
            <div className=" p-[30px] relative overflow-hidden  rounded-[50px] h-[80vh] flex justify-center items-center transition-all duration-300 bg-[#2e2e2e] ">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b z-50 from-black/60 to-transparent p-6 rounded-lg shadow-lg"></div>
            <div className=" flex justify-between items-center  absolute top-5 z-50 w-[90%] ">
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
              <Image
                src={
                  "https://images.unsplash.com/photo-1681301865120-7c74657dc01a?q=80&w=1407&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="featured_mobile_banner"
                fill
                draggable="false"
                className="hover:grayscale object-cover w-auto mx-auto hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </div>
          </li>
          <li  className="card" id="card2">
            <div className=" p-[30px] relative overflow-hidden  rounded-[50px] h-[80vh] flex justify-center items-center transition-all duration-300 bg-[#2e2e2e] ">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b z-50 from-black/60 to-transparent p-6 rounded-lg shadow-lg"></div>
            <div className=" flex justify-between items-center  absolute top-5 z-50 w-[90%] ">
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
            <div className=" p-[30px] relative overflow-hidden  rounded-[50px] h-[80vh] flex justify-center items-center transition-all duration-300 bg-[#2e2e2e] ">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b z-50 from-black/60 to-transparent p-6 rounded-lg shadow-lg"></div>
            <div className=" flex justify-between items-center  absolute top-5 z-50 w-[90%] ">
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
            <div className=" p-[30px] relative overflow-hidden  rounded-[50px] h-[80vh] flex justify-center items-center transition-all duration-300 bg-[#2e2e2e] ">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b z-50 from-black/60 to-transparent p-6 rounded-lg shadow-lg"></div>
            <div className=" flex justify-between items-center  absolute top-5 z-50 w-[90%] ">
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
      </div>
    </div>
  );
}

export default Cards;
