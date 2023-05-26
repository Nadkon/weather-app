import React from "react";

export default function Form() {
  return (
    <form className="mb-2">
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            placeholder="Type a city name..."
            className="form-control"
            autoComplete="off"
          />
        </div>
        <div className="col-4">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );
}
