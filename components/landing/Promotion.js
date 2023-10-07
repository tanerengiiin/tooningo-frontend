"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Badge } from '../ui/badge'
import { BoltIcon, FolderIcon, LanguageIcon, LinkIcon } from '@heroicons/react/24/solid'
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
import { languages } from '@/lib/languages'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
const Promotion = () => {
    const languageBoxRef = useRef(null)
    const [selectedLanguage, setSelectedLanguage] = useState(null)
    return (
        <div className='max-w-7xl mx-auto space-y-4 px-4'>
            <div className='mb-10'>
                <Badge variant={"white"} className='text-sm font-medium px-1 py-0.5 '>
                    <span className='opacity-75 flex items-center'>
                        <BoltIcon className="h-3.5 w-3.5 mr-1" />
                        The beginning...
                    </span>
                </Badge>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[40%_1fr] gap-4'>
                <div className='relative overflow-hidden
        bg-gradient-to-b from-constructive/10  to-constructive/20 border border-constructive/10 rounded-2xl h-[440px] px-4 py-10 md:px-10 md:py-12 w-full'>
                    <h1 className='text-2xl font-bold opacity-70'>Get webtoon link from Webtoons.com</h1>
                    <div className='bg-background rotate-1 rounded-xl px-4 pt-4 pb-2 border-border/70 border w-full mt-4 relative z-20 shadow-md flex flex-col transition-all'>
                        <div className='flex items-center justify-between'>
                            <div className='flex space-x-2 items-center'>
                                <Badge variant={"pink"} className='w-fit'><LinkIcon className='w-3 h-3 mr-1' /> Link</Badge>
                                <Badge variant={"purple"} className='w-fit'>Only Webtoons.com</Badge>
                            </div>
                        </div>
                        <input type='link' placeholder='Type link' value={"https://www.webtoons.com/en/fantasy/corpse-knight-gunther/episode-40-season-2-premiere/viewer?title_no=5032&episode_no=40"} className='mt-4 outline-none border-none w-full flex-1' />
                    </div>
                    <div className='absolute  -bottom-10 -right-40 -rotate-12 z-10'>
                        <Image className='object-contain rounded-lg w-[600px] h-auto shadow-md border border-primary/5' sizes='100vw' src={"https://cdn.discordapp.com/attachments/785843635748732959/1160129662798798918/image.png?ex=653389f1&is=652114f1&hm=7e593b554e78543eb1608d525ec3d2388ac143e39f03ad879b39d87ffc56e18d&"} width={0} height={0} />
                    </div>
                </div>
                <div className='relative
        bg-gradient-to-r from-constructive/10  to-constructive/20 border border-constructive/10 rounded-2xl h-[440px] px-4 py-10 md:px-10 md:py-12 w-full'>
                    <h1 className='text-2xl font-bold opacity-70' >Choose the language you will translate</h1>
                    <div ref={languageBoxRef} className='relative  transition-all  data-[disabled=true]:pointer-events-none bg-background mt-6 lg:mt-12 rounded-xl px-4 pt-4 pb-2 border-border/70 border w-1/2 shadow-sm flex flex-col '>
                        <Badge variant={"pink"} className='w-fit'><LanguageIcon className='w-3 h-3 mr-1' />Language</Badge>
                        <button className={` relative mt-4 outline-none border-none w-full  text-left cursor-text whitespace-nowrap overflow-hidden text-ellipsis`}>
                            {selectedLanguage
                                ? selectedLanguage
                                : "Select language..."}
                        </button>
                        <div className='absolute top-24 shadow-md border w-full left-0 bg-background rounded-lg p-0 h-[200px]'>
                            <Command className='rounded-lg p-0'>
                                <CommandInput placeholder="Search language..." />
                                <CommandEmpty >No language found.</CommandEmpty>
                                <CommandGroup className='[&>div]:grid [&>div]:grid-cols-2 items-start overflow-auto styled-scrollbar-8'>
                                    {languages.map((language) => (
                                        <CommandItem
                                            key={language.name}
                                            onSelect={(currentValue) => {
                                                setSelectedLanguage(language.name);
                                            }}
                                            className='w-full cursor-pointer rounded-lg my-1.5 '
                                        >
                                            <span><Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    selectedLanguage === language.name ? "opacity-100" : "opacity-0"
                                                )}
                                            /></span>
                                            <span className='whitespace-nowrap overflow-hidden text-ellipsis'>{language.name}</span>
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </div>
                    </div>
                    <div className='absolute right-[5%] bottom-[10%] bg-background rounded-lg  px-3 py-1.5 rotate-3 shadow-sm border border-primary/10'>
                        <span className='opacity-75 text-base lg:text-xl font-medium'>
                            English
                        </span>
                    </div>
                    <div className='absolute right-[14%] bottom-[48%] bg-background rounded-lg  px-3 py-1.5 -rotate-3 shadow-sm border-primary/10'>
                        <span className='opacity-75 text-lg lg:text-2xl font-medium'>
                            Turkish
                        </span>
                    </div>
                    <div className='absolute right-[28%] bottom-[20%] bg-background rounded-lg px-2 py-1 lg:px-3 lg:py-1.5 -rotate-3 shadow-sm border-primary/10'>
                        <span className='opacity-75 text-sm lg:text-lg font-medium'>
                            Spanish
                        </span>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_40%] gap-4'>
                <div className='
        bg-gradient-to-tl from-constructive/10  to-constructive/20 border border-constructive/10 rounded-2xl h-[440px] px-4 py-10 md:px-10 md:py-12 w-full'>
                    <h1 className='text-2xl font-bold opacity-70'>View the translated webtoon</h1>


                </div>
                <div className='
        bg-gradient-to-bl from-constructive/10  to-constructive/20 border border-constructive/10 rounded-2xl h-[440px] px-4 py-10 md:px-10 md:py-12 w-full'>
                    <h1 className='text-2xl font-bold opacity-70'>Or download</h1>
                    <div className='bg-background rounded-xl px-4 pt-4 pb-2 border-border/70 border w-full relative z-20 shadow-md flex flex-col transition-all mt-10'>
                        <div className='flex items-center justify-between'>
                            <div className='flex space-x-2 items-center'>
                                <Badge variant={"pink"} className='w-fit'><FolderIcon className='w-3 h-3 mr-1' /> File</Badge>
                            </div>
                        </div>
                        <input type='link' placeholder='Type filename' value={""} className='mt-4 outline-none border-none w-full flex-1' />
                    </div>                        
                <Button className='mt-20 mx-auto [&>span]:text-lg h-12 px-4'>Download File</Button>                           
                </div>
            </div>
        </div>
    )
}

export default Promotion