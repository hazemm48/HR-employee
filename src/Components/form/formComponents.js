import React from "react";

const InputField = ({ label, type, size }) => {
  return (
    <div className={size}>
      <label className="form-label">{label}</label>
      <input type={type} className="form-control" name={label} required/>
    </div>
  );
};

const SelectField = ({ label, data, size }) => {
  return (
    <div className={size}>
      <label className="form-label">{label}</label>
      <select className="form-select" name={label} required>
        <option selected disabled value=''>- Choose -</option>
        {data.map((e) => (
          <option defaultValue={e} key={e}>{e}</option>
        ))}
      </select>
    </div>
  );
};

const FormHeader = ({ txt }) => {
  return (
    <div className="perInfo mb-4 p-0">
      <p className="mb-0">{txt}</p>
      <hr />
    </div>
  );
};

const ButtonField = ({ color, txt ,fun, type}) => {
  return (
    <button
      type={type}
      className="btn ms-2"
      style={{ backgroundColor: color, color: "white" }}
      onClick={fun}
    >
      {txt}
    </button>
  );
};

export { InputField, SelectField, FormHeader, ButtonField };
