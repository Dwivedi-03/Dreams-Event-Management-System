import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoMeta,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoTelegram,
} from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-8">
        <div className="bg-white border border-secondary h-40"></div>
        <div className="bg-white border border-secondary h-40"></div>
        <div className="bg-white border border-secondary h-40"></div>
        <div className="bg-white border border-secondary h-40"></div>
      </div>
      <footer className="h-auto lg:h-96 bg-secondary text-white py-2.5 px-4">
        <div className="h-[30%] border-b border-white grid grid-cols-1 md:grid-cols-3 py-4 lg:py-0">
          <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-center lg:items-end">
              <h1 className="text-2xl font-serif">NEWSLETTER SUBSCRIBE</h1>
              <p>Sign up and receive 10% of your wedding</p>
            </div>
            <div className="flex justify-center items-center py-2 px-8">
              <input
                type="text"
                className="w-full p-2 text-secondary outline-none"
                name="email"
                id="email"
                placeholder="Email"
              />
              <button className="p-3 bg-slate-900/85">
                <BiLogoTelegram />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-fit p-8 grid grid-cols-4 gap-8">
              <div className="h-12 w-12 rounded-full bg-black/45 flex justify-center items-center text-xl cursor-pointer">
                <BiLogoFacebook />
              </div>
              <div className="h-12 w-12 rounded-full bg-black/45 flex justify-center items-center text-xl cursor-pointer">
                <BiLogoMeta />
              </div>
              <div className="h-12 w-12 rounded-full bg-black/45 flex justify-center items-center text-xl cursor-pointer">
                <BiLogoTwitter />
              </div>
              <div className="h-12 w-12 rounded-full bg-black/45 flex justify-center items-center text-xl cursor-pointer">
                <BiLogoInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[55%] grid grid-cols-1 md:grid-cols-4 border-b text-center border-white py-8 lg:py-0 gap-8 lg:gap-0">
          <div className="flex justify-center items-center lg:pl-28">
            <Link to="/" className="text-3xl font-[cursive] py-4">
              Dreams.
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-center py-4">OPEN TIME</h1>
              <p>MON-FRI 08:00 AM to 07:00 PM</p>
              <p>Closed on weekend</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-center py-4">PHONE & EMAIL</h1>
              <p>+91 9876549875</p>
              <p>dreams@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-center py-4">ADDRESS</h1>
              <address>1234 NW Bobcat Lane, St. Robert</address>
              <address>Surat, Gujarat.</address>
            </div>
          </div>
        </div>
        <div className="h-[15%] grid grid-cols-1 md:grid-cols-2 py-4">
          <div className="flex justify-center items-center gap-1">
            <p>Copyright @2020 All rights reserved | This is made by</p>
            <IoIosHeartEmpty />
          </div>
          <div className="flex justify-center lg:justify-end items-center px-16">
            <p className="px-2">Terms & Use - Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
