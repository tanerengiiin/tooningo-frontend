"use client"
import React, { useState, useEffect, useRef } from 'react'

const Body = () => {
    const bodyWorldRef = useRef(null)
    const [ping, setPing] = useState({ top: 0, left: 0 })
    function generateRandomValues() {
        const randomTop = Math.floor(Math.random() * ((bodyWorldRef.current?.clientHeight - bodyWorldRef.current?.clientHeight / 2 - 100) || 100)); // Rastgele bir "top" değeri üretir
        const randomLeft = Math.floor(Math.random() * (bodyWorldRef.current?.clientWidth + 100 || 100)); // Rastgele bir "left" değeri üretir

        return { top: randomTop, left: randomLeft };
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (document.visibilityState === 'visible') {
                bodyWorldRef && setPing(generateRandomValues())
            }

        }, 2000);
        return () => clearInterval(interval);
    }, [bodyWorldRef]);
    return (
        <div>
            <div className="w-full relative mt-4">
                <div className="w-full  absolute top-10 left-1/2 -translate-x-1/2">
                    <div ref={bodyWorldRef} id='body__world' className='w-3/4 pb-[75%] mx-auto rounded-full border-t-2 border-border/75 overflow-hidden relative'>
                        {bodyWorldRef.current && Array.from({ length: Math.min(10, Math.floor(Math.random() * 20)) }, generateRandomValues).map((data, i) => (
                            <div key={i} style={{ top: data.top + "px", left: data.left + "px" }} className={`absolute ${i % 3 === 0 ? "bg-constructive" : "bg-primary"} h-1 w-1 rounded-full  relative flex items-center justify-center transition-all`}>
                                <div  className={`absolute  h-1.5 w-1.5 ${i % 3 === 0 ? "bg-constructive/75" : "bg-primary/75"} animate-ping rounded-full`}></div>
                            </div>
                        ))}

                    </div>

                </div>

                <div className="w-full  absolute top-60   text-center">
                    <div className='text-5xl leading-normal font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary via-[45%] to-primary/20'>Enchanted by Translation</div>
                    <div className='-mt-2 text-5xl leading-normal font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary via-[45%] to-primary/20'>in Webtoon's Tongue!</div>
                    <div className='opacity-50 font-medium mt-2'>Translate webtoons into the language you want.</div>
                    <div className='mt-16'>
                        <button className='shadow-sm bg-gradient-to-br from-constructive/60 to-constructive rounded-xl px-5 py-2.5 text-secondary transition-all active:scale-95 hover:opacity-75'>Get started</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Body