"use client"

import React, { useEffect } from 'react'
import { twMerge } from "tailwind-merge";
import "./style.css"
import { MaskText } from '@/components';
import { Header } from '../OffersSection/styles';


const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];


function Testimonials() {



  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
  
    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  
    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        (scroller as HTMLElement).setAttribute("data-animated", "true");
  
        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner") as HTMLElement;
        const scrollerContent = Array.from(scrollerInner.children) as HTMLElement[];
  
        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  


  return (
    <div className=' my-24'>
     <Header>
       <MaskText phrases={["Testimonails"]} tag="h1" />
       <MaskText phrases={["Experience the future of banking with RAFT. We're",'here to empower your financial journey.',]} tag="p" />
     </Header>
      <div
    data-direction="right" data-speed="slow"
    className={twMerge(
      "scroller relative z-20 group max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
    )}
  >
    <ul
      className={twMerge(
        " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap scroller__inner",
      )}
    >
      {testimonials.map((testimonial, idx) => (
        <li
          className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-[rgba(218, 218, 218, 0.2)] px-8 py-6 md:w-[450px]"
          style={{
            background:
              "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
          }}
          key={testimonial.name}
        >
          <blockquote>
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
              {testimonial.quote}
            </span>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              <span className="flex flex-col gap-1">
                <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                  {testimonial.name}
                </span>
                <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                  {testimonial.title}
                </span>
              </span>
            </div>
          </blockquote>
        </li>
      ))}
    </ul>
  </div>   
    </div>
 
  )
}

export default Testimonials