import React, { useState } from "react";
import NavBar from "../Components/navBar.js";
import SideBar from "../Components/sideBar.js";
import EmployeeCard from "../Components/employee/employeeCard.js";
import Search from "../Components/search.js";
import Form from "../Components/form/form.js";
import { data } from "../Components/employee/employeeData.js";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [employeeData, setEmployeeData] = useState(data);
  const [searchData, setSearchData] = useState();

  return (
    <main className="d-flex flex-wrap pe-2 col-12">
      <SideBar />
      <div className="col-10 col-md-11 main">
        <NavBar />
        <div className="main-content">
          <Search setShowForm={setShowForm} setSearchData={setSearchData} employeeData={employeeData}/>
          <div className="employees mt-5 row g-3">
            {(searchData || employeeData).map((e, i) => (
              <EmployeeCard data={e} key={i} setEmployeeData={setEmployeeData} employeeData={employeeData} id={i} />
            ))}
          </div>
        </div>
      </div>
      {showForm && (
        <Form setShowForm={setShowForm} setEmployeeData={setEmployeeData} employeesLength={employeeData.length} />
      )}
    </main>
  );
};

export default Home;
