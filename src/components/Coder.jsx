const Coder = () => {
  return (
    <div className="relative h-[91vh] ">
      {/* Background Pattern */}
     <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#15803d_100%)]"></div>
        </div>

      {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center mx-auto h-full px-6 py-20 text-center md:max-w-4xl max-w-2xl">
          {/* Profile / Avatar */}
          <div className="mb-5 flex justify-center">
            <img
              src="/pic.jpg" // replace with your photo
              alt="Faisal Avatar"
              className="w-35 md:w-44 h-35 md:h-44 rounded-full border-4 border-green-900 shadow-lg "
            />
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl text-slate-900">
            Hi, I’m <span className="text-green-900">Faisal</span>
          </h1>

          {/* Role */}
          <h2 className="mb-4 text-lg font-medium text-slate-800">
            Frontend Developer • BCA Final Year Student
          </h2>

          {/* Summary */}
          <p className="mx-auto mb-8 max-w-2xl text-sm md:text-lg text-slate-700">
            Passionate Frontend Developer skilled in{" "}
            <span className="font-semibold">JavaScript, TypeScript, React.js, Next.js, Redux, and Tailwind CSS</span>.  
            Currently learning server-side rendering with Next.js App Router.  
            I love solving real-world problems through{" "}
            <span className="font-semibold">web development and API integration</span>,  
            and I’m always eager to learn and contribute in collaborative environments.
          </p>


        <div className="w-[80vw] md:w-[70%] text-[1.5rem] md:text-[2.5rem] text-center mx-auto">
          
          <div className="mt-6 flex justify-center items-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/faisalzGIT"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 py-1 text-[17px] text-green-500 flex gap-1 border-black border-[2px] hover:border-[#0D542B] rounded-full hover:text-white transition-all duration-300"
            >
              <img
                src="/github.svg"
                className="size-[26px] md:size-[33px]"
                alt="GitHub"
              />
            </a>

            {/* Resume Download */}
            <a
              href="/assets/faisalsResume.pdf"
              download
              className="px-4 py-1 w-fit h-8 md:h-10 bg-green-800 hover:bg-green-950 text-green-50 text-[16px] md:text-[16px] rounded-full  flex gap-1 justify-between items-center transition-all duration-300"
            >
              <img
                src="/download.svg"
                className="size-[19px] md:size-[23px]"
                alt="Download Resume"
              />
              <span>Resume</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/faisalz1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] text-green-500 flex gap-1 hover:text-white transition-all duration-200"
            >
              <img
                src="/linkedin.svg"
                className="size-[36px] md:size-[40px] border-[2px] border-[#23233f] hover:border-[#0D542B] rounded-[4px] p-[3px] m-0 transition-all duration-300"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Coder;
