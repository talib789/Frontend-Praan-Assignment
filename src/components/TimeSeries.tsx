import { Hydrabad, Mumbai, Delhi } from "../utils/deviceData";
import Graph from "./Graph";

const TimeSeries = () => {
  return (
    <div className="m-5">
      <div className="d-flex border border-gray-400 p-5 rounded-xl bg-gray-100">
        <Graph location="Mumbai" city={Mumbai} />
      </div>
      <div className="d-flex border border-gray-400 p-5 rounded-xl bg-gray-100 mt-5">
        <Graph location="Delhi" city={Delhi} />
      </div>
      <div className="d-flex border border-gray-400 p-5 rounded-xl bg-gray-100 mt-5">
        <Graph location="Hydrabad" city={Hydrabad} />
      </div>
    </div>
  );
};

export default TimeSeries;
