import React, { useState } from "react";
import "./Style.css";

const FieldTask = () => {
  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <div class="container">
      <div class="row ">
        <div class="col-md-2"></div>
        <div class="col-md-8 formField">
          <form onSubmit={handleSubmit}>
            {formValues.map((element, index) => (
              <div className="form-inline" key={index}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  class=" mt-5"
                  value={element.name || ""}
                  onChange={(e) => handleChange(index, e)}
                />
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={element.email || ""}
                  onChange={(e) => handleChange(index, e)}
                />{" "}
                {index ? (
                  <span
                    class="glyphicon glyphicon-remove"
                    onClick={() => removeFormFields(index)}
                  ></span>
                ) : null}
              </div>
            ))}{" "}
            <div className="button-section">
              <button
                className="button add"
                type="button"
                onClick={() => addFormFields()}
              >
                Add
              </button>
              <button className="button submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  );
};

export default FieldTask;
