import React from 'react'
import LineChart from './LineChart'
import Slider from './Slider'

const Analyticspage = () => {
  return (
    <div className="pt-24">
      <div className="flex w-full flex-row justify-start px-5 py-5 sm:px-10">
        <a
          href="#"
          className="mx-1 border-0 bg-slate-100 px-2 py-1 text-xs text-slate-950 sm:text-sm dark:text-white"
        >
          All
        </a>

        <a
          href="#"
          className="mx-1 border-0 bg-slate-100 px-2 py-1 text-xs text-slate-950 sm:text-sm dark:text-white"
        >
          Leaderboard
        </a>

        <a
          href="#"
          className="mx-1 border-0 bg-slate-100 px-2 py-1 text-xs text-slate-950 sm:text-sm dark:text-white"
        >
          Attributes
        </a>

        <a
          href="#"
          className="mx-1 border-0 bg-slate-100 px-2 py-1 text-xs text-slate-950 sm:text-sm dark:text-white"
        >
          Top Sales
        </a>

        <a
          href="#"
          className="mx-1 border-0 bg-slate-100 px-2 py-1 text-xs text-slate-950 sm:text-sm dark:text-white"
        >
          {' '}
          Largest Sales{' '}
        </a>

        <a
          href="#"
          className="mx-1 border-0 bg-slate-100 px-2 py-1 text-xs text-slate-950 sm:text-sm dark:text-white"
        >
          {' '}
        </a>
      </div>

      <div className="flex w-full flex-col items-center">
        <div className="w-0/4 m-auto bg-[url(/titlelogo.svg)] bg-no-repeat py-4 pl-8 font-mono text-xl font-semibold text-white [background-size:65px_65px]">
          <h2>SpaceBudz</h2>
        </div>
      </div>

      <div className="m-auto p-10 text-justify text-sm font-semibold text-cyan-50 sm:text-base">
        10,000 unique collectible characters with proof of ownership stored on
        the Ethereum blockchain. The project that inspired the modern CryptoArt
        movement. CryptoPunks are one of the earliest and most iconic examples
        of Non-Fungible Tokens minted on Ethereum, and were the inspiration
        for the ERC-721 standard standard which powers most digital art and
        collectibles on-chain. Since their release on June 23, 2017, CryptoPunks
        have been featured in numerous international publications, headlined
        prestigious international auctions at both Christis and
        Sotheby&rsqus, and even entered the permanent collections of important
        art museums such as the ICA Miami, the Centre Pompidou, and the LACMA.
        For more information and updates, check out the CryptoPunks brand hub.
      </div>

      <div className="w-full bg-[#262840] rounded-t-lg">
        <h2 className="m-auto py-4 text-center text-3xl font-semibold capitalize text-cyan-50 sm:text-4xl">
          checkout the hottest sale offers
        </h2>

        <Slider />

        <p className="m-auto p-10 text-justify text-sm text-cyan-50 sm:text-base">
          CryptoPunks are 10,000 uniquely generated characters. No two are
          exactly alike, and each one can be trustlessly collected by anyone
          interacting with the Ethereum blockchain. Originally, Punks could be
          claimed for free using any Ethereum wallet with enough $ETH to cover
          gas fees. Now, they can be purchased from their present owners using
          the bespoke CryptoPunks marketplace, which is also embedded in the
          blockchain. Via this frictionless market you can buy, bid on, and
          offer Punks for sale. Below,ll find information about the
          availability of each Punk. Punks with a blue background are not for
          sale and have no current bids. Punks with a red background are
          available for sale by their owner. Finally, Punks with a purple
          background have an active bid on them. See the marketplace
          instructions below to acquire your very own Punk. You should also join
          the Discord Chat, which includes a bot that announces all bids, offers
          and sales in realtime.
        </p>
      </div>

      <div>
        <img
          className="h-80 w-full"
          src="https://www.myaccelerate.io/assets/utilities/image/epa.jpg"
          alt="Ad- woman on a beach"
        />
      </div>

      <div className=" px-10 pb-5">
        <div className="h-0 max-w-28 rounded-tl-full border-b-[18px] border-r-[18px] border-b-black border-r-transparent pb-10 pl-3 text-6xl text-slate-500">
          ...
        </div>

        <div className="w-full rounded-tr-3xl bg-black">
          <h2 className="m-auto py-4 text-center text-3xl font-semibold capitalize text-cyan-50 sm:text-4xl">
            Transactions
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 bg-black p-2 sm:grid-cols-2 md:grid-cols-3 md:p-2 md:pl-10 lg:grid-cols-4 lg:justify-between lg:px-4">
          <div className="flex w-full p-2 md:h-[185px] md:w-[236px]">
            <div className="w-1/2 rounded-s-lg bg-rose-950">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                alt="Buy Me"
                className="h-full w-full"
              />
            </div>

            <div className="w-1/2 rounded-e-lg bg-[#1d041c] px-2 py-4 max-[320px]:px-1 min-[400px]:px-7 min-[500px]:px-10 sm:px-6 md:px-4">
              <h1 className="text-2xl font-bold text-white">1</h1>
              <h1 className="text-xl font-bold text-white">#5569</h1>
              <p className="mt-1 text-sm text-white">8K= ($23.7M)</p>
              <p className="mt-1 text-sm text-white">Jan 12, 2024</p>
            </div>
          </div>

          <div className="flex w-full p-2 md:h-[185px] md:w-[236px]">
            <div className="w-1/2 rounded-s-lg bg-rose-950">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                alt="Buy Me"
                className="h-full w-full"
              />
            </div>

            <div className="w-1/2 rounded-e-lg bg-[#1d041c] px-2 py-4 max-[320px]:px-1 min-[400px]:px-7 min-[500px]:px-10 sm:px-6 md:px-4">
              <h1 className="text-2xl font-bold text-white">1</h1>
              <h1 className="text-xl font-bold text-white">#5569</h1>
              <p className="mt-1 text-sm text-white">8K= ($23.7M)</p>
              <p className="mt-1 text-sm text-white">Jan 12, 2024</p>
            </div>
          </div>

          <div className="flex w-full p-2 md:h-[185px] md:w-[236px]">
            <div className="w-1/2 rounded-s-lg bg-rose-950">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                alt="Buy Me"
                className="h-full w-full"
              />
            </div>

            <div className="w-1/2 rounded-e-lg bg-[#1d041c] px-2 py-4 max-[320px]:px-1 min-[400px]:px-7 min-[500px]:px-10 sm:px-6 md:px-4">
              <h1 className="text-2xl font-bold text-white">1</h1>
              <h1 className="text-xl font-bold text-white">#5569</h1>
              <p className="mt-1 text-sm text-white">8K= ($23.7M)</p>
              <p className="mt-1 text-sm text-white">Jan 12, 2024</p>
            </div>
          </div>

          <div className="flex w-full p-2 md:h-[185px] md:w-[236px]">
            <div className="w-1/2 rounded-s-lg bg-rose-950">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                alt="Buy Me"
                className="h-full w-full"
              />
            </div>

            <div className="w-1/2 rounded-e-lg bg-[#1d041c] px-2 py-4 max-[320px]:px-1 min-[400px]:px-7 min-[500px]:px-10 sm:px-6 md:px-4">
              <h1 className="text-2xl font-bold text-white">1</h1>
              <h1 className="text-xl font-bold text-white">#5569</h1>
              <p className="mt-1 text-sm text-white">8K= ($23.7M)</p>
              <p className="mt-1 text-sm text-white">Jan 12, 2024</p>
            </div>
          </div>

          <div className="flex w-full p-2 md:h-[185px] md:w-[236px]">
            <div className="w-1/2 rounded-s-lg bg-rose-950">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                alt="Buy Me"
                className="h-full w-full"
              />
            </div>

            <div className="w-1/2 rounded-e-lg bg-[#1d041c] px-2 py-4 max-[320px]:px-1 min-[400px]:px-7 min-[500px]:px-10 sm:px-6 md:px-4">
              <h1 className="text-2xl font-bold text-white">1</h1>
              <h1 className="text-xl font-bold text-white">#5569</h1>
              <p className="mt-1 text-sm text-white">8K= ($23.7M)</p>
              <p className="mt-1 text-sm text-white">Jan 12, 2024</p>
            </div>
          </div>
        </div>

        <div className="w-full bg-black">
          <h2 className="m-auto px-6 pt-4 text-3xl font-semibold capitalize text-cyan-50 sm:text-4xl">
            Latest transaction
          </h2>
          <h5 className="m-auto px-8 pt-4 text-sm text-cyan-50 sm:text-base">
            Updated 14 seconds ago
          </h5>
        </div>

        <div className="grid w-full grid-cols-1 bg-black p-2 sm:grid-cols-2 md:grid-cols-3 md:p-2 md:pl-10 lg:grid-cols-4 lg:justify-between lg:px-4">
          <div className="flex w-full p-2 md:h-[185px] md:w-[236px]">
            <div className="w-1/2 rounded-s-lg bg-rose-950">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                alt="Buy Me"
                className="h-full w-full"
              />
            </div>

            <div className="w-1/2 rounded-e-lg bg-[#1d041c] px-2 py-4 max-[320px]:px-1 min-[400px]:px-7 min-[500px]:px-10 sm:px-6 md:px-4">
              <h1 className="text-2xl font-bold text-white">1</h1>
              <h1 className="text-xl font-bold text-white">#5569</h1>
              <p className="mt-1 text-sm text-white">8K= ($23.7M)</p>
              <p className="mt-1 text-sm text-white">Jan 12, 2024</p>
            </div>
          </div>

          <div className="flex w-full p-2 md:h-[185px] md:w-[236px]">
            <div className="w-1/2 rounded-s-lg bg-rose-950">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                alt="Buy Me"
                className="h-full w-full"
              />
            </div>

            <div className="w-1/2 rounded-e-lg bg-[#1d041c] px-2 py-4 max-[320px]:px-1 min-[400px]:px-7 min-[500px]:px-10 sm:px-6 md:px-4">
              <h1 className="text-2xl font-bold text-white">1</h1>
              <h1 className="text-xl font-bold text-white">#5569</h1>
              <p className="mt-1 text-sm text-white">8K= ($23.7M)</p>
              <p className="mt-1 text-sm text-white">Jan 12, 2024</p>
            </div>
          </div>

          <div className="flex w-full p-2 md:h-[185px] md:w-[236px]">
            <div className="w-1/2 rounded-s-lg bg-rose-950">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                alt="Buy Me"
                className="h-full w-full"
              />
            </div>

            <div className="w-1/2 rounded-e-lg bg-[#1d041c] px-2 py-4 max-[320px]:px-1 min-[400px]:px-7 min-[500px]:px-10 sm:px-6 md:px-4">
              <h1 className="text-2xl font-bold text-white">1</h1>
              <h1 className="text-xl font-bold text-white">#5569</h1>
              <p className="mt-1 text-sm text-white">8K= ($23.7M)</p>
              <p className="mt-1 text-sm text-white">Jan 12, 2024</p>
            </div>
          </div>

          <div className="flex w-full p-2 md:h-[185px] md:w-[236px]">
            <div className="w-1/2 rounded-s-lg bg-rose-950">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                alt="Buy Me"
                className="h-full w-full"
              />
            </div>

            <div className="w-1/2 rounded-e-lg bg-[#1d041c] px-2 py-4 max-[320px]:px-1 min-[400px]:px-7 min-[500px]:px-10 sm:px-6 md:px-4">
              <h1 className="text-2xl font-bold text-white">1</h1>
              <h1 className="text-xl font-bold text-white">#5569</h1>
              <p className="mt-1 text-sm text-white">8K= ($23.7M)</p>
              <p className="mt-1 text-sm text-white">Jan 12, 2024</p>
            </div>
          </div>

          <div className="flex w-full p-2 md:h-[185px] md:w-[236px]">
            <div className="w-1/2 rounded-s-lg bg-rose-950">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                alt="Buy Me"
                className="h-full w-full"
              />
            </div>

            <div className="w-1/2 rounded-e-lg bg-[#1d041c] px-2 py-4 max-[320px]:px-1 min-[400px]:px-7 min-[500px]:px-10 sm:px-6 md:px-4">
              <h1 className="text-2xl font-bold text-white">1</h1>
              <h1 className="text-xl font-bold text-white">#5569</h1>
              <p className="mt-1 text-sm text-white">8K= ($23.7M)</p>
              <p className="mt-1 text-sm text-white">Jan 12, 2024</p>
            </div>
          </div>
        </div>

        <div className="w-full rounded-b-3xl bg-black pb-7 pt-10">
          <div className="shadow-bg-blue-700 m-auto w-52 rounded-2xl bg-blue-700 p-2 text-center text-white shadow-xl hover:bg-indigo-500 md:w-2/4">
            <button className="lg:text-sm text-lg font-bold">
              See all Transactions
            </button>
          </div>
        </div>
      </div>
      <div className="px-10 pb-5">
        <div className="w-full flex justify-center text-white text-4xl font-semibold">
          Overall Status
        </div>
        <div className="w-full flex justify-center text-white">
          <div className="w-1/2 mx text-white">
            <div className="w-full rounded-b-3xl pb-7 pt-10 pr-4">
              <div className="w-full grid grid-cols-3">
                <div className="py-2 pr-2">
                  <h4 className="text-white text-xs">Current Lowest Price</h4>
                  <h4 className="text-white text-xs pb-2">Punk Available</h4>
                  <h4 className="text-white text-sm">61.49 ETH </h4>
                  <h4 className="text-white text-sm">($145,866.57 USD)</h4>
                </div>
                <div className="py-2 pr-2">
                  <h4 className="text-white text-xs">Current Lowest Price</h4>
                  <h4 className="text-white text-xs pb-2">Punk Available</h4>
                  <h4 className="text-white text-sm">61.49 ETH </h4>
                  <h4 className="text-white text-sm">($145,866.57 USD)</h4>
                </div>
                <div className="py-2 pr-2">
                  <h4 className="text-white text-xs">Current Lowest Price</h4>
                  <h4 className="text-white text-xs pb-2">Punk Available</h4>
                  <h4 className="text-white text-sm">61.49 ETH </h4>
                  <h4 className="text-white text-sm">($145,866.57 USD)</h4>
                </div>
              </div>
              <div className="w-full grid grid-cols-3 pb-20">
                <div className="py-2 pr-2">
                  <h4 className="text-white text-xs pb-2">
                    Value of Sales (24 Hours)
                  </h4>
                  <h4 className="text-white text-sm">68.19Ξ ($161.76K)</h4>
                </div>
                <div className="py-2 pr-2">
                  <h4 className="text-white text-xs pb-2">
                    Value of Sales (24 Hours)
                  </h4>
                  <h4 className="text-white text-sm">68.19Ξ ($161.76K)</h4>
                </div>
                <div className="py-2 pr-2">
                  <h4 className="text-white text-xs pb-2">
                    Value of Sales (24 Hours)
                  </h4>
                  <h4 className="text-white text-sm">68.19Ξ ($161.76K)</h4>
                </div>
              </div>
              <div className="shadow-bg-blue-700 m-auto w-full rounded-2xl bg-blue-700 p-2 text-center text-white shadow-xl hover:bg-indigo-500">
                <button className="lg:text-sm text-lg font-bold">
                  Top Budz Owners
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 text-white">
            <div className="w-full rounded-b-3xl pb-7 pt-10 pl-4">
              <div className="w-full rounded-md pb-16">
                <LineChart />
              </div>
              <div className="shadow-bg-blue-700 m-auto w-full rounded-2xl bg-blue-700 p-2 text-center text-white shadow-xl hover:bg-indigo-500">
                <button className="lg:text-sm text-lg font-bold">
                  All Budz Types and Attributes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-6 py-4">
        <h2 className="m-auto px-2 py-1 text-3xl font-semibold capitalize text-cyan-50 sm:text-4xl">
          for sale
        </h2>

        <p className="m-auto pb-4 pl-2 pr-36 text-justify text-sm text-cyan-50 md:pr-56 lg:pr-[550px]">
          check out the hottest sale offers. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quam ut, commodi porro nam laboriosam
          voluptate ea, odio aut est voluptatum provident, architecto ullam
          omnis recusandae dolores non dolorum nihil modi.
        </p>

        <img
          className="h-48 w-full px-2 object-cover"
          src="https://www.myaccelerate.io/assets/utilities/image/foa.jpg"
          alt="Ad- woman on a beach"
        />
      </div>

      <div className="w-full px-6 py-4">
        <h2 className="m-auto px-2 py-1 text-3xl font-semibold capitalize text-cyan-50 sm:text-4xl">
          for sale
        </h2>

        <p className="m-auto pb-4 pl-2 pr-36 text-justify text-sm text-cyan-50 md:pr-56 lg:pr-[550px]">
          check out the hottest sale offers. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quam ut, commodi porro nam laboriosam
          voluptate ea, odio aut est voluptatum provident, architecto ullam
          omnis recusandae dolores non dolorum nihil modi.
        </p>

        <img
          className="h-48 w-full px-2 object-fill"
          src="https://www.myaccelerate.io/assets/utilities/image/foa.jpg"
          alt="Ad- woman on a beach"
        />
      </div>

      <div className="w-full  px-6 py-4">
        <h2 className="m-auto px-2 py-1 text-3xl font-semibold capitalize text-cyan-50 sm:text-4xl">
          for sale
        </h2>

        <p className="m-auto pb-4 pl-2 pr-36 text-justify text-sm text-cyan-50 md:pr-56 lg:pr-[550px]">
          check out the hottest sale offers. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quam ut, commodi porro nam laboriosam
          voluptate ea, odio aut est voluptatum provident, architecto ullam
          omnis recusandae dolores non dolorum nihil modi.
        </p>

        <img
          className="h-48 w-full px-2 object-cover"
          src="https://www.myaccelerate.io/assets/utilities/image/foa.jpg"
          alt="Ad- woman on a beach"
        />
      </div>

      <div className="w-full  px-6 py-4">
        <h2 className="m-auto px-2 py-1 text-3xl font-semibold capitalize text-cyan-50 sm:text-4xl">
          for sale
        </h2>

        <p className="m-auto pb-4 pl-2 pr-36 text-justify text-sm text-cyan-50 md:pr-56 lg:pr-[550px]">
          check out the hottest sale offers. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quam ut, commodi porro nam laboriosam
          voluptate ea, odio aut est voluptatum provident, architecto ullam
          omnis recusandae dolores non dolorum nihil modi.
        </p>

        <img
          className="h-48 w-full px-2"
          src="https://www.myaccelerate.io/assets/utilities/image/foa.jpg"
          alt="Ad- woman on a beach"
        />
      </div>

      <div className="w-full  px-6 py-1">
        <h2 className="m-auto px-2 py-1 text-3xl font-semibold capitalize text-cyan-50 sm:text-4xl">
          whats for sale ?
        </h2>

        <p className="m-auto px-3 py-2 text-justify text-sm text-cyan-50">
          check out the hottest sale offers. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quam ut, commodi porro nam laboriosam
          voluptate ea, odio aut est voluptatum provident, architecto ullam
          omnis recusandae dolores non dolorum nihil modi.
        </p>
      </div>
      <div className="w-full  px-6 py-1">
        <h2 className="m-auto px-2 py-1 text-3xl font-semibold capitalize text-cyan-50 sm:text-4xl">
          whats for sale ?
        </h2>

        <p className="m-auto px-3 py-2 text-justify text-sm text-cyan-50">
          check out the hottest sale offers. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quam ut, commodi porro nam laboriosam
          voluptate ea, odio aut est voluptatum provident, architecto ullam
          omnis recusandae dolores non dolorum nihil modi.
        </p>
      </div>

      <div className="w-full  px-6 py-1">
        <h2 className="m-auto px-2 py-1 text-3xl font-semibold capitalize text-cyan-50 sm:text-4xl">
          whats for sale ?
        </h2>

        <div className="my-1 flex cursor-pointer pb-8">
          <div className="h-10 w-8 py-1 text-center">
            <p className="p-0 text-xl text-white">1</p>
          </div>
          <div className="h-10 w-full px-1 py-2">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              totam ullam illum, voluptatibus non esse quod tempore dolores
              perspiciatis dignissimos quas earum itaque dolorum accusantium
              nobis, hic architecto at ipsa!
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-6 py-4">
        <h2 className="m-auto px-2 py-4 text-center text-3xl font-semibold capitalize text-cyan-50 sm:text-4xl">
          Details and FAQ
        </h2>

        <div className="my-1 flex cursor-pointer pb-8">
          <div className="h-10 w-8 py-1 text-center">
            <p className="p-0 text-3xl text-white">&bul</p>
          </div>
          <div className="h-10 w-full px-1 py-3">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              totam ullam illum, voluptatibus non esse quod tempore dolores
              perspiciatis dignissimos quas earum itaque dolorum accusantium
              nobis, hic architecto at ipsa!
            </p>
          </div>
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
                <button className="bg-purple-600 px-4 py-1 text-lg font-semibold text-white">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Analyticspage
