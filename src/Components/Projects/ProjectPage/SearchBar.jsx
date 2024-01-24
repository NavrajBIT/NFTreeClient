import Input from "../../Subcomponents/form/input";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState, useEffect } from "react";

const SearchBar = ({ setFilterData, data }) => {
  const filterOptions = [
    {
      label: "Monitoring",
      value: "monitoring",
    },
    {
      label: "Donation & Monitoring",
      value: "donating",
    },
    {
      label: "Carbon Credit",
      value: "carboncredit",
    },
  ];
  const cityList = [];
  const countryList = [];
  const cityFilters = [{ label: "All", value: "all" }];
  const countryFilters = [{ label: "All", value: "all" }];

  data.map((project) => {
    let city = project.city;
    let country = project.country;
    if (!cityList.includes(city)) cityList.push(city);
    if (!countryList.includes(country)) countryList.push(country);
  });

  cityList.map((city) => {
    cityFilters.push({ label: city, value: city });
  });
  countryList.map((country) => {
    countryFilters.push({ label: country, value: country });
  });

  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState(filterOptions[0]);
  const [cityfilterValue, setcityFilterValue] = useState(cityFilters[0]);
  const [countryfilterValue, setcountryFilterValue] = useState(
    countryFilters[0]
  );
  const [gridColumns, setGridColumns] = useState(
    window.innerWidth > 720 ? "5fr 3fr" : "none"
  );

  useEffect(() => {
    applyFilters();
    const handleResize = () => {
      setGridColumns(window.innerWidth > 720 ? "5fr 3fr" : "none");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [searchValue, filterValue, cityfilterValue, countryfilterValue]);

  const applyFilters = () => {
    let projects = [...data];
    let filteredProjects = [];

    projects.map((project) => {
      let isApplicable = true;
      if (
        searchValue !== "" &&
        !project.name.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        isApplicable = false;
      }

      if (
        filterValue.value === "monitoring" &&
        project.donation &&
        project.donation > 0
      ) {
        isApplicable = false;
      }
      if (
        filterValue.value === "donating" &&
        (!project.donation ||
          project.donation === 0 ||
          project.carbonCredit_enabled)
      )
        isApplicable = false;
      if (
        filterValue.value === "carboncredit" &&
        project.carbonCredit_enabled === false
      ) {
        isApplicable = false;
      }
      if (
        cityfilterValue.value !== "all" &&
        project.city !== cityfilterValue.value
      )
        isApplicable = false;
      if (
        countryfilterValue.value !== "all" &&
        project.country !== countryfilterValue.value
      )
        isApplicable = false;

      if (isApplicable && !filteredProjects.includes(project)) {
        filteredProjects.push(project);
      }
    });
    setFilterData(filteredProjects);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-light)",
      }}
    >
      <div>
        <Input
          inputData={{
            label: "",
            type: "text",
            icon: <SearchIcon />,
            value: searchValue,
            maxLength: 50,
            onChange: (e) => setSearchValue(e.target.value),
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "var(--padding-light)",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "33%" }}>
          <Input
            inputData={{
              label: "Type",
              type: "select",
              icon: <FilterAltIcon />,
              value: filterValue.label,
              select: true,
              maxLength: 50,
              options: filterOptions,
              onChange: (e) => setFilterValue(e),
            }}
          />
        </div>
        <div style={{ width: "33%" }}>
          <Input
            inputData={{
              label: "City",
              type: "select",
              icon: <FilterAltIcon />,
              value: cityfilterValue.label,
              select: true,
              maxLength: 50,
              options: cityFilters,
              onChange: (e) => setcityFilterValue(e),
            }}
          />
        </div>
        <div style={{ width: "33%" }}>
          <Input
            inputData={{
              label: "Country",
              type: "select",
              icon: <FilterAltIcon />,
              value: countryfilterValue.label,
              select: true,
              maxLength: 50,
              options: countryFilters,
              onChange: (e) => setcountryFilterValue(e),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
