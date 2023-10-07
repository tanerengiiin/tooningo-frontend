"use client"
import React, { useRef, useState } from 'react'
import { X, Loader2, Circle, Check, Loader2Icon, XIcon } from "lucide-react"
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
import Link from 'next/link'


const TranslateClient = () => {
    const languageBoxRef = useRef(null)
    const [selectedLanguage, setSelectedLanguage] = useState(null)
    const [openPopover, setOpenPopover] = useState(false);
    const [link, setLink] = useState(null)
    const [linkChecked, setLinkChecked] = useState(true)
    const [loading, setLoading] = useState(false);
    const [translatedFile, setTranslatedFile] = useState(null);
    const [alert, setAlert] = useState({
        variant: "",
        content: ""
    })
    const checkLink = (link) => {
        const isLinkCorrect = link.includes("webtoons.com");
        setLinkChecked(isLinkCorrect);
    }
    const handleInput = (e) => {
        setLink(e.target.value);
        checkLink(e.target.value);
    }
    const handleTranslate = (e) => {
        if (link && linkChecked && selectedLanguage) {
            setLoading(true);
            setAlert(prev => ({
                ...prev,
                variant: "",
                content: "Please wait, this might take a moment."
            }))
            setTimeout(() => {
                setLoading(false);
                setAlert(prev => ({
                    ...prev,
                    variant: "",
                    content: ""
                }))
                setTranslatedFile({})
            }, 5000);
        }
    }
    const clearInput = () => {
        setLink("");
        setLinkChecked(false);
        setLoading(false);
        setOpenPopover(false);
        setSelectedLanguage(null);
        setTranslatedFile(null)
    }
    return (

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
                                    <p>{linkChecked ? "Your link looks correct." : "Enter link from webtoons.com"}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>}

                    </div>
                    <input disabled={loading} type='link' placeholder='Type link' value={link} onChange={handleInput} className='disabled:cursor-not-allowed mt-4 outline-none border-none w-full flex-1' />
                </div>
                <Separator orientation='vertical' className='h-[32px]' />
                <div ref={languageBoxRef} data-disabled={(!link || !linkChecked)} className='relative data-[disabled=true]:opacity-50 data-[disabled=true]:w-3/5   transition-all  data-[disabled=true]:pointer-events-none bg-background rounded-xl px-6 pt-4 pb-6 border-border/70 border w-full md:w-4/5 shadow-sm flex flex-col '>
                    <Badge variant={"pink"} className='w-fit'><LanguageIcon className='w-3 h-3 mr-1' />Language</Badge>
                    <Popover open={openPopover} onOpenChange={setOpenPopover} className="w-full flex-1">
                        <PopoverTrigger asChild>
                            <button disabled={loading} className={`disabled:cursor-not-allowed relative mt-4 outline-none border-none w-full  text-left cursor-text whitespace-nowrap overflow-hidden text-ellipsis`}>
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
                                            disabled={loading}
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
                {!translatedFile ? <Button onClick={handleTranslate} disabled={loading || !link || !linkChecked || !selectedLanguage} variant={"default"}>{!!loading && <Loader2Icon className='w-3.5 h-3.5 animate-spin mr-1.5' />}{loading ? "Translating" : "Translate"}</Button>
                    : <div className='border-t border-border flex items-center pt-4 px-4'>
                        <Link href={"/preview"} target='_blank'><Button variant={"purple"}>Preview</Button></Link>
                        <Button className='mx-4'>Download</Button>
                        <TooltipProvider>
                            <Tooltip delayDuration={100}>
                                <TooltipTrigger asChild>
                                    <div>
                                        <Button variant={"white"} onClick={clearInput} className='min-w-0 w-8 h-8 rounded-full'><XIcon className='w-4 h-4' /></Button>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent sideOffset={12} side='bottom'>
                                    <p>You can clear the inputs and translate again.</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>}
                <div className={`mt-4 text-xs opacity-80 transition-all duration-200 ${!!(alert.variant === "destructive") && "text-[--form-button-destructive-normal] opacity-90"}`}>{alert.content}</div>
            </div>
        </div >
    )
}

export default TranslateClient

//--form-button-destructive-normal