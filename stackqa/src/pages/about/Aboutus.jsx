import React from "react";

function Aboutus() {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="w-full flex items-center justify-center">
        <img
          src="https://imgs.search.brave.com/g7k0ZgIXSqrubDW3tZJL_075ynykY3ud9mD_PEBLWsA/rs:fit:750:450:1/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvdGVhbXdv/cmstMjU0NTQ1OC0y/MTQwMTAzLnBuZw"
          className="top-0 h-52 object-scale-down"
          alt=""
        />

      </div>
      <h3 className="text-xl">About StackQA</h3>
       <h1 className="title-font sm:text-4xl lg:text-3xl text-3xl mb-4 font-medium text-blue-500  py-5">
              StackQA is an Open Community For anyone 
              <br className="hidden lg:inline-block" />
              that has a Question.
            </h1>
            <div className="items-center w-4/6 mb-2">
              <p className="text-slate-900 font-extralight mb-4 text-center">
              Our main goal is to connect the people who have knowledge to the people who
              need it, to bring together people with different perspectives so
              they can understand each other better, and to empower everyone to
              share their knowledge.
            </p>
            </div>
            
    </div>
  );
}

export default Aboutus;
