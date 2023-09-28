"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import WebtoonFile from "@/public/WebtoonFile.png"
import { Check, ChevronsUpDown, MoveRight, Link } from "lucide-react"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { languages } from "@/lib/languages"
import { cn } from '@/lib/utils'
const TranslateClient = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("English")
    const [openPopover, setOpenPopover] = useState(false);
    const [link, setLink] = useState(null)
    const [file, setFile] = useState(null)
    const [inputFocused,setInputFocused]=useState(false)
    return (
        <div className='mt-16 mx-auto max-w-lg space-y-4'>
            <div className='grid grid-cols-[1fr_50px_1fr] h-12 items-center justify-between   '>
                <div className='font-medium opacity-90 border-y border-border border-l rounded-l-xl flex items-center justify-center hover:bg-muted w-full h-full cursor-pointer text-center text-sm transition-all tracking-tight'>DETECT LANGUAGE</div>
                <div className='flex items-center justify-center w-full h-full border-y border-border'>
                    <div className='justify-self-center p-2 cursor-pointer transition-all hover:bg-muted rounded-full opacity-75'><MoveRight className='w-5 h-5' /></div>
                </div>

                <Popover open={openPopover} onOpenChange={setOpenPopover}>
                    <PopoverTrigger asChild>

                        <button className={`${openPopover ? "border-constructive border-l bg-constructive/5 hover:bg-constructive/10" : "hover:bg-muted"} font-medium opacity-90 outline-none border-y border-border border-r rounded-r-xl  flex items-center justify-center   w-full h-full cursor-pointer text-center text-sm transition-all tracking-tight`}>
                            {selectedLanguage
                                ? selectedLanguage.toUpperCase()
                                : "Select language..."}
                        </button>
                    </PopoverTrigger>
                    <PopoverContent align='end' className="max-w-lg w-full p-0 rounded-xl">
                        <Command className='rounded-xl w-full max-w-lg'>
                            <CommandInput placeholder="Search language..." />
                            <CommandEmpty className=''>No language found.</CommandEmpty>
                            <CommandGroup className='[&>div]:grid [&>div]:grid-cols-2 [&>div]:gap-2 items-center max-h-[400px] overflow-auto'>
                                {languages.map((language) => (
                                    <CommandItem
                                        key={language.name}
                                        onSelect={(currentValue) => {
                                            setSelectedLanguage(language.name);
                                            setOpenPopover(false)
                                        }}
                                        className='w-full'
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                selectedLanguage === language.name ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {language.name}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
            <div className='relative'>
                <input onFocus={()=>setInputFocused(true)} onBlur={()=>setInputFocused(false)} value={link} onChange={(e) => setLink(e.target.value)} type='link' placeholder='Type link (only webtoons.com)' className='pl-10 placeholder:text-primary/40 outline-none w-full h-12 px-4 rounded-xl border border-border hover:bg-constructive/5 transition-all focus:border-constructive' />
                <div className={`${inputFocused ?"text-constructive opacity-90":"text-primary opacity-40"} absolute top-1/2 -translate-y-1/2 left-4 transition-all`}><Link className="w-4 h-4" /></div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex-1 h-0.5 border-t border-border'></div>
                <div className='px-4 opacity-50 font-medium'>or</div>
                <div className='flex-1 h-0.5 border-t border-border'></div>
            </div>
            <div className=' w-full h-64 border border-border rounded-xl p-4'>
                <div className='relative flex  items-center justify-between px-6 cursor-pointer w-full h-full border-dashed border-constructive/30 border-2 rounded-lg bg-gradient-to-br from-constructive/10 via-constructive/5 via-[50%] to-constructive/20'>
                    <input type='file' className='w-full h-full rounded-lg absolute top-0 left-0 cursor-pointer opacity-0' />
                    <div className=''>
                        <div className='text-primary/75 font-bold text-2xl'>Translating file</div>
                        <div className='text-primary/50 font-bold text-xl mt-1 tracking-tight'>Drag here or <span className='text-constructive'>select</span></div>
                    </div>
                    <div>
                        <Image src={WebtoonFile} alt='WebtoonFile' width={160} height={160} />
                    </div>
                </div>
            </div>
            <div>
                <button disabled={!((link || file) && selectedLanguage)} className='disabled:opacity-40 disabled:pointer-events-none shadow-sm w-full bg-gradient-to-br from-constructive/60 to-constructive rounded-xl px-5 py-2.5 text-secondary transition-all active:scale-95 hover:opacity-75'>Translate</button>
            </div>
        </div>
    )
}

export default TranslateClient