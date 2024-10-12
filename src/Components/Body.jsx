// eslint-disable-next-line no-unused-vars
import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <img
          src="./images/Blue-Shape.png"
          alt="1st"
          className="-rotate-45 h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./images/Pink-Shape.png"
          alt="2nd"
          className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./images/purple-Shape.png"
          alt="3rd"
          className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./images/Hero-Model.png"
          alt="4th"
          className="absolute h-64 md:h-72 lg:h-[400px]"
        />
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight">
          Host your website in less than 5 minutes
        </h1>
        <p className="font-lato text-gray-400">
          with Hoster, get your website up and running in no less than 5 minutes
          with the most competitive pricing packages available online
        </p>

        {/* <!-- Form with email input and button --> */}
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input
            className="rounded-md px-4 py-3 placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email address"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
            Join Waitlist
          </button>
        </form>

        {/* <!-- Checkmark and Text Below Button --> */}
        <div className="flex items-center gap-2 mt-4">
          <img
            src="./images/Checkmark.png"
            alt="Checkmark"
            className="w-6 h-6"
          />
          <p className="font-lato text-gray-400">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
