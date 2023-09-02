import "./ViewProperty.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { _webapiadmin } from "../BaseAPIurls";
import { Link } from "react-router-dom";

function ViewProperty() {
  const [cDetails, setCategoryDetails] = useState([]);

  useEffect(() => {
    axios.get(_webapiadmin + "addsubcategory").then((result) => {
      setCategoryDetails(result.data.cDetails);
    });
  }, []);

  return (
    <div id="about" class="about">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="about-box">
              <h2>View Rental Property</h2>
              <br />
              <center>
                <div id="catMain">
                  {cDetails.map((ele) => {
                    var image =
                      "/assets/uploads/categoryicons/" + ele.caticonname;
                    var path = "/user/viewsubcat/" + ele.catname;
                    return (
                      <Link to={path}>
                        <div className="catpart">
                          <br />
                          <img src={image} height="100" width="150" alt="pic" />
                          <br />
                          <b>{ele.catname}</b>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProperty;
