import React, { useState } from "react";
import "./Style.css";

const FieldTask = () => {
  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = (e) => {
    console.log(formValues.length);
    if (formValues.length < 5) {
      setFormValues([...formValues, { name: "", email: "" }]);
    } else {
      console.log("formdata not be more");
    }
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    if (i < 5) {
      setFormValues(newFormValues);
    }
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    localStorage.setItem("formValues", JSON.stringify(formValues));
    // formValues.forEach((items) => {
    //   for (let key in items) {
    //     localStorage.setItem(key, items[key]);
    //     console.log(key + " --> " + items[key]);
    //   }
    // });
  };

  return (
    <div class="container">
      <div class="row ">
        <div class="col-md-2"></div>
        <div class="col-md-8 formField">
          <form onSubmit={handleSubmit}>
            {formValues.map((element, index) =>
              index < 5 ? (
                <div className="form-inline" key={index}>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    class=" mt-5"
                    value={element.name || ""}
                    onChange={(e) => handleChange(index, e)}
                  />
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter email"
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
              ) : (
                ""
              )
            )}{" "}
            <div className="button-section">
              <button
                className="button add"
                type="button"
                onClick={(e) => addFormFields(e)}
              >
                Add Field
              </button>
              &nbsp;
              <button className="button submit" type="submit">
                Submit Form
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
