"use client";
import { XMark } from "@/assets/Icons";
import { MaskText } from "@/components";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Header } from "../OffersSection/styles";
import "./style.css";
import Link from "next/link";

function Services() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    gsap.registerPlugin(Flip);

    const activeClass = "is-active";
    const inactiveClass = "is-inactive";
    const cards = document.querySelectorAll(".service__card");

    cards.forEach((card, idx) => {
      card.addEventListener("click", () => {
        const state = Flip.getState(cards);
        const isCardActive = card.classList.contains(activeClass);

        cards.forEach((otherCard, otherIdx) => {
          otherCard.classList.remove(activeClass);
          otherCard.classList.remove(inactiveClass);
          if (!isCardActive && idx !== otherIdx)
            otherCard.classList.add(inactiveClass);
        });

        card.classList.add(activeClass);

        Flip.from(state, {
          duration: 0.5,
          ease: "expo.out",
          absolute: true,
        });
      });
    });
  }, [active]);

  return (
    <>
      <Header className="">
        <MaskText phrases={["Services"]} tag="h1" />
        <MaskText
          phrases={[
            "Experience the future of banking with RAFT. We're",
            "here to empower your financial journey.",
          ]}
          tag="p"
        />
      </Header>
      <div className="service__wrapper w-6/6 lg:w-5/6">
        <div
          onClick={() => setActive(1)}
          className={twMerge(
            "service__card group/card",
            active == 1 && "is-active"
          )}
        >
          <div className="flex justify-between items-center text-[#e5e4e0]">
            <div className=" text-[2.25rem] font-normal uppercase ">Design</div>
            <XMark active={1 == active} />
          </div>
          <div
            className={twMerge(
              "mt-10 select-none flex justify-between flex-col",
              active != 1 && " text-transparent"
            )}
          >
            <div className="flex flex-col mt-10">
              <div className=" flex gap-4 flex-col">
                <h1 className=" leading-normal uppercase text-3xl font-normal">
                  Digital-First Branding
                </h1>
                <p className=" font-[1.7rem]">
                  In today&apos;s digital world, your brand has to shine across
                  screens. We build brands that not only look great but also
                  resonate with your target audience. From logo design to
                  content strategy, our digital-first approach ensures
                  consistency, engagement, and a distinctive presence that sets
                  you apart.
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <div className=" flex gap-4 flex-col">
                <h1 className=" leading-normal uppercase text-3xl font-normal">
                  Functional & Fun Interface Design
                </h1>
                <p className={twMerge("font-[1.7rem]")}>
                  In today&apos;s digital world, your brand has to shine across
                  screens. We build brands that not only look great but also
                  resonate with your target audience. From logo design to
                  content strategy, our digital-first approach ensures
                  consistency, engagement, and a distinctive presence that sets
                  you apart.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="#_"
            className="relative inline-flex mt-32 items-center justify-start  w-fit px-5 py-3 overflow-hidden font-bold rounded-full group/btn"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover/btn:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover/btn:text-gray-900">
              Contact Us
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </Link>
        </div>
        <div
          onClick={() => setActive(2)}
          className={twMerge(
            "service__card group/card",
            active == 2 && "is-active"
          )}
        >
          <div className="flex justify-between items-center">
            <div className=" text-[2.25rem] font-normal uppercase text-[#e5e4e0]">
              Development
            </div>
            <XMark active={2 == active} />
          </div>
          <div className=""></div>
        </div>
        <div
          onClick={() => setActive(3)}
          className={twMerge(
            "service__card group/card",
            active == 3 && "is-active"
          )}
        >
          <div className="flex justify-between items-center">
            <div className=" text-[2.25rem] font-normal uppercase text-[#e5e4e0]">
              Motion & 3D
            </div>
            <XMark active={3 == active} />
          </div>
          <div className=""></div>
        </div>
        <div
          onClick={() => setActive(4)}
          className={twMerge(
            "service__card group/card",
            active == 4 && "is-active"
          )}
        >
          <div className="flex justify-between items-center">
            <div className=" text-[2.25rem] font-normal uppercase text-[#e5e4e0]">
              Strategy
            </div>
            <XMark active={4 == active} />
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}

export default Services;
