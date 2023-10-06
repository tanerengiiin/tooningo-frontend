"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Button } from '@/components/ui/button';
import { Zap, ZapOff } from 'lucide-react';
import Image from 'next/image';
const PreviewPage = () => {
    const [closedLight, setClosedLight] = useState(false);
    const [files, setFiles] = useState([])

    const [isTop, setIsTop] = useState(true);
    useEffect(() => {
        const dosyaAdlari = [];
        for (let i = 1; i <= 158; i++) {
            const dosyaAdi = i.toString().padStart(3, '0');
            dosyaAdlari.push(`/images/${dosyaAdi}.jpg`);
        }
        setFiles(dosyaAdlari)
    }, [])
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
            <nav className='opacity-100 md:opacity-0 hover:opacity-100 transition-all duration-500 w-full h-[40px] md:h-[48px] cursor-pointer fixed top-0 left-0 bg-primary grid grid-cols-2 items-center justify-between px-2 md:px-8'>
                <Link href={"/"} className='font-bold text-lg text-white'>TOONINGO</Link>
                <div className='justify-self-end flex items-center space-x-4'>
                    <Link href={"/translate"} className='text-secondary text-sm hover:underline'>Translate</Link>
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
                <div className='max-w-2xl mx-auto'>
                    {files.map((dosya, index) => (
                        <Image src={dosya} alt={`Görsel ${index + 1}`} width={0} height={0} className='w-full h-auto' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PreviewPage