import React from "react";

const UserHeader = () => {
  return (
    <div class="row">
      <div class="col-4">
        <div class="top-bar-item">
          <div class="top-bar-icon">
            <i class="flaticon-calendar"></i>
          </div>
          <div class="top-bar-text">
            <h3>Opening Hour</h3>
            <p>Mon - Fri, 8:00 - 9:00</p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="top-bar-item">
          <div class="top-bar-icon">
            <i class="flaticon-call"></i>
          </div>
          <div class="top-bar-text">
            <h3>Call Us</h3>
            <p>6263274848</p>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="top-bar-item">
          <div class="top-bar-icon">
            <i class="flaticon-send-mail"></i>
          </div>
          <div class="top-bar-text">
            <h3>Email Us</h3>
            <p>info@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
