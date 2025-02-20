import { FcGoogle } from "react-icons/fc";
import bgImage from "../assets/loginbg.jpg"; // Your background image

const Login = () => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background Blur Overlay */}
      {/* <div className="absolute inset-0 bg-gray-100 bg-opacity-40 backdrop-blur-lg"></div> */}

      {/* Main Content Container */}
      <div className="relative z-10 flex max-w-4xl mx-auto items-center justify-between w-full p-6">
        {/* Left Side - Branding */}
        <div className="text-white max-w-md">
          <h1 className="text-5xl font-bold uppercase leading-tight">
            Explore <span className="text-blue-400">Horizons</span>
          </h1>
          <p className="mt-4 text-lg">Where Your Dream Destinations Become Reality.</p>
          <p className="mt-2 text-sm text-gray-200">
            Embark on a journey where every corner of the world is within your reach.
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-md w-96">
          <h2 className="text-xl font-bold text-center text-white mb-4">Sign In</h2>
          
          <form className="flex flex-col gap-3">
            <div>
              <label className="text-sm text-white">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-md bg-white bg-opacity-80 text-gray-900 focus:outline-none"
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

            <a href="#" className="text-sm text-blue-400 text-right">Forgot password?</a>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md">
              Sign In
            </button>

            {/* Google Sign-In */}
            <div className="flex items-center justify-center gap-2 border-t border-white mt-4 pt-4">
              <button className="flex items-center gap-2 bg-white bg-opacity-30 px-4 py-2 rounded-md">
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
