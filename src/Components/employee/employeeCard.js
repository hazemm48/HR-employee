import React, { useState } from 'react';
import manImg from '../../SiteAssets/images/male.jpeg';
import ToolTip from './toolTip.js';

function EmployeeCard({ data, setEmployeeData, employeeData, id }) {
  const [toolTipDisplay, setToolTipDisplay] = useState('none');

  const leftIcons = [
    'fa-solid fa-pen mx-1',
    'fa-regular fa-circle-pause mx-1',
    'fa-solid fa-trash mx-1',
  ];

  const rightIcons = [
    'fa-solid fa-envelope mx-1 p-1',
    'fa-solid fa-phone-flip mx-1 p-1',
    'fa-solid fa-exclamation mx-1 p-1',
  ];

  const attendanceColor = (e) => {
    let color = '';
    e == 'present'
      ? (color = 'green')
      : e == 'absent'
      ? (color = 'red')
      : e == 'weekend'
      ? (color = 'blue')
      : e == 'holiday'
      ? (color = 'light-blue')
      : (color = 'grey');
    return color;
  };

  const deleteEmployee = (e) => {
    employeeData.splice(e.target.id, 1);
    setEmployeeData([...employeeData]);
    setToolTipDisplay('none');
  };

  const showToolTip = () => {
    toolTipDisplay == 'block'
      ? setToolTipDisplay('none')
      : setToolTipDisplay('block');
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
                    data['attendance profile']
                  )} rounded-1 px-1`}
                >
                  {data['attendance profile']}
                </label>
                <div className="col-7 w-auto right">
                  {rightIcons.map((e, i) => (
                    <i
                      className={e + ' position-relative'}
                      key={i}
                      onClick={showToolTip}
                    >
                      {i == 2 && (
                        <ToolTip
                          data={data}
                          key={i}
                          display={i == 2 && toolTipDisplay}
                        />
                      )}
                    </i>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
