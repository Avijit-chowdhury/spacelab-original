const Aboutpage = () => {
  return (
    <div className="pt-28">
      {/* About page start */}
      <div className="flex w-full flex-row justify-start px-5 py-5 sm:px-10">
        <a
          href="/nft"
          className="mx-1 border-0 bg-green-600 px-2 py-1 text-xs text-slate-950 sm:text-sm "
        >
          All Nft
        </a>

        <a
          href="/nftdetails"
          className="mx-1 border-0 bg-red-500 px-2 py-1 text-xs text-slate-950 sm:text-sm "
        >
          New Nfts
        </a>

        <a
          href="/owners"
          className="mx-1 border-0 bg-pink-500 px-2 py-1 text-xs text-slate-950 sm:text-sm "
        >
          Owners
        </a>

        <a
          href="#"
          className="mx-1 border-0 bg-slate-100 px-2 py-1 text-xs text-slate-950 sm:text-sm "
        >
          Prototype
        </a>

        <a
          href="#"
          className="mx-1 border-0 bg-slate-100 px-2 py-1 text-xs text-slate-950 sm:text-sm "
        >
          Hardware
        </a>
      </div>
      <div className="flex w-full flex-col items-center">
        <div className="w-0/4 m-auto bg-[url(/titlelogo.svg)] bg-no-repeat py-4 pl-8 font-mono text-xl font-semibold text-white [background-size:65px_65px]">
          <h2>About</h2>
        </div>
      </div>
      <div className="px-10 py-5">
        <div className="h-0 max-w-32 rounded-tl-full border-b-[20px] border-r-[15px] border-b-black border-r-transparent pb-10 pl-3 text-6xl text-slate-500">
          ...
        </div>

        <div className="w-full rounded-b-3xl rounded-r-3xl p-2 bg-black">
          <div className="m-6 flex flex-col sm:flex-row">
            <div className="flex pl-16 justify-center items-center w-full flex-col sm:w-1/2">
              <h1 className="text-3xl font-bold text-gray-600">
                Get started today!
              </h1>

              <p className="py-4 text-justify text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Iste beatae sunt blanditiis
                fugiat architecto delectus, eaque repudiandae ullam iure ea quo.
                Qui, labore. Dolor doloremque magni ullam sunt inventore
                laudantium.
              </p>
            </div>
            <div className="flex items-center w-full h-64 sm:w-1/2">
              <img
                className="w-full object-contain"
                src="/Zieg & Ales 1.svg"
                alt="Zieg & Ales 1"
              />
            </div>
          </div>

          <div className="mx-6 px-10 pb-10 sm:mx-10">
            <button className="mr-4 mt-4 rounded-xl bg-blue-600 px-3 py-2 text-center font-bold capitalize text-white shadow-2xl hover:bg-gray-800">
              get started
            </button>

            <button className="mr-4 mt-4 rounded-xl border px-3 py-2 text-center font-bold capitalize text-white shadow-2xl hover:bg-gray-800">
              learn more
            </button>
          </div>
        </div>
      </div>
      {/* About page end */}

      

      {/* vnvnb  */}
    </div>
  )
}

export default Aboutpage
