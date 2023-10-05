"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { SparklesIcon } from '@heroicons/react/20/solid'
import { Separator } from '../ui/separator'
import { ChevronRight } from 'lucide-react'
const Landing = () => {
    const bodyWorldRef = useRef(null)
    const [ping, setPing] = useState({ top: 0, left: 0 })
    function generateRandomValues() {
        const randomTop = Math.floor(Math.random() * ((bodyWorldRef.current?.clientHeight - bodyWorldRef.current?.clientHeight / 2 - 100) || 100));
        const randomLeft = Math.floor(Math.random() * (bodyWorldRef.current?.clientWidth + 100 || 100));

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
                <div className="w-full  absolute top-10 left-1/2 -translate-x-1/2 ">
                    <div ref={bodyWorldRef} id='body__world' className='w-3/4 pb-[75%] mx-auto rounded-full border-t-2 border-border/75 overflow-hidden relative'>
                        {bodyWorldRef.current && Array.from({ length: Math.min(10, Math.floor(Math.random() * 20)) }, generateRandomValues).map((data, i) => (
                            <div key={i} style={{ top: data.top + "px", left: data.left + "px" }} className={`absolute ${i % 3 === 0 ? "bg-constructive" : "bg-primary"} h-1 w-1 rounded-full  relative flex items-center justify-center transition-all`}>
                                <div className={`absolute  h-1.5 w-1.5 ${i % 3 === 0 ? "bg-constructive/75" : "bg-primary/75"} animate-ping rounded-full`}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full  absolute top-[13rem]  text-center">
                    <a href='https://www.webtoons.com' target='_blank' className='group flex items-center mx-auto mb-6 w-fit'>
                        <Badge variant={"white"} className=' py-1 mx-auto text-sm'>
                            <Badge variant={"pink"} className='mr-2.5'>
                                <SparklesIcon className="h-3.5 w-3.5 mr-0.5" />
                                <span className=''>Translate</span>
                            </Badge>
                            <span className='font-medium opacity-90 inline-flex items-center space-x-2'><span>Supports Webtoons.com</span> <Separator orientation="vertical" className='h-[16px] w-[2px] opacity-75'/> <span className='opacity-60 inline-flex items-center space-x-1'>Learn more <ChevronRight className='w-4 h-4'/></span></span>
                            
                        </Badge>
                    </a>
                    <div className='text-5xl leading-normal font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary via-[45%] to-primary/20'>Enchanted by Translation</div>
                    <div className='-mt-2 text-5xl leading-normal font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary via-[45%] to-primary/20'>in Webtoon&apos;s Tongue!</div>
                    <div className='opacity-80 text-base mt-2 font-medium'>Translate webtoons into the language you want.</div>
                    <div className='mt-16'>
                        <Button variant={"pink"} className='px-2 h-9 text-base mx-auto rounded-lg'>Get started</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing