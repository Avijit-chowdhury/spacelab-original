const Ownerss = () => {
    return (
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
      <h1 className="text-2xl font-medium text-gray-100">
        All SpaceBudz Owners
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
                      <span className="bg-slate-100 px-2  py-1 text-sm text-slate-950 rounded-sm">
                        No.
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-left tracking-wider"
                    >
                      <span className="bg-slate-100 pl-2 pr-16 py-1 text-sm text-slate-950 rounded-sm">
                        Account
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-left tracking-wider"
                    >
                      <span className="bg-slate-100 px-2  py-1 text-sm text-slate-950 rounded-sm">
                        OpenSea/ ENS
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-left tracking-wider"
                    >
                      <span className="bg-slate-100 px-2 py-1 text-sm text-slate-950 rounded-sm">
                        Number Owned
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-left tracking-wider"
                    >
                      <span className="bg-slate-100 px-2 py-1 text-sm text-slate-950 rounded-sm">
                        Number Owned
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className=" ">
                  <tr className="bg-gradient-to-b from-neutral-700 to-neutral-950 border border-neutral-800  hover:border-x-neutral-500 hover:from-neutral-600 hover:to-neutral-800">
                    <td className="py-4 pl-4 text-sm"> 1</td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        0xb7f7f6c52f2e2
                      </a>
                    </td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        WrappedCryptoPu
                      </a>
                    </td>
                    <td className="py-4 pl-5 text-sm"> 834 </td>
                    <td className="py-4 pl-5 text-sm">4 months ago</td>
                  </tr>

                  <tr className="bg-gradient-to-b from-neutral-700 to-neutral-950 border border-neutral-800  hover:border-x-neutral-500 hover:from-neutral-600 hover:to-neutral-800">
                    <td className="py-4 pl-4 text-sm"> 2</td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        0xb7f7f6c52f2e2
                      </a>
                    </td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        WrappedCryptoPu
                      </a>
                    </td>
                    <td className="py-4 pl-5 text-sm"> 834 </td>
                    <td className="py-4 pl-5 text-sm">4 months ago</td>
                  </tr>

                  <tr className="bg-gradient-to-b from-neutral-700 to-neutral-950 border border-neutral-800  hover:border-x-neutral-500 hover:from-neutral-600 hover:to-neutral-800">
                    <td className="py-4 pl-4 text-sm"> 1</td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        0xb7f7f6c52f2e2
                      </a>
                    </td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        WrappedCryptoPu
                      </a>
                    </td>
                    <td className="py-4 pl-5 text-sm"> 834 </td>
                    <td className="py-4 pl-5 text-sm">4 months ago</td>
                  </tr>

                  <tr className="bg-gradient-to-b from-neutral-700 to-neutral-950 border border-neutral-800  hover:border-x-neutral-500 hover:from-neutral-600 hover:to-neutral-800">
                    <td className="py-4 pl-4 text-sm"> 1</td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        0xb7f7f6c52f2e2
                      </a>
                    </td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        WrappedCryptoPu
                      </a>
                    </td>
                    <td className="py-4 pl-5 text-sm"> 834 </td>
                    <td className="py-4 pl-5 text-sm">4 months ago</td>
                  </tr>

                  <tr className="bg-gradient-to-b from-neutral-700 to-neutral-950 border border-neutral-800  hover:border-x-neutral-500 hover:from-neutral-600 hover:to-neutral-800">
                    <td className="py-4 pl-4 text-sm"> 1</td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        0xb7f7f6c52f2e2
                      </a>
                    </td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        WrappedCryptoPu
                      </a>
                    </td>
                    <td className="py-4 pl-5 text-sm"> 834 </td>
                    <td className="py-4 pl-5 text-sm">4 months ago</td>
                  </tr>

                  <tr className="bg-gradient-to-b from-neutral-700 to-neutral-950 border border-neutral-800  hover:border-x-neutral-500 hover:from-neutral-600 hover:to-neutral-800">
                    <td className="py-4 pl-4 text-sm"> 1</td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        0xb7f7f6c52f2e2
                      </a>
                    </td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        WrappedCryptoPu
                      </a>
                    </td>
                    <td className="py-4 pl-5 text-sm"> 834 </td>
                    <td className="py-4 pl-5 text-sm">4 months ago</td>
                  </tr>

                  <tr className="bg-gradient-to-b from-neutral-700 to-neutral-950 border border-neutral-800  hover:border-x-neutral-500 hover:from-neutral-600 hover:to-neutral-800">
                    <td className="py-4 pl-4 text-sm"> 1</td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        0xb7f7f6c52f2e2
                      </a>
                    </td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        WrappedCryptoPu
                      </a>
                    </td>
                    <td className="py-4 pl-5 text-sm"> 834 </td>
                    <td className="py-4 pl-5 text-sm">4 months ago</td>
                  </tr>

                  <tr className="bg-gradient-to-b from-neutral-700 to-neutral-950 border border-neutral-800  hover:border-x-neutral-500 hover:from-neutral-600 hover:to-neutral-800">
                    <td className="py-4 pl-4 text-sm"> 1</td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        0xb7f7f6c52f2e2
                      </a>
                    </td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        WrappedCryptoPu
                      </a>
                    </td>
                    <td className="py-4 pl-5 text-sm"> 834 </td>
                    <td className="py-4 pl-5 text-sm">4 months ago</td>
                  </tr>

                  <tr className="bg-gradient-to-b from-neutral-700 to-neutral-950 border border-neutral-800  hover:border-x-neutral-500 hover:from-neutral-600 hover:to-neutral-800">
                    <td className="py-4 pl-4 text-sm"> 1</td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        0xb7f7f6c52f2e2
                      </a>
                    </td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        WrappedCryptoPu
                      </a>
                    </td>
                    <td className="py-4 pl-5 text-sm"> 834 </td>
                    <td className="py-4 pl-5 text-sm">4 months ago</td>
                  </tr>

                  <tr className="bg-gradient-to-b from-neutral-700 to-neutral-950 border border-neutral-800  hover:border-x-neutral-500 hover:from-neutral-600 hover:to-neutral-800">
                    <td className="py-4 pl-4 text-sm"> 1</td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        0xb7f7f6c52f2e2
                      </a>
                    </td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        WrappedCryptoPu
                      </a>
                    </td>
                    <td className="py-4 pl-5 text-sm"> 834 </td>
                    <td className="py-4 pl-5 text-sm">4 months ago</td>
                  </tr>

                  <tr className="bg-gradient-to-b from-neutral-700 to-neutral-950 border border-neutral-800  hover:border-x-neutral-500 hover:from-neutral-600 hover:to-neutral-800">
                    <td className="py-4 pl-4 text-sm"> 2</td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        0xb7f7f6c52f2e2
                      </a>
                    </td>
                    <td className="py-4 pl-2 text-sm">
                      <a
                        href="#"
                        className="px-2 py-1 underline underline-offset-4 text-white hover:bg-slate-400 hover:bg-opacity-20"
                      >
                        WrappedCryptoPu
                      </a>
                    </td>
                    <td className="py-4 pl-5 text-sm"> 834 </td>
                    <td className="py-4 pl-5 text-sm">4 months ago</td>
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

export default Ownerss