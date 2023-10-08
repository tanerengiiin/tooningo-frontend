"use client"
import React, { useEffect } from 'react'
import { useAuthContext } from '@/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import logout from "@/firebase/auth/logout"
import Link from 'next/link';
import { Gem } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
const UserLog = () => {
    const { user, loading } = useAuthContext()
    useEffect(()=>{
        console.log(user)
    },[user])
    return (
        loading ? <div className='w-14 h-8 rounded-lg bg-muted animate-pulse'></div> :
            (user ?
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className='w-7 h-7 cursor-pointer hover:opacity-75 transition-all'>
                            <AvatarImage src={user?.photoURL} />
                            <AvatarFallback>{user?.displayName.slice(0,1)}</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" sideOffset={14} className="border-border/70 min-w-[240px]">
                        <DropdownMenuLabel asChild> 
                            <div>
                                <div className='font-normal'>{user?.displayName}</div>
                                <div className='font-normal text-xs text-primary/70 mt-0.5 max-w-[240px] whitespace-nowrap text-ellipsis overflow-hidden'>{user?.email}</div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                            <div className='flex items-center justify-between mt-1 mb-0.5'>
                                <div className='flex items-center space-x-1.5'>
                                    <Badge variant={"purple"}><Gem className='w-3.5 h-3.5 stroke-[1.6]'/></Badge>
                                    <span className=''>Free Now!</span>
                                </div>
                                <button className='bg-primary/10 px-2 text-xs font-medium py-1 rounded-lg opacity-50 cursor-not-allowed'>Buy</button>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Join Discord</DropdownMenuItem>
                        <DropdownMenuItem onClick={logout}>Sign out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                :
                <Link href={"/login"} className="text-sm opacity-100 outline-none hover:opacity-75 transition-all tracking-normal inline-flex items-center space-x-0.5">
                    <span>Log in</span>
                    <ChevronRightIcon className="h-3.5 w-3.5 " />
                </Link>
            )
    )
}

export default UserLog