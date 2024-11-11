import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  return (
    <>
      <section className="h-[90vh] flex justify-center items-center">
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
      </section>
    </>
  );
}

export default Login;
