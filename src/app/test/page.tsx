"use client";
import Scene from "@/components/3d/HeroSectionObjects";
import { useRef } from "react";



export default function Test() {
    const container = useRef(null)
    return (
        <div
            ref={container}
            style={{
                height: "200dvh"

            }} className="border-2">
            <Scene container={container} />
        </div>
    )
}