import React from "react";
import {
  AiFillGithub,
  AiFillMedicineBox,
  AiFillMobile,
  AiOutlineArrowRight,
  AiOutlineCheck,
  AiOutlineComment,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlinePaperClip,
  AiOutlinePropertySafety,
  AiOutlineSafety,
  AiTwotoneMessage,
} from "react-icons/ai";

function Home() {
  return (
    <div className="w-full">
      <section className="text-gray-700 body-font">
        <div className="flex px-5 py-24 md:flex-row w-full flex-col items-center bg-blue-500">
          <div className="lg:flex-grow md:w-1/2 lg:pr-12 pl-5 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white  py-5">
              StackQA is an Open community
              <br className="hidden lg:inline-block" />
              For anyone that has a Question. Just ASK...
            </h1>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-400 font-semibold border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded text-lg">
                ASK QUESTION
              </button>
              <button className="ml-4 inline-flex font-semibold text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                About us
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/assets/stack.png"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              WHY SHOULD YOU
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              ASK QUESTIONS WITH STACKQA
            </h1>
          </div>
          <div className="flex flex-wrap m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineComment size={20}/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Comments
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-blue-500 inline-flex items-center">
                    Learn More
                    <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheck size={20}/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Votes
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-blue-500 inline-flex items-center">
                    Learn More
                    <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiFillMedicineBox />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Answers
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-blue-500 inline-flex items-center">
                    Learn More
                    <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="https://imgs.search.brave.com/PhVFuf0Wo7MLhruyb02Bjy2zbcuUb-HrD8esCnHKXn4/rs:fit:960:640:1/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/Mi8wNy8xMi81Mi9w/aG9uZS0xODg5NDAx/Xzk2MF83MjAuanBn"
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-500 mb-5">
                <AiOutlineSafety size={30}/>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                 Private
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className="mt-3 text-blue-500 inline-flex items-center">
                  Learn More
                  <AiOutlineArrowRight />
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-500 mb-5">
                <AiOutlinePropertySafety size={30} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Public
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className="mt-3 text-blue-500 inline-flex items-center">
                  Learn More
                  <AiOutlineArrowRight />
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-500 mb-5">
                <AiFillMobile size={30}/>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Personal
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className="mt-3 text-blue-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <AiOutlinePaperClip
              className="flex justify-center w-full"
              size={50}
            />

            <p className="leading-relaxed text-lg">
              You shouldn't panic so much, You'll never be a good thief if you
              panic. Debugging is twice as hard as writing the code in the first
              place. Therefore, if you write the code as cleverly as possible,
              you are, by definition, not smart enough to debug it.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              MICHAEL KAMAU
            </h2>
            <p className="text-gray-500">CTO, STACKQA</p>
          </div>
        </div>
      </section>
      <a
        href="https://github.com/mik284"
        className="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-blue-500  mr-8 mb-8 shadow-sm border-gray-300"
        target="_blank"
      >
        <AiFillGithub size={50} />
      </a>
    </div>
  );
}

export default Home;
