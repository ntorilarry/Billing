import React from "react";
import { HomeGif } from "../../assets";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="grid h-screen place-content-center max-w-4xl mx-auto bg-white px-4">
        <div className="text-center">
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hello World, welcome to our Hackathon project
          </h1>
          <p className="mt-4 mb-6 text-gray-500">
            Imagine you're a new user who's completed all the steps during the
            onboarding process, except for providing your billing information.
          </p>
          <img className="mx-auto" src={HomeGif} alt="" />

          <p className="mt-4 text-gray-500">
            Click continue to add billing information. Here, you get to connect
            your bank account directly to Purple Wave.
          </p>
          <Link
            to="/billing"
            className="mt-4 inline-flex cursor-pointer items-center justify-center rounded-full  bg-[#1B8ADB] px-4 py-2.5 text-base font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
