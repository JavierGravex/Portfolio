"use client"
import Link from "next/link"
import { usePathname  } from "next/navigation"
import Themetoggle from "@/src/components/themetoggle" 


export default function Navbar(){
	const linkClass = "flex h-8 w-full items-center justify-center rounded-full dark:border-white/[.145] hover:bg-gray-200 dark:hover:bg-[#1a1a1a] md:w-[158px]"
	const activeLinkClass = linkClass + " bg-gray-200 dark:bg-[#1a1a1a]"
	const pathname = usePathname()

	return(
		<nav className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-2 dark:border-white/[.145] md:w-[408px]"
					>
					
			<Link 
			className={pathname == "/" ? activeLinkClass : linkClass}
			href="/">Home</Link>
			<Link 
			className={pathname == "/about" ? activeLinkClass  : linkClass}
			href="/about">About me</Link>
			<Link 
			className={pathname == "/projects" ? activeLinkClass : linkClass}
			href="/projects">Projects</Link>

			<div className="flex h-8 w-full items-center justify-center rounded-full dark:border-white/[.145] hover:bg-gray-200 dark:hover:bg-[#1a1a1a] md:w-[58px]">
				<Themetoggle/>
			</div>
		</nav>
	);
}