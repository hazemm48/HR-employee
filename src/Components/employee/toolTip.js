import React from 'react';

function ToolTip({ data,display }) {
  let dataArr = [
    ['office', data.office],
    ['role', data.role],
    ['copied manager', data['direct Manager']],
    ['joining date', data['Start Date']],
    ['manager', data['direct Manager']],
  ];

  return (
    <div
      className="tooltip bs-tooltip-auto fade show position-absolute mt-2 p-1 opacity-100 bg-white"
      role="tooltip"
      data-popper-placement="bottom"
      style={{display}}
    >
      <div
        className="tooltip-arrow position-absolute"
        style={{
          right: '11px',
        }}
      ></div>
      <div className="tooltip-inner mw-100 bg-white">
        <div className="row d-flex justify-content-start g-1">
          {dataArr.map((e) => (
            <div className="col-6 col-sm-4 text-start lh-1" key={e[0]}>
              <p className="m-0 py-1">{e[0]}</p>
              <span className='text-dark'>{e[1]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToolTip;
