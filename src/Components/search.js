import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchEmployee, showForm } from "../features/employees.js";

function Search() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.value);

  const inputSearch = (e) => {
    const newEmployees = employees.filter((o) =>
      o.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    dispatch(searchEmployee(newEmployees));
  };

  return (
    <div className="search d-flex flex-nowrap row ">
      <div className="col-8 col-lg-11">
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
        className="btn btn-primary col-4 col-lg-1 p-0 px-1 fs-6"
        onClick={() => dispatch(showForm(true))}
      >
        <i className="fa-solid fa-plus me-2" />
        Add new
      </button>
    </div>
  );
}

export default Search;
