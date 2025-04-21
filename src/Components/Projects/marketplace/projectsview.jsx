import {useState} from "react";
import PropTypes from "prop-types";
import ProjectCard from "../../Subcomponents/projectCard/projectCard";
import SearchBar from "./SearchBar";
import {CreateButton} from "./SearchBar";
import filtericon from "./assets/filter.png";
import filterunselectedicon from "./assets/filterunselected.png";
import Sidebar from "./sidebar";

const Projectsview = ({filteredData, filters, setFilters, data, search, setSearch}) => {
  const [filterMenu, setFilterMenu] = useState(false);

  return (
    <div className='projectsviewcontainer'>
      <div className='projectsviewcontainerheading'>
        Welcome to BitBhoomi Sustainability Marketplace!!
      </div>
      <div className='searchbarcontainer'>
        <div
          className='filterIcon'
          onClick={() => setFilterMenu(!filterMenu)}>
          <img
            src={filterMenu ? filtericon : filterunselectedicon}
            alt='filter'
          />
        </div>
        <SearchBar
          searchValue={search}
          setSearchValue={setSearch}
        />
        <CreateButton />
      </div>
      <Sidebar
        filters={filters}
        setFilters={setFilters}
        data={data}
        isMobile={false}
      />
      {filterMenu && (
        <Sidebar
          filters={filters}
          setFilters={setFilters}
          data={data}
          isMobile={true}
        />
      )}
      <div className='marketplaceprojectscontainer'>
        {filteredData.map((project, index) => (
          <ProjectCard
            project={project}
            key={"project-" + index}
          />
        ))}
      </div>
    </div>
  );
};

Projectsview.propTypes = {
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired
};

export default Projectsview;
