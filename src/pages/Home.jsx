import React from "react";
import JobCard from "../components/JobCard";
import GuildLines from "../components/GuildLines";

const Home = () => {
  return (
    <div>
      <div className="px-20 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
        <JobCard />
      </div>
      <div className="bg-gray-100">
        <GuildLines />
      </div>
    </div>
  );
};

export default Home;
