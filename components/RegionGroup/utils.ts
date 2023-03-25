import { Region } from "models/Region";

export const isLocationDisabled = (location: Region) => {
  return location.disabled;
};
export const isLocationActive = (
  selectedLocation: Region,
  location: Region
) => {
  return selectedLocation.id === location.id;
};
