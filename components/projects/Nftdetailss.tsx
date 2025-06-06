const Nftdetailss = () => {
    return(
        <div>
        <div className="flex w-full flex-row justify-start px-5 py-5 sm:px-10">
        <a
          href="#"
          className="mx-1 border-0 bg-slate-100 px-2 py-1 text-xs text-slate-950 sm:text-sm"
        >
          All
        </a>

        <a
          href="#"
          className="mx-1 border-0 bg-slate-100 px-2 py-1 text-xs text-slate-950 sm:text-sm"
        >
          Leaderboard
        </a>

        <a
          href="#"
          className="mx-1 border-0 bg-slate-100 px-2 py-1 text-xs text-slate-950 sm:text-sm"
        >
          Attributes
        </a>

        <a
          href="#"
          className="mx-1 border-0 bg-slate-100 px-2 py-1 text-xs text-slate-950 sm:text-sm"
        >
          Top Sales
        </a>

        <a
          href="#"
          className="mx-1 border-0 bg-slate-100 px-2 py-1 text-xs text-slate-950 sm:text-sm"
        >
          Largest Sales
        </a>

        <a
          href="#"
          className="mx-1 border-0 bg-slate-100 px-2 py-1 text-xs text-slate-950 sm:text-sm"
        ></a>
      </div>

      <div className="flex w-full flex-col items-center">
        <div className="w-0/4 m-auto bg-[url(/titlelogo.svg)] bg-no-repeat py-4 pl-8 font-mono text-xl font-semibold text-white [background-size:65px_65px]">
          <h2>SpaceBudz</h2>
        </div>
      </div>

      <div className="w-full px-10 py-5">
        <form>
          <div className="max-w">
            <div className="mb-2 flex">
              <p className="items-center text-lg font-semibold text-white">
                Search Budzus
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="flex w-full overflow-hidden">
                <input type="text" className="w-full" />
                <button className="bg-[#8E1FCB] px-4 py-1 text-lg font-semibold text-white">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="w-full px-10 py-4">
        <div className="w-full sm:h-[565px] flex justify-center border-8 mb-4 border-slate-400 bg-[#24375A]">
          <img
            className="w-full object-contain "
            src="/Rectangle 2937.svg"
            alt="Rectangle 2937"
          />
        </div>
        <div className="w-full py-2">
          <div className="w-full sm:w-2/3 ">
            <h2 className="py-1 text-left text-white text-3xl">
              SpaceBudz 388
            </h2>
            <p className="py-1 text-left text-white text-base">
              One of 3840
              <a
                href="#"
                className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
              >
                Female
              </a>
              Punks
            </p>
          </div>
          <div className="w-full sm:w-2/3">
            <h2 className="py-1 text-left text-white text-2xl">Attributes</h2>
            <p className="py-1 text-left text-white text-base ">
              This Punk has
              <a
                href="#"
                className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
              >
                2 attributes
              </a>
              , one of 3560 with that many.
            </p>
          </div>
          <div className="w-full flex py-2 sm:w-2/3">
            <div className="w-full sm:w-1/2">
              <h5 className="py-1 text-center text-white text-base sm:text-left">
                Choker
              </h5>
              <h5 className="py-1 text-center text-white text-sm sm:text-left">
                48 Budz have this
              </h5>
            </div>
            <div className="w-full sm:w-1/2">
              <h5 className="py-1 text-center text-white text-base sm:text-left">
                Wild Hair
              </h5>
              <h5 className="py-1 text-center text-white text-sm sm:text-left">
                447 Punks have this.
              </h5>
            </div>
          </div>
          <div className="w-full sm:w-2/3">
            <h2 className="py-1 text-center text-white text-2xl sm:text-left">
              Current Market Status
            </h2>
            <p className="py-1 text-left text-white text-sm">
              This Punk is currently owned by address
              <a
                href="#"
                className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
              >
                BlackKet…
              </a>
              .This Punk has not been listed for sale by its owner. There are
              currently no bids on this Punk.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-10 py-4">
        <h1 className="text-2xl font-medium text-gray-100">
          Transaction History
        </h1>
        <div className="mt-6 flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-x-scroll shadow sm:overflow-hidden">
                <table className="min-w-full text-sm text-white border-collapse ">
                  <thead className="text-xs font-medium capitalize">
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left tracking-wider"
                      >
                        <span className="bg-slate-100 pl-2 pr-24 py-1 text-sm text-slate-950 rounded-sm">
                          type
                        </span>
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left tracking-wider"
                      >
                        <span className="bg-slate-100 pl-2 pr-9 py-1 text-sm text-slate-950 rounded-sm">
                          from
                        </span>
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left tracking-wider"
                      >
                        <span className="bg-slate-100 pl-2 pr-12 py-1 text-sm text-slate-950 rounded-sm">
                          to
                        </span>
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left tracking-wider"
                      >
                        <span className="bg-slate-100 pl-2 pr-16 py-1 text-sm text-slate-950 rounded-sm">
                          amount
                        </span>
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left tracking-wider"
                      >
                        <span className="bg-slate-100 pl-2 pr-16 py-1 text-sm text-slate-950 rounded-sm">
                          txn
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" ">
                    <tr className="bg-lime-900 border border-lime-700 hover:bg-lime-950">
                      <td className="py-4 pl-4 text-sm">(Unwrap, Legacy)</td>
                      <td className="py-4 pl-2 text-sm">
                        <a
                          href="#"
                          className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                        >
                          0xed01f8
                        </a>
                      </td>
                      <td className="py-4 pl-2 text-sm">
                        <a
                          href="#"
                          className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                        >
                          BlackKet
                        </a>
                      </td>
                      <td className="py-4 pl-4 text-sm">104.95Ξ ($332,750) </td>
                      <td className="py-4 pl-2 text-sm">
                        <a
                          href="#"
                          className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                        >
                          Apr 21, 2023
                        </a>
                      </td>
                    </tr>

                    <tr className="bg-sky-900 border border-sky-700 hover:bg-sky-950">
                      <td className="py-4 pl-4 text-sm">(Unwrap, Legacy)</td>
                      <td className="py-4 pl-2 text-sm">
                        <a
                          href="#"
                          className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                        >
                          0xed01f8
                        </a>
                      </td>
                      <td className="py-4 pl-2 text-sm">
                        <a
                          href="#"
                          className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                        >
                          BlackKet
                        </a>
                      </td>
                      <td className="py-4 pl-4 text-sm">104.95Ξ ($332,750) </td>
                      <td className="py-4 pl-2 text-sm">
                        <a
                          href="#"
                          className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                        >
                          Apr 21, 2023
                        </a>
                      </td>
                    </tr>

                    <tr className="bg-orange-900 border border-orange-700 hover:bg-orange-950">
                      <td className="py-4 pl-4 text-sm">(Unwrap, Legacy)</td>
                      <td className="py-4 pl-2 text-sm">
                        <a
                          href="#"
                          className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                        >
                          0xed01f8
                        </a>
                      </td>
                      <td className="py-4 pl-2 text-sm">
                        <a
                          href="#"
                          className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                        >
                          BlackKet
                        </a>
                      </td>
                      <td className="py-4 pl-4 text-sm">104.95Ξ ($332,750) </td>
                      <td className="py-4 pl-2 text-sm">
                        <a
                          href="#"
                          className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                        >
                          Apr 21, 2023
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Nftdetailss