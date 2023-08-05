import React, { useEffect } from "react";
import manImg from "../../SiteAssets/images/male.jpeg";

const EmployeeCard = ({ data, setEmployeeData, employeeData, id }) => {
  let leftIcons = [
    "fa-solid fa-pen mx-1",
    "fa-regular fa-circle-pause mx-1",
    "fa-solid fa-trash mx-1",
  ];

  let rightIcons = [
    "fa-solid fa-envelope mx-1 p-1",
    "fa-solid fa-phone-flip mx-1 p-1",
    "fa-solid fa-exclamation mx-1 p-1",
  ];

  let attendanceColor = (e) => {
    let color = "";
    e == "present"
      ? (color = "green")
      : e == "absent"
      ? (color = "red")
      : e == "weekend"
      ? (color = "blue")
      : e == "holiday"
      ? (color = "light-blue")
      : (color = "grey");
    return color;
  };

  const deleteEmployee = (e) => {
    employeeData.splice(e.target.id,1)
    setEmployeeData([...employeeData]);
  };

  return (
    <div className="col-xxl-3 col-xl-4 col-md-6 col-12 ">
      <div className="card employee-card p-3">
        <div className="d-flex">
          <div className="col-3 pe-3 d-flex flex-column align-items-center justify-content-between">
            <img src={manImg} className="img-fluid rounded-circle" alt="..." />
            <div className="d-flex mt-3 justify-content-center left">
              {leftIcons.map((e, i) => (
                <i
                  className={e}
                  onClick={(e) => i == 2 && deleteEmployee(e)}
                  id={id}
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className="col-9 ps-3 border-start">
            <div className="card-body p-0">
              <h4 className="card-title mb-1">{data.name}</h4>
              <h6 className="card-text mb-0">{data.position}</h6>
              <p className="card-text mb-0">
                <small className="text-body-secondary">{data.department}</small>
              </p>
              <div className="d-flex justify-content-between flex-wrap mt-2">
                <label
                  className={`col-5 label-${attendanceColor(
                    data["attendance profile"]
                  )} rounded-1 px-1`}
                >
                  {data["attendance profile"]}
                </label>
                <div className="col-7 w-auto right">
                  {rightIcons.map((e,i) => (
                    <i className={e} key={i}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
