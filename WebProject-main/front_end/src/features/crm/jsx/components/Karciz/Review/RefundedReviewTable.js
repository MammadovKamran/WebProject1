import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Image
import image04 from "./../../../../images/avatar/2.jpg";
import image02 from "./../../../../images/avatar/4.jpg";

const RefundedReviewTable = () => {
  const [data, setData] = useState(
    document.querySelectorAll("#example2_Review tbody tr")
  );
  const sort = 6;
  const activePag = useRef(0);
  const [test, settest] = useState(0);

  // Active data
  const chageData = (frist, sec) => {
    for (var i = 0; i < data.length; ++i) {
      if (i >= frist && i < sec) {
        data[i].classList.remove("d-none");
      } else {
        data[i].classList.add("d-none");
      }
    }
  };
  // use effect
  useEffect(() => {
    setData(document.querySelectorAll("#example2_Review tbody tr"));
    //chackboxFun();
  }, [test]);
  // Active pagginarion
  activePag.current === 0 && chageData(0, sort);
  // paggination
  let paggination = Array(Math.ceil(data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  // Active paggination & chage data
  const onClick = (i) => {
    activePag.current = i;
    chageData(activePag.current * sort, (activePag.current + 1) * sort);
    settest(i);
  };

  const chackbox = document.querySelectorAll(".sorting_1 input");
  const motherChackBox = document.querySelector(".sorting_asc input");
  // console.log(document.querySelectorAll(".sorting_1 input")[0].checked);
  const chackboxFun = (type) => {
    for (let i = 0; i < chackbox.length; i++) {
      const element = chackbox[i];
      if (type === "all") {
        if (motherChackBox.checked) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      } else {
        if (!element.checked) {
          motherChackBox.checked = false;
          break;
        } else {
          motherChackBox.checked = true;
        }
      }
    }
  };
  return (
    <div id="All" className="tab-pane">
      <div className="table-responsive fs-14">
        <div id="example2_Review" className="dataTables_wrapper no-footer">
          <table
            id="example2"
            className="table mb-4 dataTablesCard no-hover card-table fs-14 dataTable no-footer"
            role="grid"
            aria-describedby="example2_info"
          >
            <thead>
              <tr role="row">
                <th
                  className="sorting_asc"
                  tabindex="0"
                  aria-controls="example5"
                  rowspan="1"
                  colspan="1"
                  aria-sort="ascending"
                  aria-label="
							: activate to sort column descending"
                  
                >
                  <div className="checkbox mr-0 align-self-center">
                    <div className="custom-control custom-checkbox ">
                      <input
                        type="checkbox"
                        onClick={() => chackboxFun("all")}
                        className="custom-control-input"
                        id="checkAll"
                        required=""
                      />
                      <label
                        className="custom-control-label"
                        for="checkAll"
                      ></label>
                    </div>
                  </div>
                </th>
                <th
                 
                  className="sorting"
                  tabindex="0"
                  aria-controls="example5"
                  rowspan="1"
                  colspan="1"
                  aria-label="Customer: activate to sort column ascending"
                >
                  Customer
                </th>
                <th
                  className="d-none d-lg-inline-block sorting"
                  tabindex="0"
                  aria-controls="example5"
                  rowspan="1"
                  colspan="1"
                  aria-label="Event NAME: activate to sort column ascending"
                  
                >
                  Event NAME
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="example5"
                  rowspan="1"
                  colspan="1"
                  aria-label="Stars Review: activate to sort column ascending"
                  
                >
                  Stars Review
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="example5"
                  rowspan="1"
                  colspan="1"
                  aria-label="Action: activate to sort column ascending"
                  
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              <tr role="row" className="even">
                <td className="sorting_1">
                  <div className="checkbox mr-0 align-self-center">
                    <div className="custom-control custom-checkbox ">
                      <input
                        type="checkbox"
                        onClick={() => chackboxFun()}
                        className="custom-control-input"
                        id="customCheckBox23"
                        required=""
                      />
                      <label
                        className="custom-control-label"
                        for="customCheckBox23"
                      ></label>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="media align-items-center">
                    <img
                      className="img-fluid rounded mr-3 d-none d-xl-inline-block"
                      width="70"
                      src={image04}
                      alt="DexignZone"
                    />
                    <div className="media-body">
						<h4 className="font-w600 mb-1 wspace-no">Glee Smiley</h4>
						<span>Sunday, 24 July 2020 04:55 PM</span>
                    </div>
                  </div>
                </td>
                <td className="d-none d-lg-table-cell">
                  The Story of Danau Toba (Musical Drama)
                </td>
                <td>
                  <span className="star-review d-inline-block mb-2 fs-16 wspace-no">
                    <i className="fa fa-star fs-16 text-orange"></i>{" "}
                    <i className="fa fa-star fs-16 text-orange"></i>{" "}
                    <i className="fa fa-star fs-16 text-orange"></i>{" "}
                    <i className="fa fa-star fs-16 text-orange"></i>{" "}
                    <i className="fa fa-star fs-16 text-gray"></i>
                  </span>
                  <p className="mb-0 d-none d-xl-inline-block">
                    Karciz is one of the best vendors we've ever worked with.
                    Thanks for your wonderful, helpful service across the board.
                    It is greatly appreciated!
                  </p>
                </td>
                <td>
                  <div className="d-flex">
						<Link to="" className="btn btn-primary light btn-sm px-4">Publish</Link>
						<Link to="" className="btn btn-danger light  btn-sm ml-2 px-4">Delete</Link>
                  </div>
                </td>
              </tr>
              <tr role="row" className="odd">
                <td className="sorting_1">
                  <div className="checkbox mr-0 align-self-center">
                    <div className="custom-control custom-checkbox ">
                      <input
                        type="checkbox"
                        onClick={() => chackboxFun()}
                        className="custom-control-input"
                        id="customCheckBox211"
                        required=""
                      />
                      <label
                        className="custom-control-label"
                        for="customCheckBox211"
                      ></label>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="media align-items-center">
                    <img
                      className="img-fluid rounded mr-3 d-none d-xl-inline-block"
                      width="70"
                      src={image02}
                      alt="DexignZone"
                    />
                    <div className="media-body">
						<h4 className="font-w600 mb-1 wspace-no">Glee Smiley</h4>
						<span>Sunday, 24 July 2020 04:55 PM</span>
                    </div>
                  </div>
                </td>
                <td className="d-none d-lg-table-cell">
                  The Story of Danau Toba (Musical Drama)
                </td>
                <td>
                  <span className="star-review d-inline-block mb-2 fs-16 wspace-no">
                    <i className="fa fa-star fs-16 text-orange"></i>{" "}
                    <i className="fa fa-star fs-16 text-orange"></i>{" "}
                    <i className="fa fa-star fs-16 text-orange"></i>{" "}
                    <i className="fa fa-star fs-16 text-orange"></i>{" "}
                    <i className="fa fa-star fs-16 text-gray"></i>
                  </span>
                  <p className="mb-0 d-none d-xl-inline-block">
                    Karciz is one of the best vendors we've ever worked with.
                    Thanks for your wonderful, helpful service across the board.
                    It is greatly appreciated!
                  </p>
                </td>
                <td>
                  <div className="d-flex">
						<Link to="" className="btn btn-primary light btn-sm px-4">Publish</Link>
						<Link to="" className="btn btn-danger light  btn-sm ml-2 px-4">Delete</Link>
                  </div>
                </td>
              </tr>
             
            </tbody>
          </table>

          <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
            <div className="dataTables_info">
              Showing {activePag.current * sort + 1} to{" "}
              {data.length > (activePag.current + 1) * sort
                ? (activePag.current + 1) * sort
                : data.length}{" "}
              of {data.length} entries
            </div>
            <div
              className="dataTables_paginate paging_simple_numbers"
              id="example2_paginate"
            >
              <Link
                className="paginate_button previous disabled"
                to="/reviews"
                onClick={() =>
                  activePag.current > 0 && onClick(activePag.current - 1)
                }
              >
                Previous
              </Link>
              <span>
                {paggination.map((number, i) => (
                  <Link
                    key={i}
                    to="/reviews"
                    className={`paginate_button  ${
                      activePag.current === i ? "current" : ""
                    } `}
                    onClick={() => onClick(i)}
                  >
                    {number}
                  </Link>
                ))}
              </span>

              <Link
                className="paginate_button next"
                to="/reviews"
                onClick={() =>
                  activePag.current + 1 < paggination.length &&
                  onClick(activePag.current + 1)
                }
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundedReviewTable;
