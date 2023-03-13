import React from "react";
import TimeSeries from "../components/TimeSeries";

const Dashboard = () => {
  return (
    <div>
      <div className="flex p-10">
        <span className="rounded-md bg-red-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Data Available from 10/03/2023 to 10/03/2024 Only
        </span>
      </div>
      <TimeSeries />
    </div>
  );
};

export default Dashboard;
