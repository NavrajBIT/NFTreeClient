import { useState, useEffect } from "react";
import filterimage from "./assets/Tune.svg";

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
  const status = ["In Progress", "Completed"];
  const cityList = [];
  const countryList = [];
  data.map((project) => {
    let city = project.city;
    let country = project.country;
    if (!cityList.includes(city)) cityList.push(city);
    if (!countryList.includes(country)) countryList.push(country);
    if (!investmentTypeList.includes(project.investment_type))
      project.investment_type != null &&
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

  const StatusFilter = ({ index }) => {
    const [isChecked, setIsChecked] = useState(true);
    useEffect(() => {
      filters.map((filter) => {
        if (filter.type === "status" && filter.value === index + 1) {
          setIsChecked(false);
        }
      });
    }, []);
    const applyFilter = () => {
      setFilters((prevFilters) => {
        let newFilters = [...prevFilters];
        let filtervalue = {
          type: "status",
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
        <label htmlFor={"type" + "-filter-" + index}>{status[index]}</label>
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
        left: "-20px",
        borderRadius: "0 10px 10px 10px",
        height: "fit-content",
      };

  return (
    <div
      className="sidebarcontainer"
      style={{
        top: "var(--nav-height-small)",
        ...mobileStyle,
        overflowY: "scroll",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--padding-light)",
          fontSize: "22px",
          fontWeight: "700",
          padding: "var(--padding-main)",
          borderBottom: "2px solid white",
          width: "100%",
        }}
      >
        {!isMobile && (
          <img
            src={filterimage}
            alt=""
            style={{
              height: "30px",
              width: "30px",
            }}
          />
        )}
        Filter
      </div>

      <div className="singlefiltercontainer">
        <div style={{ fontSize: "18px", fontWeight: "700" }}>Status</div>

        {status.map((type, index) => (
          <StatusFilter index={index} key={"type-filter-" + index} />
        ))}
      </div>

      <div className="singlefiltercontainer">
        <div style={{ fontSize: "18px", fontWeight: "700" }}>Project Type</div>
        {typefilterOptions.map((type, index) => (
          <TypeFilter index={index} key={"type-filter-" + index} />
        ))}
        <br />

        <div style={{ fontSize: "18px", fontWeight: "700" }}>
          Investment Type
        </div>

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
        <div style={{ fontSize: "18px", fontWeight: "700" }}>Country</div>
        {countryList.map((type, index) => (
          <Filter
            type={"country"}
            index={index}
            value={type}
            key={"type-filter-" + index}
          />
        ))}
        <br />
        <div style={{ fontSize: "18px", fontWeight: "700" }}>State</div>
        {cityList.map((type, index) => (
          <Filter
            type={"city"}
            index={index}
            value={type}
            key={"city-filter-" + index}
          />
        ))}
      </div>
      <div style={{marginBottom:"15vh"}}>
      </div>
    </div>
  );
};

export default Sidebar;
