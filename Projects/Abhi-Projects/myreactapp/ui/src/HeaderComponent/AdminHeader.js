import React from 'react'

const AdminHeader = () => {
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
            <h3>Welcome Admin</h3>
            {/* <p style={{ color: "black", fontWeight: "bold" }}>{trackemail}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;