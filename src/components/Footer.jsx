import moment from "moment";
import React from "react";

const Footer = () => {
  return (
    <div>
      <h5 class="text-center">
        © {moment().format("YYYY")} Red Oak District. City of South Fulton.
      </h5>
    </div>
  );
};

export default Footer;
