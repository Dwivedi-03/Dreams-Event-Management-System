// import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  return (
    <>
      {/* <section className="h-[90vh] flex justify-center items-center">
        <div className="h-[70%] w-2/6 px-6 py-8 shadow-xl bg-black/5 rounded-md">
          <h1 className="text-4xl text-center py-2 border-b border-green-200">
            Login
          </h1>
          <div className="h-full py-8">
            <div className="p-8 relative">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="py-2 px-6 pr-9 w-full rounded-full bg-green-200 outline-none hover:shadow-lg"
              />
              <FaUser className="absolute top-11 right-12" />
            </div>
            <div className="px-8 py-2 relative">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="py-2 px-6 pr-9 w-full rounded-full bg-green-200 outline-none hover:shadow-lg"
              />
              <FaLock className="absolute top-5 right-12 cursor-pointer" />
            </div>
            <div className="px-8 py-4 flex justify-center">
              <input
                type="button"
                value="Login"
                className="py-2 px-6 w-fit rounded-full bg-black/45 hover:bg-black/55 cursor-pointer font-bold"
              />
            </div>
            <div className="px-8 py-2 flex justify-between items-center">
              <div className="space-x-2">
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe" className="cursor-pointer">Remember Me</label>
              </div>
              <p>Forgot password?</p>
            </div>
            <div className="text-center">
              <p>
                Don&apos;t have an account <span className="text-blue-500"> Create one for you</span>
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <main
        className="h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover bg-[url('https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
        <div className="h-auto w-[80%] lg:w-[50%] bg-[#ffedd5]/45 rounded">
            <div className="h-[20%] flex justify-center items-center font-[cursive] text-2xl">Login</div>
            <div className="h-[70%]">
                <div className="px-2 md:px-4 py-4">
                    <div className="relative">
                        <input type="text" name="username" id="username"
                            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-[#431407] appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                            placeholder=" " />
                        <label htmlFor="username"
                            className="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Username</label>
                    </div>
                </div>
                <div className="px-2 md:px-4 py-2 lg:py-1">
                    <div className="relative">
                        <input type="text" name="password" id="password"
                            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-[#431407] appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                            placeholder=" " />
                        <label htmlFor="password"
                            className="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                    </div>
                </div>
                <div className="px-2 md:px-4 flex justify-evenly items-center">
                    <div>
                        <input type="radio" name="userType" id="manager" />
                        <label htmlFor="manager">Manager</label>
                    </div>
                    <div>
                        <input type="radio" name="userType" id="user" />
                        <label htmlFor="user">User</label>
                    </div>
                </div>
                <div className="px-2 md:px-4 py-4 flex justify-center items-center">
                    <button className="bg-[#431407] px-6 py-2 rounded text-[#ffedd5] font-[cursive]">Login</button>
                </div>
                <div className="px-2 md:px-4 py-2 flex justify-between items-center">
                    <p className="text-sm">
                        <input type="checkbox" name="rememberMe" id="rememberMe" />
                        <label htmlFor="rememberMe">remember me</label>
                    </p>
                    <p className="text-sm">Forgot password</p>
                </div>
            </div>
            <div className="h-[10%] pb-2 flex justify-center items-center font-mono text-sm text-blue-800 italic">
                create an account
            </div>
        </div>
    </main>
    </>
  );
}

export default Login;
