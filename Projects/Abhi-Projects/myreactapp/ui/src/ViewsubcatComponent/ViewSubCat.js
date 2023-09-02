import "./ViewSubCat.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { _webapiadmin } from "../BaseAPIurls";
import { Link } from "react-router-dom";

function ViewSubCat(props) {
  const [scDetails, setCategoryDetails] = useState([]);
  const [catnm, setCatName] = useState();
  const params = useParams();

  useEffect(() => {
    axios
      .get(_webapiadmin + "fetchsubcategory?catname=" + params.catnm)
      .then((result) => {
        setCategoryDetails(result.data.scDetails);
      });
  }, []);

  return (
    <div id="about" class="about">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="about-box">
              <h2>View Rental Property ---- {params.catnm}</h2>
              <br />
              <center>
                <div id="catMain">
                  {scDetails.map((ele) => {
                    var image =
                      "/assets/uploads/subcategoryicons/" + ele.subcaticonname;
                    // var path = "/user/viewsubcat/" + ele.catname;
                    return (
                      <Link to="">
                        <div className="catpart">
                          <br />
                          <img src={image} height="100" width="150" alt="pic" />
                          <br />
                          <b>{ele.subcatname}</b>
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

export default ViewSubCat;
