import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IDevice } from "../interface/device";
import { filterPM, mostWindy } from "../utils/filterData";
import AreaGraph from "./AreaGraph";

type graphProps = {
  location: string;
  city: IDevice[];
};

const Graph = (props: graphProps) => {
  const { location, city } = props;
  const changeDateFormat = (dateRange: any) => {
    let { startDate, endDate } = dateRange;
    return {
      startDate: startDate.split("-").reverse().join("/"),
      endDate: endDate.split("-").reverse().join("/"),
    };
  };
  const [dateDate, setDateDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const [date, setDate] = useState({
    startDate: "10/03/2023",
    endDate: "11/03/2023",
  });

  const handleValueChange = (newValue: any) => {
    setDateDate(() => newValue);
    setDate(() => changeDateFormat(newValue));
  };

  const data: IDevice[] = [
    {
      device: "DeviceA",
      t: "",
      w: 4,
      h: "SW",
      p1: 25,
      p10: 33,
      p25: 32,
    },
  ];

  const [graphData, setGraphData] = useState(data);
  const mostWindyDay = mostWindy(
    graphData,
    date?.startDate.toString(),
    date?.endDate.toString()
  );

  useEffect(() => {
    setGraphData(() => filterPM(city, date.startDate, date.endDate));
  }, [dateDate, date]);
  return (
    <>
      <div className="flex flex-row-reverse">
        <span className="basis-1/4 rounded-md px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-gray-400">
          <Datepicker
            value={dateDate}
            separator={"to"}
            onChange={(dateRange) => handleValueChange(dateRange)}
          />
        </span>
      </div>
      <div className="mb-9 flex justify-start">
        <span className="rounded-md bg-green-500 px-3.5 py-1.5 text-base font-semibold leading-10 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <LocationCityIcon /> {`Data Analysis of ${location} city`}
        </span>
      </div>
      <div className="flex">
        <div className="basis-2/4">
          <AreaGraph graphData={graphData} />
        </div>
        <div className="basis-2/4">
          <div className="m-4 flex justify-center mx-40 mb-10">
            <span className="rounded-md bg-violet-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Bar Chart for Comparing p1 | p10 | p25
            </span>
          </div>
          <BarChart width={800} height={500} data={graphData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="t" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="p1" fill="#8884d8" />
            <Bar dataKey="p10" fill="#82ca9d" />
            <Bar dataKey="p25" fill="#c94fa7" />
          </BarChart>
        </div>
      </div>
      <div className="flex mt-3">
        <div className="basis-2/4">
          <div className="m-4 flex justify-center mx-40 mb-10">
            <span className="rounded-md bg-violet-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Line Plot for Wind Speed
            </span>
          </div>
          <LineChart
            width={800}
            height={500}
            data={graphData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="t" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="w" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="basis-2/4">
          <div className="m-4 flex justify-center mx-40 mb-10">
            <span className="rounded-md bg-violet-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Scatter Plot for Wind Speed
            </span>
          </div>
          <ScatterChart
            width={800}
            height={500}
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis dataKey="w" name="wind speed" unit="km/hr" />
            <XAxis dataKey="t" name="time" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            <Scatter name="wind speed" data={graphData} fill="#8884d8" />
          </ScatterChart>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <span className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {mostWindyDay
            ? `Most windy day of week was on ${mostWindyDay.t} wind speed was ${mostWindyDay.w} km/hr`
            : "Data is not available for selected date-range"}
        </span>
      </div>
    </>
  );
};

export default Graph;
