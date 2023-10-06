"use client"
import React, { useRef, useState } from 'react'
import { X, Loader2, Circle, Check } from "lucide-react"
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
import { Badge } from '../ui/badge'
import { BoltIcon } from "@heroicons/react/24/solid";
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { LinkIcon, LanguageIcon } from "@heroicons/react/20/solid";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const TranslateClient = () => {
    const languageBoxRef = useRef(null)
    const [selectedLanguage, setSelectedLanguage] = useState(null)
    const [openPopover, setOpenPopover] = useState(false);
    const [link, setLink] = useState(null)
    const [linkChecked, setLinkChecked] = useState(true)
    const checkLink = (link) => {
        const isLinkCorrect = link.includes("www.webtoons.com");
        setLinkChecked(isLinkCorrect);
    }
    const handleInput = (e) => {
        setLink(e.target.value);
        checkLink(e.target.value);
    }
    return (
        // <div className='mt-16 mx-auto max-w-lg space-y-4'>
        //     <div className='grid grid-cols-[1fr_50px_1fr] h-12 items-center justify-between   '>
        //         <div className='font-medium opacity-90 border-y border-border border-l rounded-l-xl flex items-center justify-center hover:bg-muted w-full h-full cursor-pointer text-center text-sm transition-all tracking-tight'>DETECT LANGUAGE</div>
        //         <div className='flex items-center justify-center w-full h-full border-y border-border'>
        //             <div className='justify-self-center p-2 cursor-pointer transition-all hover:bg-muted rounded-full opacity-75'><MoveRight className='w-5 h-5' /></div>
        //         </div>

        //         <Popover open={openPopover} onOpenChange={setOpenPopover}>
        //             <PopoverTrigger asChild>

        //                 <button className={`${openPopover ? "border-constructive border-l bg-constructive/5 hover:bg-constructive/10" : "hover:bg-muted"} font-medium opacity-90 outline-none border-y border-border border-r rounded-r-xl  flex items-center justify-center   w-full h-full cursor-pointer text-center text-sm transition-all tracking-tight`}>
        //                     {selectedLanguage
        //                         ? selectedLanguage.toUpperCase()
        //                         : "Select language..."}
        //                 </button>
        //             </PopoverTrigger>
        //             <PopoverContent align='end' className="max-w-lg w-full p-0 rounded-xl">
        //                 <Command className='rounded-xl w-full max-w-lg'>
        //                     <CommandInput placeholder="Search language..." />
        //                     <CommandEmpty className=''>No language found.</CommandEmpty>
        //                     <CommandGroup className='[&>div]:grid [&>div]:grid-cols-2 [&>div]:gap-2 items-center max-h-[400px] overflow-auto'>
        //                         {languages.map((language) => (
        //                             <CommandItem
        //                                 key={language.name}
        //                                 onSelect={(currentValue) => {
        //                                     setSelectedLanguage(language.name);
        //                                     setOpenPopover(false)
        //                                 }}
        //                                 className='w-full'
        //                             >
        //                                 <Check
        //                                     className={cn(
        //                                         "mr-2 h-4 w-4",
        //                                         selectedLanguage === language.name ? "opacity-100" : "opacity-0"
        //                                     )}
        //                                 />
        //                                 {language.name}
        //                             </CommandItem>
        //                         ))}
        //                     </CommandGroup>
        //                 </Command>
        //             </PopoverContent>
        //         </Popover>
        //     </div>
        //     <div className='relative'>
        //         <input onFocus={()=>setInputFocused(true)} onBlur={()=>setInputFocused(false)} value={link} onChange={(e) => setLink(e.target.value)} type='link' placeholder='Type link (only webtoons.com)' className='pl-10 placeholder:text-primary/40 outline-none w-full h-12 px-4 rounded-xl border border-border hover:bg-constructive/5 transition-all focus:border-constructive' />
        //         <div className={`${inputFocused ?"text-constructive opacity-90":"text-primary opacity-40"} absolute top-1/2 -translate-y-1/2 left-4 transition-all`}><Link className="w-4 h-4" /></div>
        //     </div>
        //     <div className='flex items-center justify-between'>
        //         <div className='flex-1 h-0.5 border-t border-border'></div>
        //         <div className='px-4 opacity-50 font-medium'>or</div>
        //         <div className='flex-1 h-0.5 border-t border-border'></div>
        //     </div>
        //     <div className=' w-full h-64 border border-border rounded-xl p-4'>
        //         <div className='relative flex  items-center justify-between px-6 cursor-pointer w-full h-full border-dashed border-constructive/30 border-2 rounded-lg bg-gradient-to-br from-constructive/10 via-constructive/5 via-[50%] to-constructive/20'>
        //             <input type='file' className='w-full h-full rounded-lg absolute top-0 left-0 cursor-pointer opacity-0' />
        //             <div className=''>
        //                 <div className='text-primary/75 font-bold text-2xl'>Translating file</div>
        //                 <div className='text-primary/50 font-bold text-xl mt-1 tracking-tight'>Drag here or <span className='text-constructive'>select</span></div>
        //             </div>
        //             <div>
        //                 <Image src={WebtoonFile} alt='WebtoonFile' width={160} height={160} />
        //             </div>
        //         </div>
        //     </div>
        //     <div>
        //         <button disabled={!((link || file) && selectedLanguage)} className='disabled:opacity-40 disabled:pointer-events-none shadow-sm w-full bg-gradient-to-br from-constructive/60 to-constructive rounded-xl px-5 py-2.5 text-secondary transition-all active:scale-95 hover:opacity-75'>Translate</button>
        //     </div>
        // </div>
        <div className={`
        mx-2`}>
            <div className='flex flex-col items-center justify-center relative
         mt-16 mx-auto max-w-4xl bg-gradient-to-b from-constructive/5 via-constructive/10 to-constructive/5 border border-constructive/10 rounded-2xl min-h-[400px] px-4 py-10 md:px-10 md:py-12'>
                <div className='opacity-80 absolute right-6 bottom-6 md:bottom-8 md:right-8 flex items-center space-x-2'>
                    <span className='text-sm font-medium opacity-75'>{((link && linkChecked) && (selectedLanguage)) ? "2" : "1"}/2</span>
                    <span>{((link && linkChecked) && (selectedLanguage)) ? <Circle className='w-4 h-4 text-constructive' /> : <Loader2 className='w-4 h-4 text-constructive' />}</span>
                </div>
                <div className=''>
                    <Badge variant={"white"} className='text-sm font-medium px-1 py-0.5 '>
                        <span className='opacity-75 flex items-center'>
                            <BoltIcon className="h-3.5 w-3.5 mr-1" />
                            The beginning...
                        </span>
                    </Badge>
                </div>
                <Separator orientation='vertical' className='h-[40px]' />
                <div className='bg-background rounded-xl px-6 pt-4 pb-6 border-border/70 border w-full md:w-4/5 shadow-sm flex flex-col transition-all'>
                    <div className='flex items-center justify-between'>
                        <div className='flex space-x-2 items-center'>
                            <Badge variant={"pink"} className='w-fit'><LinkIcon className='w-3 h-3 mr-1' /> Link</Badge>
                            <Badge variant={"purple"} className='w-fit'>Only Webtoons.com</Badge>
                        </div>
                        {!!link && <TooltipProvider>
                            <Tooltip delayDuration={100}>
                                <TooltipTrigger asChild>
                                    <div>
                                        <Badge variant={"default"} className='w-fit'>{linkChecked ? <Check className='w-3.5 h-3.5' /> : <X className='w-3.5 h-3.5' />}</Badge>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent side='bottom'>
                                    <p>{linkChecked?"Your link looks correct.":"Enter link from webtoons.com"}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>}

                    </div>
                    <input type='link' placeholder='Type link' value={link} onChange={handleInput} className='mt-4 outline-none border-none w-full flex-1' />
                </div>
                <Separator orientation='vertical' className='h-[32px]' />
                <div ref={languageBoxRef} data-disabled={(!link || !linkChecked)} className='relative data-[disabled=true]:opacity-50 data-[disabled=true]:w-3/5   transition-all  data-[disabled=true]:pointer-events-none bg-background rounded-xl px-6 pt-4 pb-6 border-border/70 border w-full md:w-4/5 shadow-sm flex flex-col '>
                    <Badge variant={"pink"} className='w-fit'><LanguageIcon className='w-3 h-3 mr-1' />Language</Badge>
                    <Popover open={openPopover} onOpenChange={setOpenPopover} className="w-full flex-1">
                        <PopoverTrigger asChild>
                            <button className={` relative mt-4 outline-none border-none w-full  text-left cursor-text whitespace-nowrap overflow-hidden text-ellipsis`}>
                                {selectedLanguage
                                    ? selectedLanguage
                                    : "Select language..."}
                            </button>
                        </PopoverTrigger>
                        <PopoverContent align='center' asChild className={`p-0 rounded-xl h-[240px] w-[${languageBoxRef?.current?.style?.width}px] mt-2`} style={{ width: languageBoxRef?.current?.clientWidth - 40 + "px" }}>
                            <Command >
                                <CommandInput placeholder="Search language..." />
                                <CommandEmpty >No language found.</CommandEmpty>
                                <CommandGroup className='[&>div]:grid [&>div]:grid-cols-2 items-start overflow-auto styled-scrollbar-8'>
                                    {languages.map((language) => (
                                        <CommandItem
                                            key={language.name}
                                            onSelect={(currentValue) => {
                                                setSelectedLanguage(language.name);
                                                setOpenPopover(false)
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
                        </PopoverContent>
                    </Popover>
                </div>

                <Separator orientation='vertical' className='h-[40px]' />
                <Button disabled={!link || !linkChecked || !selectedLanguage} variant={"default"}>Translate</Button>
            </div>
        </div >
    )
}

export default TranslateClient