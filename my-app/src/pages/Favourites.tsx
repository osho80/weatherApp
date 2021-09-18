import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import UnitIcon from "./UnitIcon";
import { darkTheme, lightTheme } from "../theme";
import { setCookie, getCookie } from "../services/cookieService";
import { addCity, removeCity, setCities } from "../store/actions";

const Favourites = (props: any) => {
  const [favCities, setFavCities] = useState<
    [] | { id: string; name: string }[]
  >([]);
  const [localCities, setLocalCities] = useState<
    null | { id: string; name: string }[]
  >(null);
  const cookieName = "favCities";
  console.log("My Favourites props", props);

  useEffect(() => {
    if (props.favCities.length <= 0) {
      const getLocal = getCookie(cookieName);
      if (getLocal) {
        setLocalCities(JSON.parse(getLocal));
        props.setCities(JSON.parse(getLocal));
      }
    }
  }, []);

  useEffect(() => {
    const storeCities = props.favCities;
    setFavCities(storeCities);
  }, [props, favCities]);

  if (favCities.length <= 0) {
    return (
      <>
        <h2>Your List is Empty</h2>
        <p>
          Go back to <Link to="/">home page</Link> and add cities to your
          favourites
        </p>
      </>
    );
  } else {
    return (
      <div>
        {favCities.map((city) => {
          return <h1>hello</h1>;
        })}
      </div>
    );
  }
};

const mapStateToProps = (state: any) => {
  return {
    tempUnit: state.appStore.tempUnit,
    isDark: state.appStore.isDark,
    favCities: state.appStore.favCities,
  };
};

const mapDispatchToProps = {
  addCity,
  removeCity,
  setCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
