import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="min-w-96 shadow sticky">
        <nav className="border border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto py-2">
            <div className="w-[20%] flex justify-center items-center">
              <Link to="/" className="text-3xl font-[cursive]">
                Dreams.
              </Link>
            </div>
            <div className="w-[20%] flex justify-end items-center lg:order-2">
              <Link
                to="login"
                className="font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
              >
                Login
              </Link>
              <Link
                to="register"
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Get Started
              </Link>
            </div>
            <div className="hidden lg:flex justify-between items-center lg:w-auto w-full lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      ` py-2 pr-4 pl-3 duration-200 border-b border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 ${
                        isActive ? "text-blue-500" : "text-gray-800"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="services"
                    className={({ isActive }) =>
                      ` py-2 pr-4 pl-3 duration-200 border-b border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 ${
                        isActive ? "text-blue-500" : "text-gray-800"
                      }`
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="portfolio"
                    className={({ isActive }) =>
                      ` py-2 pr-4 pl-3 duration-200 border-b border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 ${
                        isActive ? "text-blue-500" : "text-gray-800"
                      }`
                    }
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="pages"
                    className={({ isActive }) =>
                      ` py-2 pr-4 pl-3 duration-200 border-b border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 ${
                        isActive ? "text-blue-500" : "text-gray-800"
                      }`
                    }
                  >
                    Pages
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="about"
                    className={({ isActive }) =>
                      ` py-2 pr-4 pl-3 duration-200 border-b border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 ${
                        isActive ? "text-blue-500" : "text-gray-800"
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      ` py-2 pr-4 pl-3 duration-200 border-b border-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 ${
                        isActive ? "text-blue-500" : "text-gray-800"
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
