"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
    return (
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <div className="z-10">
                <Boxes />
            </div>
            <h1 className={cn("md:text-xl text-xl text-white relative z-20")}>
            <a
                href="https://gdg.community.dev/gdg-on-campus-tezpur-university-tezpur-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-google-blue text-white px-6 py-3 rounded-lg font-medium z-99 hover:bg-blue-600 transition-colors flex items-center justify-center"
            >
                Join

            </a>
            </h1>
            {/* <p className="text-center mt-2 text-neutral-300 relative z-20">
                Framer motion is the best animation library ngl
            </p> */}
            
        </div>
    );
}
