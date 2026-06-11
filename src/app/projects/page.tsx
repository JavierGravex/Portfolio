import Image from "next/image";

export default function Home() {
  
  return (
    <div className="px-8 pt-8">
      
      <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>

      <div className="grid grid-cols-2 gap-6">
        
      {/* Card 1 */}
        <div className="border rounded-xl overflow-hidden">

          <div className="h-100 overflow-hidden">
          <video 
          src="/videos/demo-smart.mp4"
          controls
          muted
          playsInline
          className="w-full h-full object-contain"
          />
          </div>

          <div className="p-4 overflow-y-auto max-h-32">
            <a href="https://github.com/JavierGravex/SmartApply" target="_blank" rel="noopener noreferrer">
            <h3 className="text-xl font-bold mt-2"> Smart-Apply</h3> </a>
            
            <h2 className=" text-gray-400"> AI Powered Job Assistant</h2>
            
            <p>
              An AI-powered web app that analyzes job postings, parses resumes, 
              and verifies company legitimacy to help job seekers apply smarter.
            </p>

          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-xl overflow-hidden">
          
          <div className="h-100 overflow-hidden">
          <video 
          src="/videos/demo-notebook.mp4"
          controls
          muted
          playsInline
          className="w-full h-full object-contain"
          />
          </div>

          <div className="p-4 overflow-y-auto max-h-32">
            <a href="https://github.com/JavierGravex/Blog_Notebook" target="_blank" rel="noopener noreferrer">
            <h3 className="text-xl font-bold mt-2"> Blog Notebook </h3> </a>
            
            <h2 className=" text-gray-400"> Full-Stack Blogging Platform </h2>
            
            <p>
              A modern blog platform with an admin dashboard for publishing Markdown posts, 
              plus built-in newsletter signup and basic post analytics.
            </p>

          </div>
        </div>

         {/* Card 3 */}
        <div className="border rounded-xl overflow-hidden">
          <div className="h-100 overflow-hidden">
          <Image 
          src="/images/demo-cobiva.gif"
          alt="gif"
          width={400} 
          height={300}
          className="w-full h-full object-contain"
          />
          </div>

          <div className="p-4 overflow-y-auto max-h-32">
            <a href="https://github.com/JavierGravex/Sociolinguistic-Data-Viz" target="_blank" rel="noopener noreferrer">
            <h3 className="text-xl font-bold mt-2"> CoBiVa  </h3> </a>
            
            <h2 className=" text-gray-400"> Bilingual Language Dominance Dashboard </h2>
            
            <p>
              An interactive data visualization suite built for the Corpus Bilingüe del Valle 
              sociolinguistic research project at UTRGV.
            </p>

          </div>
        </div>

         {/* Card 4 */}
        <div className="border rounded-xl overflow-hidden">
          
          <div className="h-100 overflow-hidden">
          <video 
          src="/videos/demo-bmi.mp4"
          controls
          muted
          playsInline
          className="w-full h-full object-contain"
          />
          </div>

          <div className="p-4 overflow-y-auto max-h-32">
            <a href="https://github.com/JavierGravex/BMI_Calculator" target="_blank" rel="noopener noreferrer">
            <h3 className="text-xl font-bold mt-2"> BMI Calculator  </h3> </a>
            
            <h2 className=" text-gray-400"> BMI Calculator </h2>
            
            <p>
              A cross-platform BMI calculator with a Figma-designed UI and full test coverage.
            </p>

          </div>
        </div>

</div>


       
       

    </div>
  );
}
