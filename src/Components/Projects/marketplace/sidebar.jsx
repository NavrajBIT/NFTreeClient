import { useState, useEffect } from "react";
import filterimage from "./assets/filter.png";

const Sidebar = ({ filters, setFilters, data, isMobile }) => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    window.scrollY >= 2 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const typefilterOptions = ["Monitoring", "Donation", "Investment"];
  const investmentTypeList = [];
  const cityList = [];
  const countryList = [];
  data.map((project) => {
    let city = project.city;
    let country = project.country;
    if (!cityList.includes(city)) cityList.push(city);
    if (!countryList.includes(country)) countryList.push(country);
    if (!investmentTypeList.includes(project.investment_type))
      investmentTypeList.push(project.investment_type);
  });

  const Filter = ({ type, value, index }) => {
    const [isChecked, setIsChecked] = useState(true);
    useEffect(() => {
      filters.map((filter) => {
        if (filter.type === type && filter.value === value) {
          setIsChecked(false);
        }
      });
    }, []);
    const applyFilter = () => {
      setFilters((prevFilters) => {
        let newFilters = [...prevFilters];
        let filtervalue = {
          type: type,
          value: value,
        };
        if (isChecked) {
          newFilters.push(filtervalue);
        } else {
          newFilters.splice(newFilters.indexOf(filtervalue), 1);
        }
        return newFilters;
      });
    };
    return (
      <div className="filterrow">
        <input
          type="checkbox"
          id={type + "-filter-" + index}
          checked={isChecked}
          onChange={applyFilter}
        />
        <label htmlFor={type + "-filter-" + index}>{value}</label>
      </div>
    );
  };
  const TypeFilter = ({ index }) => {
    const [isChecked, setIsChecked] = useState(true);
    useEffect(() => {
      filters.map((filter) => {
        if (filter.type === "type" && filter.value === index + 1) {
          setIsChecked(false);
        }
      });
    }, []);
    const applyFilter = () => {
      setFilters((prevFilters) => {
        let newFilters = [...prevFilters];
        let filtervalue = {
          type: "type",
          value: index + 1,
        };
        if (isChecked) {
          newFilters.push(filtervalue);
        } else {
          newFilters.splice(newFilters.indexOf(filtervalue), 1);
        }
        return newFilters;
      });
    };
    return (
      <div className="filterrow">
        <input
          type="checkbox"
          id={"type" + "-filter-" + index}
          checked={isChecked}
          onChange={applyFilter}
        />
        <label htmlFor={"type" + "-filter-" + index}>
          {typefilterOptions[index]}
        </label>
      </div>
    );
  };

  const mobileStyle = !isMobile
    ? {}
    : {
        display: "flex",
        position: "absolute",
        zIndex: 10,
        top: "0px",
        left: "0px",
        borderRadius: "0 10px 10px 10px",
        height: "fit-content",
      };

  return (
    <div
      className="sidebarcontainer"
      style={{
        top: scroll ? "var(--nav-height-small)" : "var(--nav-height)",
        ...mobileStyle,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--padding-light)",
          fontSize: "1.5rem",
          fontWeight: "700",
          padding: "var(--padding-main)",
          borderBottom: "2px solid white",
          width: "100%",
        }}
      >
        <img src={filterimage} alt="" />
        Filter
      </div>
      <div className="singlefiltercontainer">
        <div style={{ fontSize: "1.5rem" }}>Project Type</div>
        {typefilterOptions.map((type, index) => (
          <TypeFilter index={index} key={"type-filter-" + index} />
        ))}
        <br />
        <div style={{ fontSize: "1.5rem" }}>Investment Type</div>
        {investmentTypeList.map((type, index) => (
          <Filter
            type={"investment_type"}
            index={index}
            value={type}
            key={"investment_type-filter-" + index}
          />
        ))}
      </div>
      <div className="singlefiltercontainer">
        <div style={{ fontSize: "1.5rem" }}>Country</div>
        {countryList.map((type, index) => (
          <Filter
            type={"country"}
            index={index}
            value={type}
            key={"type-filter-" + index}
          />
        ))}
        <br />
        <div style={{ fontSize: "1.5rem" }}>State</div>
        {cityList.map((type, index) => (
          <Filter
            type={"city"}
            index={index}
            value={type}
            key={"city-filter-" + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
