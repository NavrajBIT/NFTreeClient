import {useState, useEffect} from "react";
import PropTypes from "prop-types";
import filterimage from "./assets/Tune.svg";

const Sidebar = ({filters, setFilters, data, isMobile}) => {
  // Reset filters when component mounts
  useEffect(() => {
    setFilters([]);
  }, []);

  const typefilterOptions = ["Monitoring", "Donation", "Investment"];
  const investmentTypeList = ["Carbon Credits"];
  const status = ["In Progress", "Completed"];
  const cityList = [];
  const countryList = [];
  data.map(project => {
    let city = project.city;
    let country = project.country;
    if (!cityList.includes(city)) cityList.push(city);
    if (!countryList.includes(country)) countryList.push(country);
  });

  const Filter = ({type, value, index}) => {
    const isFiltered = filters.some(
      filter => filter.type === type && filter.value === value
    );
    const [isChecked, setIsChecked] = useState(!isFiltered);

    const applyFilter = () => {
      setFilters(prevFilters => {
        if (isChecked) {
          // If currently checked, add to filters
          return [...prevFilters, {type, value}];
        } else {
          // If currently unchecked, remove from filters
          return prevFilters.filter(
            filter => !(filter.type === type && filter.value === value)
          );
        }
      });
      setIsChecked(!isChecked);
    };

    return (
      <div
        className='filterrow'
        key={index}>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={applyFilter}
          id={`${type}-${value}`}
        />
        <label htmlFor={`${type}-${value}`}>{value}</label>
      </div>
    );
  };

  Filter.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  };

  return (
    <div className={isMobile ? "mobilesidebar" : "sidebarcontainer"}>
      {!isMobile && (
        <div className='sidebarheader'>
          <img
            src={filterimage}
            alt=''
          />
          <div>Filters</div>
        </div>
      )}
      <div className='singlefiltercontainer'>
        <div>Project Type</div>
        {typefilterOptions.map((type, index) => (
          <Filter
            type='type'
            value={type}
            key={index}
          />
        ))}
      </div>
      <div className='singlefiltercontainer'>
        <div>Investment Type</div>
        {investmentTypeList.map((type, index) => (
          <Filter
            type='investment_type'
            value={type}
            key={index}
          />
        ))}
      </div>
      <div className='singlefiltercontainer'>
        <div>Status</div>
        {status.map((status, index) => (
          <Filter
            type='status'
            value={status}
            key={index}
          />
        ))}
      </div>
      <div className='singlefiltercontainer'>
        <div>City</div>
        {cityList.map((city, index) => (
          <Filter
            type='city'
            value={city}
            key={index}
          />
        ))}
      </div>
      <div className='singlefiltercontainer'>
        <div>Country</div>
        {countryList.map((country, index) => (
          <Filter
            type='country'
            value={country}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  setFilters: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired
    })
  ).isRequired,
  isMobile: PropTypes.bool
};

export default Sidebar;
