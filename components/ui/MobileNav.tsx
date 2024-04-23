"use client"

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { sidebarlinks } from '@/constants'
import { usePathname } from 'next/navigation'


const MobileNav = () => {
    const pathname = usePathname();

    return (
        <section className='w-full max-w-[264px]'>
            <Sheet >
                <SheetTrigger asChild>
                    <Image
                        width={36}
                        height={36}
                        src="/icons/hamburger.svg"
                        alt="hamburger"
                        className='cursor-pointer sm:hidden'
                    />
                </SheetTrigger>
                <SheetContent side="left"
                    className='border-none bg-dark-1'
                >
                    <Link className='flex items-center gap-1' href='/'>
                        <Image
                            src='/icons/logo.svg'
                            height={32}
                            width={32}
                            alt="Yoom Logo"
                            className='max-sm:size-10'
                        />
                        <p className='text-[26px] font-extrabold text-white'>
                            Yoom
                        </p>
                    </Link>
                    <div className='flex h-[calc(100vh-72px)]
                    flex-col justify-between overflow-y-auto
                    '>
                        <section className='flex h-full flex-col gap-6 pt-16 text-white'>
                            {sidebarlinks.map((link: any) => {
                                const isActive = pathname == link.route || pathname.startsWith(`link.route/`);
                                return (
                                    <SheetClose key={link.label} asChild>
                                        <Link
                                            key={link.label}
                                            href={link.route}
                                            className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60', { 'bg-blue-1': isActive, })}
                                        >
                                            <Image
                                                alt={link.label}
                                                src={link.imgUrl}
                                                width={20}
                                                height={20}
                                            />
                                            <p className='font-semibold'>{link.label}</p>
                                        </Link>
                                    </SheetClose>
                                )
                            })}
                        </section>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav