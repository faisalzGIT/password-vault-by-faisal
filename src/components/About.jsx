const ABOUT = () => {
  return (
    <>

      <div className="relative h-full md:h-[91vh] flex justify-center items-center w-full ">
        <div className="absolute inset-0">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#15803d_100%)]"></div>
        </div>
        <div className="bg-white rounded-xl p-10 pt-7 pb-3 h-full md:h-[89vh] w-[1200px] max-w-full text-center shadow-[1px_1px_4px_7px_rgba(0,0,0,0.1)] md:shadow-[1px_1px_20px_7px_rgba(0,0,0,0.1)]">
            <h1 className="mb-0 text-2xl flex justify-center gap-2 md:gap-4 font-bold text-center text-green-900">
                - Tech Stack - 
            </h1>
            <div className="mb-4 md:w-[700px] h-[2px] md:h-[4px] bg-green-900 m-auto rounded-4xl"></div>
                <p className="text-[16px] text-green-900 font-semibold mb-6 w-full">
                  <strong>iTasks</strong> is a modern, Responsive, and user-friendly
                  Todo Listing Web App designed to help you organize your day and
                  achieve your goals efficiently. With a clean interface and intuitive
                  features, you can easily add, edit, complete, and delete your daily
                  tasks.
                </p>
            
                <div className="mb-4 px-0 md:px-4 grid md:grid-cols-4 gap-6 text-green-800">
                  {[
                    {
                      title: "Frontend",
                      desc: <>Built with <span className="font-semibold">React.js</span> for a fast and interactive user experience.</>
                    },
                    {
                      title: "Routing",
                      desc: <>Managed using <span className="font-semibold">React Router</span> for seamless navigation between pages.</>
                    },
                    {
                      title: "Layout & Styling",
                      desc: <>Built with <span className="font-semibold">HTML5</span> for semantic layout and <span className="font-semibold">Tailwind CSS</span> for modern, responsive design.</>
                    },
                    {
                      title: "JavaScript",
                      desc: <>Built with <span className="font-semibold">JavaScript (ES6+)</span> for app logic and interactivity.</>
                    },
                    {
                      title: "MongoDB",
                      desc: <><span className="font-semibold">MongoDB</span> stores all saved passwords securely in the database.</>
                    },
                    {
                      title: "Node.js",
                      desc: <><span className="font-semibold">Node.js</span> powers the development tools and build process.</>
                    },
                    {
                      title: "Build Tool",
                      desc: <>Developed and bundled using <span className="font-semibold">Vite</span> for lightning-fast development and builds.</>
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-green-100 rounded-xl p-5 shadow hover:shadow-md transition duration-300 md:w-fit w-[80vw]"
                    >
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>

        
            <p className="mt-5 font-semibold text-center text-green-800 text-base">
              All data is stored locally in your browser for privacy and speed.
            </p>

            <div className="text-sm text-gray-400 pt-2">
              &copy; {new Date().getFullYear()} iTasks. All rights reserved.
            </div>
        </div>
      </div>
    </>
  );
};

export default ABOUT;