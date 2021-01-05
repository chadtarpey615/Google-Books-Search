import React from "react";
import "./form.css";

export default function Form() {
    return (
        <div className="form">
            <form>
    <div className="form-group row">
      <div className="col-sm-10">
      </div>
    </div>
    <div className="form-group">
      <label for="exampleInputEmail1">Search by book</label>
      <input width="50" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter book title" />
      <button>Save
      </button>
    </div>

            </form>
        </div>
    )
}
