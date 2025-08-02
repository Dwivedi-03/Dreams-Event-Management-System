function Home() {
  return (
    <>
      <div className="h-auto relative">
        <div className="absolute bg-black/45 h-[90vh] w-full flex justify-center items-center">
          <div className="text-center text-white ">
            <h1 className="text-4xl font-[cursive] ">DREAMS</h1>
            <p className="text-lg">We make your dreams comes true.</p>
          </div>
        </div>
        <img
          className="h-[90vh] w-full"
          src="https://kamatharjun.com/wp-content/uploads/2019/07/AV-wed15.jpeg"
          alt="Wedding Photography"
        />
        <div className="h-40 bg-purple-900/45"></div>
      </div>
      {/* <header className="bg-[#ffedd5]">
        <div className="max-w-screen-xl px-4 flex flex-wrap mx-auto p-4 justify-between items-center">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <h1 className="text-2xl whitespace-nowrap self-center">Logo.</h1>
            </div>
            <button onClick="showNav()"
                className="font-bold inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div id="nav" className="hidden w-full md:block md:w-auto transition-all duration-500 ease-in-out ">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                    <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#431407] md:p-0 cursor-pointer relative after:content-[''] after:absolute after:h-0.5 before:w-0 hover:after:w-full after:bg-[#431407] after:bottom-0 after:left-0 after:rounded">Home</div>
                    <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#431407] md:p-0 cursor-pointer relative after:content-[''] after:absolute after:h-0.5 before:w-0 hover:after:w-full after:bg-[#431407] after:bottom-0 after:left-0 after:rounded">About</div>
                    <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#431407] md:p-0 cursor-pointer relative after:content-[''] after:absolute after:h-0.5 before:w-0 hover:after:w-full after:bg-[#431407] after:bottom-0 after:left-0 after:rounded">Services</div>
                    <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#431407] md:p-0 cursor-pointer relative after:content-[''] after:absolute after:h-0.5 before:w-0 hover:after:w-full after:bg-[#431407] after:bottom-0 after:left-0 after:rounded">Pricing</div>
                    <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#431407] md:p-0 cursor-pointer relative after:content-[''] after:absolute after:h-0.5 before:w-0 hover:after:w-full after:bg-[#431407] after:bottom-0 after:left-0 after:rounded">Contact</div>
                </ul>
            </div>
        </div>
    </header>
    <main className="h-[80%] flex justify-center items-center">
        <div>
            <button className="p-2 font-bold bg-gray-300 rounded shadow-2xl" onClick="window.location.href='Login.html'">Login</button>
            <button className="p-2 bg-[#431407] text-[#ffedd5] rounded" onClick="window.location.href='Register.html'">Get Started</button>
        </div>
    </main> */}
      {/* <script>
        const showNav = () => {
            const nav = document.getElementById("nav");
            if (nav.classList.contains("hidden")) {
                nav.classList.remove("hidden");
            } else {
                nav.classList.add("hidden");

            }
        }
    </script> */}
    </>
  );
}

export default Home;
