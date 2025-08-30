import React from "react";
import PropTypes from "prop-types";

export default function Company({ company, jobTile, timeline }) {
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-medium md:text-[18px]">{company}</h1>
          <p className="md:text-[15px] text-[12px] text-end">{timeline}</p>
        </div>
        <h1 className="font-light text-[15px]">{jobTile}</h1>
      </div>
    </>
  );
}

Company.propTypes = {
  company: PropTypes.string,
  jobTile: PropTypes.string,
  timeline: PropTypes.string,
};
