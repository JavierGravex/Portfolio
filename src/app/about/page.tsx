import Image from "next/image";
import { Mail, FileText } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa"


export default function Home() {
  const icons = "flex h-8 w-full items-center justify-center rounded-full border border-gray-600 hover:bg-[#1a1a1a] bg-background md:w-[58px]"
  return (
    <div className="flex ">
      {/*Left*/}
      <div className="fixed top-16 w-85 h-screen flex flex-col items-center pt-8 gap-2">
      <Image  
                src="/images/Javer-Profile-Picture.png"
                alt="profile picture"
                width={158} 
                height={158}
                className="rounded-full object-cover"
              />
            
      </div>
   
    
    {/*Right side*/}
      <div className="flex-1 px-8 pt-8 ml-80 ">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-7xl font-bold">Javier Arias</h1>
            <h2 className="text-2xl text-gray-400">Software Engineer</h2>
            
          <div className="flex gap-2 pt-2">

                <a href="mailto:javierariast0@gmail.com" className={icons}>
                 <Mail size={20}/> </a>
             
                <a href="https://www.linkedin.com/in/javier-arias-45495b120/" className={icons} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20}/></a>
           
                <a href="https://github.com/JavierGravex" className={icons} target="_blank" rel="noopener noreferrer">
                <FaGithub size={20}/></a>
            
                <a href="/files/Javier_Arias_resume_S.pdf" className={icons} target="_blank" rel="noopener noreferrer" >
                <FileText size={20}/></a>
           
            </div>
        </div>
       
           

          <h2 className="text-4xl font-bold mt-2"> About me </h2>
          
          <p>
          I'm a CS grad with 7+ years of experience in the medical field.
          Worked on a sociolinguistic research project where I did data visualization and managed their websites. 
          I led an Agile team to build an "agentic" application to help students get better results in their job search. 
          I'll bring all my experience and reliability to any project.
          </p>
          <h2 className="text-4xl font-bold mt-2"> Education </h2>
          
          <div>
          <p><strong> B.S Computer Science </strong> 
          - University of Texas Rio Grande Valley</p>
          <p className="text-gray-400 text-sm"> GPA: 3.55 · Cum Laude · Class of 2026 </p>
          </div>
          <h2 className="text-4xl font-bold mt-2">Work Experience</h2>
          <p> 
            <strong>
              Web Developer & Research Data Assistant
            </strong> — UTRGV
            <em>(May 2024 - April 2026)</em>
          </p>
          <ul className="list-disc list-inside"> 
            <li> Built interactive data dashboards using Python (Plotly/Dash) for the CoBiVa sociolinguistic research project </li>
            <li> Designed ETL pipelines using Pandas to clean and transform complex research datasets </li>
            <li> Managed department web content in Cascade CMS with full WCAG accessibility compliance </li>
          </ul>
          
          <p> 
            <strong>
              Certified Clinical Hemodialysis Technician (CCHT) 
            </strong> — Fresenius Medical
            <em>(Sep 2018 - Mar 2026)</em>
          </p>
          <ul className="list-disc list-inside"> 
            <li>Maintained and troubleshot critical hemodialysis equipment for 20+ patients per shift over 7+ years, diagnosing and resolving system failures under real-time constraints with zero treatment interruptions.</li>
          </ul>


          <h2 className="text-4xl font-bold mt-2"> Technical Skills</h2>
          <table>
            <tbody>
              <tr>
                <td className="w-48 align-top"><strong>Languages:</strong></td>
                <td>Python, C++, JavaScript, Typescript, SQL </td>
              </tr>
               <tr>
                <td className="w-48 align-top"><strong>FrontEnd:</strong></td>
                <td>React, Next.js, HTML5, CSS, Flutter </td>
              </tr>
              <tr>
                <td className="w-48 align-top"><strong>BackEnd:</strong></td>
                <td>Flask, FastAPI, REST APIs </td>
              </tr>
              <tr>
                <td className="w-48 align-top"><strong>Database & Cloud:</strong></td>
                <td>PostgreSQL, Supabase </td>
              </tr>
              <tr>
                <td className="w-48 align-top"><strong>Data & Vizualisation:</strong>: </td>
                <td>Pandas, NumPy, Plotly, Matplotlib </td>
              </tr>
              
              <tr>
                <td className="w-48 align-top"><strong>Developer Tools:</strong> </td>
                <td>Git, GitHub, Linux, Agile/Scrum </td>
              </tr>

               <tr>
                <td className="w-48 align-top"><strong>AI & Automation:</strong>: </td>
                <td>OpenAI API, workflow automation </td>
              </tr>

            </tbody>
          </table>

          <h2 className="text-4xl font-bold mt-2"> Soft Skills</h2>
          <table>
            <tbody>
              <tr>
                <td className="w-48 align-top">Languages:</td>
                <td>Fluent in English and Spanish (B3 Seal of Biliteracy)</td>
              </tr>
               <tr>
                <td className="w-48 align-top">Communication:</td>
                <td>Community Theater, 7+ years of direct patient care experience in Healthcare </td>
              </tr>
            
              </tbody>
              </table>

        </div>

      </div>

    </div>
  );
}
