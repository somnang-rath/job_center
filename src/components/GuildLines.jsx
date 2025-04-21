import React from "react";

const GuildLines = () => {
  return (
    <div className="px-20 py-10 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
      <div className="space-y-10">
        <div>
          <h1 className="font-bold text-3xl text-gray-900 pb-2 font-serif">
            How to post a job?
          </h1>
          <h3 className="text-gray-900 text-xl">
            It's quick to start and - Learn more.
          </h3>
        </div>
        <div className="relative grid grid-cols-1 space-y-4 space-x-3 md:grid-cols-2 lg:grid-cols-4">
          <hr className="w-full absolute top-7 -z-10 border border-gray-200" />

          <div className="space-y-5">
            <div className=" flex justify-center items-center rounded-full w-14 h-14  font-mono text-2xl bg-teal-500 text-white">
              01
            </div>
            <div className="space-y-3">
              <h2 className="font-bold text-xl">step 1</h2>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident optio quidem quis mollitia sed blanditiis ipsa libero
                rem nesciunt architecto.
              </h3>
            </div>
          </div>

          <div className="relative">
            <hr className=" w-full absolute top-7 -z-10 border border-gray-200" />
            <div className="space-y-5">
              <div className="  flex justify-center items-center rounded-full w-14 h-14 font-mono text-2xl bg-teal-500 text-white">
                02
              </div>
              <div className="space-y-3">
                <h2 className="font-bold text-xl">step 2</h2>
                <h3>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident optio quidem quis mollitia sed blanditiis ipsa
                  libero rem nesciunt architecto.
                </h3>
              </div>
            </div>
          </div>

          <div className="relative">
            <hr className=" w-full absolute top-7 -z-10 border border-gray-200" />
            <div className="space-y-5">
              <div className="  flex justify-center items-center rounded-full w-14 h-14 font-mono text-2xl bg-teal-500 text-white">
                03
              </div>
              <div className="space-y-3">
                <h2 className="font-bold text-xl">step 3</h2>
                <h3>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident optio quidem quis mollitia sed blanditiis ipsa
                  libero rem nesciunt architecto.
                </h3>
              </div>
            </div>
          </div>

          <div className="relative">
            <hr className=" w-full absolute top-7 -z-10 border border-gray-200" />
            <div className="space-y-5">
              <div className="  flex justify-center items-center rounded-full w-14 h-14 font-mono text-2xl bg-teal-500 text-white">
                04
              </div>
              <div className="space-y-3">
                <h2 className="font-bold text-xl">step 4</h2>
                <h3>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident optio quidem quis mollitia sed blanditiis ipsa
                  libero rem nesciunt architecto.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply for Job */}
      <div className="space-y-10">
        {/* Heading */}
        <div>
          <h1 className="font-bold text-3xl text-gray-900 pb-2 font-serif">
            How to Apply a job?
          </h1>
          <h3 className="text-gray-900 text-xl">
            It's quick to start and - Learn more.
          </h3>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-3 w-[2px] h-full bg-gray-200 mx-4"></div>
              <div className="flex items-start gap-4 mb-10">
                <div className="flex justify-center items-center rounded-full w-14 h-14 font-mono text-2xl bg-teal-500 text-white">
                  01
                </div>
                <div className="space-y-3">
                  <h2 className="font-bold text-xl">step 1</h2>
                  <h3>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Provident optio quidem quis mollitia sed blanditiis ipsa
                    libero rem nesciunt architecto.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-90">image</div>
        </div>
      </div>
    </div>
  );
};

export default GuildLines;
