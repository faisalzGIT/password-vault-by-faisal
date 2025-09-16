import { NavLink} from 'react-router-dom'

const Home = () => {
  return <>
    <div className="relative h-[91vh] ">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#15803d_100%)]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <div className="md:max-w-6xl max-w-3xl text-center">
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900">
              Welcome to
              <span className="text-green-900"> Password Vault</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-800">
              Password Vault helps you securely store, manage, and access all your passwords in one place — safe, simple, and convenient.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="rounded-lg px-6 py-3 font-medium bg-slate-900 text-white hover:bg-slate-800">
                    <NavLink to="/vault">Get Started</NavLink>
              </button>
              <button className="rounded-lg border px-6 py-3 font-medium border-slate-200 bg-white text-slate-900 hover:bg-slate-50">
                <NavLink to="/about">Learn More</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Home
