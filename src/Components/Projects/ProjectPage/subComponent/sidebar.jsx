import React, { useState } from "react";
import filter from "./image/filter.png";
// import $ from "jquery";

const Sidebar = ({ filterData, data, setFilterData }) => {
  // var filterCheckbox = $('input[type="checkbox"]');

  // var filterFunc = () => {
  //   var selectedFilters = {};
  //   filterCheckbox.filter(":checked").each(() => {
  //     selectedFilters[this.name].push(this.value);
  //   });
  // };

  const projectType = [
    {
      label: "Monitoring",
      value: 1,
    },
    {
      label: "Donation & Monitoring",
      value: 2,
    },
    {
      label: "Investment",
      value: 3,
    },
  ];

  const InvestmentType = [
    {
      label: "Carbon Credits",
      value: 1,
    },
    {
      label: "Green Credits",
      value: 2,
    },
  ];

  const country = [];
  const city = [];

  for (let i = 0; i < data.length; i++) {
    const currentCity = data[i].city;
    const currentCountry = data[i].country;

    // Check if the city is not already in the city array
    if (!city.includes(currentCity)) {
      city.push(currentCity);
    }

    // Check if the country is not already in the country array
    if (!country.includes(currentCountry)) {
      country.push(currentCountry);
    }
  }

  return (
    <div>
      <div style={{ padding: "30px", display: "flex", alignItems: "center" }}>
        <img src={filter} alt="filter" />
        <h3>Filter</h3>
      </div>

      <hr />

      <div style={{ padding: "30px" }}>
        <h3>Project Type</h3>
        {projectType.map((type) => {
          return (
            <div style={{ display: "flex", padding: "10px" }}>
              <input type="checkbox" value={type.value} name="projectType" />
              <p style={{ paddingLeft: "5px" }}>{type.label}</p>
            </div>
          );
        })}
      </div>

      <div style={{ padding: "30px" }}>
        <h3>Investment Type</h3>
        {InvestmentType.map((type) => {
          return (
            <div style={{ display: "flex", padding: "10px" }}>
              <input type="checkbox" value={type.label} name="invType" />
              <p style={{ paddingLeft: "5px" }}>{type.label}</p>
            </div>
          );
        })}
      </div>

      <hr />

      <div style={{ padding: "30px" }}>
        <h3>Country</h3>
        {country.map((type) => {
          return (
            <div style={{ display: "flex", padding: "10px" }}>
              <input type="checkbox" value={type} name="country" />
              <p style={{ paddingLeft: "5px" }}>{type}</p>
            </div>
          );
        })}
      </div>

      <div style={{ padding: "30px" }}>
        <h3>City</h3>
        {city.map((type) => {
          return (
            <div style={{ display: "flex", padding: "10px" }}>
              <input type="checkbox" value={type} name="city" />
              <p style={{ paddingLeft: "5px" }}>{type}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
