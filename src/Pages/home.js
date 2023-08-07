import React from 'react';
import NavBar from '../Components/navBar.js';
import SideBar from '../Components/sideBar.js';
import EmployeeCard from '../Components/employee/employeeCard.js';
import Search from '../Components/search.js';
import Form from '../Components/form/form.js';
import { useSelector } from 'react-redux';

function Home() {
  const employees = useSelector((state) => state.employees.value);
  const searchEmployee = useSelector((state) => state.employees.searchData);
  const showForm = useSelector((state) => state.employees.showForm);

  return (
    <main className="d-flex flex-wrap pe-2 col-12">
      <SideBar />
      <div className="col-10 col-md-11 main">
        <NavBar />
        <div className="main-content p-4">
          <Search />
          <div className="employees mt-5 row g-3">
            {(searchEmployee || employees).map((e, i) => (
              <EmployeeCard data={e} key={i} id={i} />
            ))}
          </div>
        </div>
      </div>
      {showForm && <Form />}
    </main>
  );
}
export default Home;
