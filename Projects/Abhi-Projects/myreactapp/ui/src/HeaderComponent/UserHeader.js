import React from "react";

const UserHeader = () => {
  return (
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4"></div>
      <div class="col-4">
        <div class="top-bar-item">
          <div class="top-bar-icon">
            <i class="flaticon-send-mail"></i>
          </div>
          <div class="top-bar-text">
            <h3>Welcome User</h3>
            <p
              style={{
                color: "black",
                fontWeight: "bold",
                marginTop: "0px",
              }}
            >
              {/* {trackemail} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
