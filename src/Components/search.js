import React from "react";

const Search = ({ setShowForm, setSearchData, employeeData }) => {
  const inputSearch = (e) => {
    let newEmployees = employeeData.filter((o) =>
      o.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchData(newEmployees);
  };

  return (
    <div className="search d-flex flex-nowrap row ">
      <div className="col-7 col-lg-11">
        <div className="input-group ">
          <span
            className="input-group-text bg-white border-0"
            id="basic-addon1"
          >
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "#23aaeb" }}
            />
          </span>
          <input
            type="text"
            className="form-control border-0"
            placeholder="Search"
            onChange={inputSearch}
          />
        </div>
      </div>
      <button
        className="btn btn-main btn-primary col-5 col-lg-1"
        onClick={() => setShowForm(true)}
      >
        <i class="fa-solid fa-plus me-3" />
        Add new
      </button>
    </div>
  );
};

export default Search;
