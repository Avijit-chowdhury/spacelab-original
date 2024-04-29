const Nft = () => {
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
      {/* working from here  */}
      <div className="p4 mx-10">
        <div className="w-full px-10 py-4">
          <h1 className="text-3xl font-semibold text-gray-400">
            Types and Attributes
          </h1>
          <div className="mt-3 flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-x-scroll shadow sm:overflow-hidden">
                  <h1 className="text-lg font-medium text-gray-400">
                    Budz Types
                  </h1>
                  <table className="min-w-full text-sm text-gray-400 border-collapse ">
                    <thead className="bg-[#160E2A] text-xs font-medium capitalize">
                      <tr>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-slate-950 rounded-sm">
                            Attribute
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-sm text-slate-950 rounded-sm">
                            no.
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-slate-950 rounded-sm">
                            avail.
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-slate-950 rounded-sm">
                            avg sale
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-slate-950 rounded-sm">
                            cheapest
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-slate-950 rounded-sm">
                            more example
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className=" ">
                      <tr className="bg-gradient-to-b from-neutral-700 to-neutral-950 border border-neutral-800  hover:border-x-neutral-500 hover:from-neutral-600 hover:to-neutral-800">
                        <td className="py-4 pl-4 text-sm text-teal-400">
                          Arcane
                        </td>
                        <td className="py-4 pl-4 text-sm">1</td>
                        <td className="py-4 pl-4 text-sm">2</td>
                        <td className="pl-4">0</td>
                        <td className="text-sm">
                          <img
                            className="float-left w-14 h-14 rounded-full "
                            src="/black5 1.svg"
                            alt="black5 1"
                          />
                          <div className="ml-1 overflow-hidden">
                            <p className="mt-3">5KΞ</p>
                          </div>
                        </td>
                        <td className="flex flex-row py-4 pl-3 text-sm">
                          <img
                            className="w-14 h-14 rounded-full"
                            src="/black5 1.svg"
                            alt=""
                          />
                          <img
                            className="w-14 h-14 rounded-full"
                            src="/black5 1.svg"
                            alt=""
                          />
                          <img
                            className="w-14 h-14 rounded-full"
                            src="/black5 1.svg"
                            alt=""
                          />
                          <img
                            className="w-14 h-14 rounded-full"
                            src="/black5 1.svg"
                            alt=""
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* second table */}
          <div className="mt-3 flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-x-scroll shadow sm:overflow-hidden">
                  <h1 className="text-lg font-medium text-gray-400">
                    Attributes
                  </h1>
                  <table className="min-w-full text-sm text-gray-400 border-collapse ">
                    <thead className="bg-[#160E2A] text-xs font-medium capitalize">
                      <tr>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-slate-950 rounded-sm">
                            Attribute
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-sm text-slate-950 rounded-sm">
                            no.
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-slate-950 rounded-sm">
                            avail.
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-slate-950 rounded-sm">
                            avg sale
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-slate-950 rounded-sm">
                            cheapest
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-slate-950 rounded-sm">
                            more example
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className=" ">
                      <tr className="bg-gradient-to-b from-neutral-700 to-neutral-950 border border-neutral-800  hover:border-x-neutral-500 hover:from-neutral-600 hover:to-neutral-800">
                        <td className="py-4 pl-4 text-sm text-teal-400">
                          Arcane
                        </td>
                        <td className="py-4 pl-4 text-sm">1</td>
                        <td className="py-4 pl-4 text-sm">2</td>
                        <td className="pl-4">0</td>
                        <td className="text-sm">
                          <img
                            className="float-left w-14 h-14 rounded-full "
                            src="/black5 1.svg"
                            alt="black5 1"
                          />
                          <div className="ml-1 overflow-hidden">
                            <p className="mt-3">5KΞ</p>
                          </div>
                        </td>
                        <td className="flex flex-row py-4 pl-3 text-sm">
                          <img
                            className="w-14 h-14 rounded-full"
                            src="/black5 1.svg"
                            alt=""
                          />
                          <img
                            className="w-14 h-14 rounded-full"
                            src="/black5 1.svg"
                            alt=""
                          />
                          <img
                            className="w-14 h-14 rounded-full"
                            src="/black5 1.svg"
                            alt=""
                          />
                          <img
                            className="w-14 h-14 rounded-full"
                            src="/black5 1.svg"
                            alt=""
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* third table */}
          <div className="mt-3 flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-x-scroll shadow sm:overflow-hidden">
                  <h1 className="text-lg font-medium text-gray-400">
                    Attributes Counts
                  </h1>
                  <table className="min-w-full text-sm text-gray-400 border-collapse ">
                    <thead className="bg-[#160E2A] text-xs font-medium capitalize">
                      <tr>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-slate-950 rounded-sm">
                            Attribute
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-sm text-slate-950 rounded-sm">
                            no.
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-slate-950 rounded-sm">
                            avail.
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-slate-950 rounded-sm">
                            avg sale
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-slate-950 rounded-sm">
                            cheapest
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-2 pt-3 text-left tracking-wider"
                        >
                          <span className="bg-slate-100 px-2 text-slate-950 rounded-sm">
                            more example
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className=" ">
                      <tr className="bg-gradient-to-b from-neutral-700 to-neutral-950 border border-neutral-800  hover:border-x-neutral-500 hover:from-neutral-600 hover:to-neutral-800">
                        <td className="py-4 pl-4 text-sm text-teal-400">
                          Arcane
                        </td>
                        <td className="py-4 pl-4 text-sm">1</td>
                        <td className="py-4 pl-4 text-sm">2</td>
                        <td className="pl-4">0</td>
                        <td className="text-sm">
                          <img
                            className="float-left w-14 h-14 rounded-full "
                            src="/black5 1.svg"
                            alt="black5 1"
                          />
                          <div className="ml-1 overflow-hidden">
                            <p className="mt-3">5KΞ</p>
                          </div>
                        </td>
                        <td className="flex flex-row py-4 pl-3 text-sm">
                          <img
                            className="w-14 h-14 rounded-full"
                            src="/black5 1.svg"
                            alt=""
                          />
                          <img
                            className="w-14 h-14 rounded-full"
                            src="/black5 1.svg"
                            alt=""
                          />
                          <img
                            className="w-14 h-14 rounded-full"
                            src="/black5 1.svg"
                            alt=""
                          />
                          <img
                            className="w-14 h-14 rounded-full"
                            src="/black5 1.svg"
                            alt=""
                          />
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
      </div>
    )
}
export default Nft