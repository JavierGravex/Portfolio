"use client"
import { FaSun, FaMoon } from "react-icons/fa"
import { useState, useEffect} from "react"



export default function Themetoggle(){
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		// console.log("isDark:", isDark)
			if (isDark) {
				document.documentElement.classList.add("dark")
			}
			else{
				document.documentElement.classList.remove("dark")
			}
		}, [isDark])

	return(
		<button onClick={() => setIsDark(!isDark)}>
			{isDark ? <FaSun size={16}/> : <FaMoon size={16}/>}
		</button>

		

	)

}