import React from "react";
// import { Wrapper } from "./styles";
// import { P1 } from "component/typography";
// import { Button } from "react-bootstrap";

function index({ setSearchInput }) {
  return (
    <div className=" mb-0 flex justify-center flex-col text-center">
      <div className="my-4 d-flex justify-center">
        <img src="images/no_data.svg" alt="no-data" />
      </div>

      <p>Not Data Found</p>
      <div className="flex justify-center">
        <button
          className="bg-gradient-to-r from-gray-500 via-gray-800 to-gray-600 text-sm text-white py-1 px-3 rounded w-max"
          variant="secondary"
          onClick={() => setSearchInput("")}
        >
          Back
        </button>
      </div>

      <p>or try different keyword</p>
    </div>
  );
}

export default index;
