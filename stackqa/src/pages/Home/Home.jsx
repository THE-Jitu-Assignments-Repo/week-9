import React from "react";

function Home() {
  return (
    <div>
      <div className="container flex-col mx-auto h-screen text-gray-800 flex flex-wrap">
        <div className="w-full lg:w-full flex-0 p-5 bg-[#438ADD] shadow-lg h-1/2 flex-row">
          <div className="flex  w-1/2 flex-col my-[50px] ">
            <p className="text-3xl text-left text-white">
              StackQA is an Open community For anyone that has a Question. Just
              ASK...
            </p>
          </div>
          <div className="w-2/3"></div>
        </div>

        <div className="w-full lg:w-3/12 flex-0 p-5">
          <ul className="">
            <li className="mr-2">
              <a
                href=""
                className="text-center block rounded py-2 px-4 bg-gray-300 text-gray-600 mb-2"
              >
                Active Item
              </a>
            </li>
            <li className="mr-2">
              <a
                href=""
                className="text-center block rounded py-2 px-4 bg-gray-300 text-gray-600 mb-2"
              >
                Nav Item
              </a>
            </li>
          </ul>
        </div>

        <div class="overflow-hidden bg-[#0F2443] mx-9 h-[200px] rounded-lg flex">
          <img
            src="https://imgs.search.brave.com/7XCHA31ah8RAkhXVdOQCKtAZAwRA7ObVgYqpSOdBw0I/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/S3htcTMxcloyRTdO/MkMzSEFncGZ3SGFI/YSZwaWQ9QXBp"
            alt="ask"
          />
          <div className="flex flex-col">

          <h3 className="text-[#0BF606] pl-5  pt-2 text-2xl">WHY ASK QUESTION</h3>
          <span className="text-xl w-2/3 text-gray-300 m-auto ml-0 pl-5">
            Businesses gather some of this information prior to introducing
            products, but they acquire the majority of customer data after they
            have introduced products. Whatever the case, customer feedback is
            important for a number of specific reasons that help future
            planning.
          </span>
          </div>
        </div>
      </div>

      <footer className="lg:px-16 px-8 bg-[#0F2443] py-6 pb-10 shadow-md">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-3/6">
            <div className="text-green-100 mb-3 md:mb-0 pr-0 md:pr-10">
              <a
                href=""
                className="text-xl font-semibold text-green-100 hover:text-white tracking-normal"
              >
                StackQA
              </a>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                mattis ipsum nec finibus luctus. Sed tempus ultricies leo eget
                dignissim. Aliquam ac sapien ornare, vestibulum dui eget, varius
                libero. Sed ut risus posuere, vestibulum quam vitae, dictum sem.
              </p>

              <form className="my-4">
                <span className="text-lg text-green-100">Newsletter</span>
                <div className="flex mt-2">
                  <input
                    className="flex-1 shadow appearance-none border rounded w-full py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                  <button
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/6">
            <div className="text-green-100 mb-3 md:mb-0">
              <span className="text-lg">Links 1</span>
              <ul className="">
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    Help
                  </a>
                </li>
                <li className="mt-2">
                  <a href="profile text-green-100 hover:text-white">Support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/6">
            <div className="text-green-100 mb-3 md:mb-0">
              <span className="text-lg">Links 2</span>
              <ul className="">
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    Help
                  </a>
                </li>
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/6">
            <div className="text-green-100 mb-3 md:mb-0">
              <span className="text-lg">Links 3</span>
              <ul className="">
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    Help
                  </a>
                </li>
                <li className="mt-2">
                  <a href="" className=" text-green-100 hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
