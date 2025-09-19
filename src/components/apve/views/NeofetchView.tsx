'use client';
import { SKILL_CATEGORIES } from "@/lib/app-data";

const asciiArt = `
          'c.
         ,xNMM.
       .OMMMMo
       OMMM0,
     , 0MMMM.'
     NNMMMN..
    LMMMMMM.
   ,OMMMMMMX,
  .MMMMMMMMM.
  dMMMMMMMMMX,
 .MMMMMMMMMMMN.
 dMMMMMMMMMMMM.
.MMMMMMMMMMMMMM
MMMMMMMMMMMMMMMo
MMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMM
.MMMMMMMMMMMMMM.
 dMMMMMMMMMMMM,
 .MMMMMMMMMMMN.
  dMMMMMMMMMX,
  .MMMMMMMMM.
   ,OMMMMMMX,
    LMMMMMM.
     NNMMMN..
     , 0MMMM.'
       OMMM0,
       .OMMMMo
         ,xNMM.
          'c.
`;

export function NeofetchView() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
            <pre className="text-primary font-bold text-[8px] leading-[1.1] sm:text-[10px]">
                {asciiArt}
            </pre>
            <div className="flex-1 space-y-1">
                <p><span className="font-bold text-primary">guest</span>@<span className="font-bold text-primary">aniketpitre.com</span></p>
                <hr className="border-border my-1" />
                <p><span className="w-24 inline-block font-bold">OS</span>: Linux aniketpitre-os x86_64</p>
                <p><span className="w-24 inline-block font-bold">Host</span>: Virtual Portfolio v1.0</p>
                <p><span className="w-24 inline-block font-bold">Kernel</span>: 6.1.0-generic</p>
                <p><span className="w-24 inline-block font-bold">Uptime</span>: 42 mins</p>
                <p><span className="w-24 inline-block font-bold">Shell</span>: ap-sh</p>
                <p><span className="w-24 inline-block font-bold">Resolution</span>: 1920x1080</p>
                <p><span className="w-24 inline-block font-bold">DE</span>: APVE</p>
                <p><span className="w-24 inline-block font-bold">Terminal</span>: /dev/pts/0</p>
                <p><span className="w-24 inline-block font-bold">CPU</span>: Intel(R) Core i9 (16) @ 3.2GHz</p>
                <p><span className="w-24 inline-block font-bold">GPU</span>: NVIDIA GeForce RTX 4090</p>
                <p><span className="w-24 inline-block font-bold">Memory</span>: 32GB</p>
                <div className="flex items-center gap-2 pt-2">
                    {Object.values(SKILL_CATEGORIES).map((cat, i) => (
                        <div key={i} className="w-4 h-4 rounded-sm" style={{ backgroundColor: cat.color }}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
