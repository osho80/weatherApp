// import weatherService from "../services/weatherService";

export function addCity(city) {
  return (dispatch) => {
    dispatch(_addCity(city));
  };
}

export function removeCity(id) {
  //city
  return (dispatch) => {
    dispatch(_removeCity(id)); //city
  };
}

export function setCities(citiesArr) {
  return (dispatch) => {
    dispatch(_setCities(citiesArr));
  };
}

export function setUnit(unit) {
  return (dispatch) => {
    dispatch(_setUnit(unit));
  };
}

export function setMode(isDark) {
  return (dispatch) => {
    dispatch(_setMode(isDark));
  };
}

const _addCity = (city) => {
  return { type: "ADD_CITY", city };
};

const _removeCity = (id) => {
  // city
  return { type: "REMOVE_CITY", id }; // city
};

const _setCities = (citiesArr) => {
  return { type: "SET_CITIES", citiesArr };
};

const _setUnit = (unit) => {
  return { type: "SET_UNIT", unit };
};

const _setMode = (isDark) => {
  return { type: "SET_MODE", isDark };
};
