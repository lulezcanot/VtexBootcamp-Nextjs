'use client';
import { chart, home, login } from '@/utils/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../public/imagenes/logo.jpg';
import { usePathname, useRouter } from 'next/navigation';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';

function Header() {
    const pathname = usePathname();
    const router = useRouter();

    const menu = [
        {
            name: "Inicio",
            link: "/"
        },
        {
            name: "Cursos",
            link: "/cursos"
        },
        {
            name: "Documentación",
            link: "/documentacion"
        },
        {
            name: "Recursos",
            link: "/recursos"
        },
        {
            name: "Stats",
            link: "/stats"
        }
    ];

  return (
    <header className='min-h-[8vh] px-[10rem] xl:px-[15rem] border-b-2 flex items-center'>
        <nav className='flex-1 flex items-center justify-between'>
            <Link href="/" className='flex items-center gap-2'>
            <Image src={Logo} alt='logo' className="h-8 w-8 text-purple-600"  />
            <span className="text-xl font-semibold text-purple-600">VTEX Academy</span>
            </Link>
            <ul className='flex items-center gap-8'>
                {menu.map((item, index)=>(
                    <li key={index}>
                        <Link href={item.link} 
                        className={`py-2 px-4 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors
                            ${
                                pathname === item.link ? "text-purple-600 font-semibold" : ""
                            }
                            `}>
                        {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div>
                <SignedIn>
                   <UserButton
                   appearance={{
                    elements:{
                        userButtonAvatarBox: "w-12 h-12 border-2 border-gray-300 rounded-full",
                    }
                   }}
                   /> 
                </SignedIn>
                <SignedOut>
                    <Button className='bg-purple-600 text-white px-6 py-2 rounded-full font-medium 
            hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 
            focus:ring-purple-500 focus:ring-offset-2'
                    onClick={()=> router.push("/sign-in")}
                    >
                        {login}
                        Login / Sign Up
                    </Button>
                </SignedOut>
            </div>
        </nav>
    </header>
  )
}

export default Header
