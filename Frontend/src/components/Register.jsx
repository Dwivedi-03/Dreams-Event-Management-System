function Register() {
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <main className="h-screen flex justify-center items-center py-8 bg-no-repeat bg-center bg-cover bg-[url('https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
        <div className="h-auto w-[80%] lg:w-[50%] bg-[#ffedd5]/50 rounded">
          <div className="h-[20%] flex justify-center items-center font-[cursive] text-2xl">
            Login
          </div>
          <form onSubmit={handleForm} className="h-[70%]">
            <div className="px-2 md:px-4 py-4">
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-[#431407] appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="firstName"
                  className="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  First name
                </label>
              </div>
            </div>
            <div className="px-2 md:px-4 py-2 lg:py-1">
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-[#431407] appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="lastName"
                  className="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="px-2 md:px-4 py-4">
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-[#431407] appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="px-2 md:px-4 py-2 lg:py-1">
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-[#431407] appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="username"
                  className="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  User name
                </label>
              </div>
            </div>
            <div className="px-2 md:px-4 py-4">
              <div className="relative">
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-[#431407] appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Password
                </label>
              </div>
            </div>
            <div className="px-2 md:px-4 py-2 lg:py-1">
              <div className="relative">
                <input
                  type="text"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-[#431407] appearance-none focus:outline-none focus:ring-0 focus:border-slate-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="confirmPassword"
                  className="absolute text-sm text-gray-900 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-slate-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Confirm Password
                </label>
              </div>
            </div>
            <div className="px-2 md:px-4 py-4 flex justify-center items-center">
              <button className="bg-[#431407] px-6 py-2 rounded text-[#ffedd5] font-[cursive]">
                Register
              </button>
            </div>
          </form>
          <div className="h-[10%] py-2 flex justify-center items-center font-mono text-sm text-blue-800 italic">
            Log in
          </div>
        </div>
      </main>
    </>
  );
}

export default Register;
