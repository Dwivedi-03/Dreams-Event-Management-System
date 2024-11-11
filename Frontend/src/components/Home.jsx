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
        <div className="h-40 bg-purple-900/45">

        </div>
      </div>
    </>
  );
}

export default Home;
