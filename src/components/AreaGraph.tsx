import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IDevice } from "../interface/device";

type AreaGraphProps = {
  graphData: IDevice[];
};
const AreaGraph = (props: AreaGraphProps) => {
  const { graphData } = props;
  return (
    <>
      <div className="m-4 flex mx-40 mb-10">
        <span className="rounded-md bg-violet-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Time-series graph with the pm readings overlaid on top of each other
        </span>
      </div>
      <AreaChart
        width={800}
        height={500}
        data={graphData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorp1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorp10" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorp25" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#c94fa7" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#c94fa7" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="t" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="p1"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorp1)"
        />
        <Area
          type="monotone"
          dataKey="p10"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorp10)"
        />
        <Area
          type="monotone"
          dataKey="p25"
          stroke="#c94fa7"
          fillOpacity={1}
          fill="url(#colorp25)"
        />
        <Legend />
      </AreaChart>
    </>
  );
};

export default AreaGraph;
