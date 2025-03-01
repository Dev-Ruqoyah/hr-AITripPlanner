import { FcGoogle } from "react-icons/fc";
import bgImage from "../assets/loginbg.jpg"; // Your background image

const Login = () => {
  return (
    <div
      className="md:h-screen  flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background Blur Overlay */}

      <div className="absolute inset-0 bg-black opacity-60 "></div>
      {/* Main Content Container */}
      <div className=" z-10 flex md:flex-row flex-col max-w-4xl mx-auto items-center justify-between w-full p-6">
        
        {/* Left Side - Branding */}
        <div className="text-white max-w-md">
          <h1 className="md:text-5xl text-3xl font-bold uppercase leading-tight">
            Explore <span className="text-secondary1">Horizons</span>
          </h1>
          <p className="mt-4 text-lg">Where Your Dream Destinations Become Reality.</p>
          <p className="mt-2 text-sm text-gray-200">
            Embark on a journey where every corner of the world is within your reach.
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className=" bg-opacity-10 bg-transparent backdrop-blur-sm p-6 rounded-lg shadow-md md:mt-0 pt-10  md:w-96 w-[98%]">
          <h2 className="text-xl font-bold text-center text-secondary1 mb-4">Sign In</h2>
          
          <form className="flex flex-col gap-3">
            <div>
              <label className="text-sm text-white">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-md bg-white bg-opacity-80 shadow text-gray-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-white">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-2 rounded-md bg-white bg-opacity-80 text-gray-900 focus:outline-none"
              />
            </div>

            <a href="#" className="text-sm text-white text-right">Forgot password?</a>

            <button className="w-full  hover:bg-secondary1 bg-blue-800 text-white transition-all duration-300 p-2 rounded-md">
              Sign In
            </button>

            {/* Google Sign-In */}
            <div className=" flex justify-center flex-col items-center pt-4">
             <div className="flex items-center gap-2  w-[100%]">
              <div className="border-t w-[45%] border-white"></div>
              <p className="text-white">or</p>
              <div className="border-t border-white w-[45%]"></div>
             </div>
              <button className="flex items-center bg-transparent  gap-2  bg-opacity-30 px-4 py-2 rounded-md">
                <FcGoogle className="text-xl" />
                <span className="text-white">Sign in with Google</span>
              </button>
            </div>

            <p className="text-center text-white text-sm mt-2">
              Are you new? <a href="#" className="text-blue-400">Create an Account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
