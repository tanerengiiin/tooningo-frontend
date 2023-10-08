"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { Zap, ZapOff } from 'lucide-react';
import PreviewWebtoon from "./PreviewWebtoon"
const Preview = () => {
    const [closedLight, setClosedLight] = useState(false);

    const [isTop, setIsTop] = useState(true);
    const handleScroll = () => {
        if (window.scrollY === 0) {
            setIsTop(true);
        } else {
            setIsTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav className={`${isTop ? "md:opacity-100":"md:opacity-0"} opacity-100  hover:opacity-100 transition-all duration-500 w-full h-[40px] md:h-[48px] cursor-pointer fixed top-0 left-0 bg-primary grid grid-cols-2 items-center justify-between px-2 md:px-8`}>
                <Link href={"/"} target='_blank' className='font-bold text-lg text-white'>TOONINGO</Link>
                <div className='justify-self-end flex items-center space-x-4'>
                    <Link href={"/translate"} target='_blank' className='text-secondary text-sm hover:underline'>Translate</Link>
                    <Button variant={"white"} className='sm:flex hidden' onClick={() => setClosedLight(!closedLight)}>
                        {closedLight ? <>
                            <span><Zap className='w-4 h-4' /></span>
                            <span>Turn on</span>
                        </> :
                            <>
                                <span><ZapOff className='w-4 h-4' /></span>
                                <span>Turn off</span>
                            </>}
                    </Button>
                </div>
            </nav>
            <div className={`w-full ${closedLight ? "bg-primary" : "bg-background"} transition-all duration-300`}>
                            <PreviewWebtoon/>
            </div>
        </>
    )
}

export default Preview