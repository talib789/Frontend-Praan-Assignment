import { IDevice } from "../interface/device";

export function filterPM(Array: IDevice[], startDate: string, endDate: string) {
  const data = Array.reduce((acc: IDevice[], curr: IDevice) => {
    if (curr["t"] >= startDate && curr["t"] <= endDate) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return data;
}

export function mostWindy(
  ArrObj: IDevice[],
  startDate: string,
  endDate: string
) {
  const data = ArrObj.reduce((acc: IDevice[], curr: IDevice) => {
    if (curr["t"] >= startDate && curr["t"] <= endDate) {
      acc.push(curr);
    }
    return acc;
  }, []);
  const mostWindy = data.reduce((acc: IDevice, curr: IDevice) => {
    acc = acc["w"] > curr["w"] ? acc : curr;
    return acc;
  }, data[0]);
  return mostWindy;
}
