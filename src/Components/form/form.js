import React from 'react';
import {
  InputField,
  SelectField,
  FormHeader,
  ButtonField,
} from './formComponents.js';
import { formData } from './formData.js';
import { useDispatch } from 'react-redux';
import { addEmployee, showForm } from '../../features/employees.js';

function Form() {
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    const formEl = document.forms.form;
    const formData = new FormData(formEl);
    const data = {};
    for (const pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    dispatch(addEmployee(data));
    alert('employee added');
  };

  const btns = [
    /* [label,color,onClick] */
    ['cancel', '#ff6a6a', () => dispatch(showForm(false)), 'button'],
    ['save', '#23aaeb', () => {}, 'submit'],
  ];

  return (
    <div className="form p-5">
      <form
        className="row g-3 bg-white px-4 py-2"
        id="form"
        onSubmit={formSubmit}
      >
        <div className="fs-4 p-0 m-0 pb-2 head col-12">NEW EMPLOYEE</div>

        <FormHeader txt="Peronal Info" />
        <div className="row">
          <div className="col-md-4 form-img">
            <input
              type="file"
              accept="image/*"
              id="fileupload"
              className="d-none"
            />
            <button
              type="button"
              onClick={() => document.getElementById('fileupload').click()}
            >
              Drag image here
            </button>
          </div>
          <div className="col-md-8 row">
            {formData('personalInfo').map((e) => (
              <InputField label={e[0]} type={e[1]} size={e[2]} key={e[0]} />
            ))}
          </div>
        </div>

        <FormHeader txt="Office Info" />
        {formData('officeInfo').map((e, i) =>
          i == 3 ? (
            <InputField label={e[0]} type={e[1]} size={e[2]} key="role" />
          ) : (
            <SelectField label={e[0]} data={e[1]} size={e[2]} key={e[0]} />
          )
        )}

        <FormHeader txt="Work From Home" />
        <div className="col-12 m-0 px-0">
          <div className="form-check">
            <label className="form-check-label">
              Allow Employee To Work From Home
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              name="workHome"
            />
          </div>
        </div>
        <div className="col-12 border-top pt-2 d-flex justify-content-end">
          {btns.map((e) => (
            <ButtonField
              txt={e[0]}
              color={e[1]}
              fun={e[2]}
              type={e[3]}
              key={e[0]}
            />
          ))}
        </div>
      </form>
    </div>
  );
}

export default Form;
