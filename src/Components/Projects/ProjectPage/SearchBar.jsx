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
      label: "Funding & Monitoring",
      value: "donating",
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

  useEffect(() => {
    applyFilters();
  }, [searchValue, filterValue, cityfilterValue, countryfilterValue]);

  const applyFilters = () => {
    let projects = [...data];
    let filteredProjects = [];

    projects.map((project) => {
      let isApplicable = true;
      if (
        searchValue !== "" &&
        !project.name.toLowerCase().includes(searchValue.toLowerCase())
      )
        isApplicable = false;
      if (
        filterValue.value === "monitoring" &&
        project.donation &&
        project.donation > 0
      )
        isApplicable = false;
      if (
        filterValue.value === "donating" &&
        (!project.donation || project.donation === 0)
      )
        isApplicable = false;

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

      if (isApplicable && !filteredProjects.includes(project))
        filteredProjects.push(project);
    });
    setFilterData(filteredProjects);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "5fr 1fr 1fr 1fr",
        gap: "var(--padding-light)",
      }}
    >
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
  );
};

export default SearchBar;
