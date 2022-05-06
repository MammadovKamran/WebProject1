import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import { Dropdown, Modal } from "react-bootstrap";
import swal from "sweetalert";
import { addTodo, deleteTodo } from "../../../store/actions/index";
// Images
import user from "./../../../images/big/img4.jpg";

// to get the data from localstorage
const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const PostPage = () => {
  // This is Model function
  const [addContact, setAddContact] = useState(false);

  // add, delet item and update data thap...

  const [inputData, setInputData] = useState("");
  const [inputData2, setInputData2] = useState("");
  const [inputData3, setInputData3] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  //const objectURL = URL.createObjectURL(user);
  const addItem = (e) => {
    e.preventDefault();
    if (!inputData) {
      alert("please fill the data");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return {
              ...elem,
              name: inputData,
              occupat: inputData2,
              dline: inputData3,
            };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setInputData("");
      setInputData2("");
      setInputData3("");
      setFile("");
      setIsEditItem(null);
      setAddContact(false);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
        occupat: inputData2,
        dline: inputData3,
      };
      setItems([...items, allInputData]);
      setInputData("");
      setInputData2("");
      setInputData3("");
      setFile("");
      setAddContact(false);
    }
  };

  // edit items
  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });

    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setInputData2(newEditItem.occupat);
    setInputData3(newEditItem.dline);
    setIsEditItem(id);
    setAddContact(true);
  };

  // delete the item
  const deleteItem = (index) => {
    const updateditems = items.filter((elem) => {
      return index != elem.id;
    });
    setItems(updateditems);
  };

  //For Image upload in ListBlog
  const [file, setFile] = React.useState("");
  console.log(file);
  const fileHandler = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem("lists", json);
  }, [items]);

  return (
    <>
      <div className="page-titles">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active">
            <Link to={"#"}>Müştəri</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={"#"}>Müştəri siyahısı</Link>
          </li>
        </ol>
      </div>
      <div className="row mb-5 align-items-center">
        <div className="col-lg-3 mb-4 mb-lg-0">
          <Link
            to="#"
            onClick={() => setAddContact(true)}
            className="btn btn-primary light  btn-lg btn-block rounded "
          >
            +New Customer
          </Link>
        </div>
        {/* <!-- Modal --> */}
        <Modal className="modal fade" show={addContact} onHide={setAddContact}>
          <div className="" role="document">
            <div className="">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title fs-20">Kontakt əlavə edin</h4>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setAddContact(false)}
                    data-dismiss="modal"
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <i
                    className="flaticon-cancel-12 close"
                    data-dismiss="modal"
                  ></i>
                  <div className="add-contact-box">
                    <div className="add-contact-content">
                      <div className="form-group">
                        <label className="text-black font-w500">
                          Son tarix
                        </label>
                        <div className="contact-name">
                          <input
                            type="text"
                            id="c-name"
                            className="form-control"
                            autocomplete="off"
                            value={inputData3}
                            onChange={(event) =>
                              setInputData3(event.target.value)
                            }
                            placeholder="date"
                          />
                          <span className="validation-text"></span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="text-black font-w500">Müştəri</label>
                        <div className="contact-occupation">
                          <input
                            type="text"
                            id="c-occupation"
                            autocomplete="off"
                            value={inputData}
                            onChange={(event) =>
                              setInputData(event.target.value)
                            }
                            className="form-control"
                            placeholder="name"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="text-black font-w500">İşğal</label>
                        <div className="contact-occupation">
                          <input
                            type="text"
                            id="c-occupation"
                            autocomplete="off"
                            value={inputData2}
                            onChange={(event) =>
                              setInputData2(event.target.value)
                            }
                            className="form-control"
                            placeholder="Occupation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  {toggleSubmit ? (
                    <button
                      id="btn-add"
                      className="btn btn-primary"
                      onClick={addItem}
                    >
                      Əlavə et
                    </button>
                  ) : (
                    <button
                      type=""
                      id="btn-edit"
                      className="float-left btn btn-primary"
                      onClick={addItem}
                    >
                      Yadda saxla
                    </button>
                  )}

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => setAddContact(false)}
                  >
                    {" "}
                    <i className="flaticon-delete-1"></i> İmtina etmək
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
        <div className="col-lg-9">
          <div className="card m-0 ">
            <div className="card-body py-3 py-md-2">
              <div className="row align-items-center">
                <div className="col-md-5 mb-3 mb-md-0">
                  <div className="media align-items-end">
                    <span className="mr-2 mb-1">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M21 24H3C2.73478 24 2.48043 23.8946 2.29289 23.7071C2.10536 23.5196 2 23.2652 2 23V22.008C2.00287 20.4622 2.52021 18.9613 3.47044 17.742C4.42066 16.5227 5.74971 15.6544 7.248 15.274C7.46045 15.2219 7.64959 15.1008 7.78571 14.9296C7.92182 14.7583 7.9972 14.5467 8 14.328V13.322L6.883 12.206C6.6032 11.9313 6.38099 11.6036 6.22937 11.2419C6.07776 10.8803 5.99978 10.4921 6 10.1V5.96201C6.01833 4.41693 6.62821 2.93765 7.70414 1.82861C8.78007 0.719572 10.2402 0.0651427 11.784 5.16174e-06C12.5992 -0.00104609 13.4067 0.158488 14.1603 0.469498C14.9139 0.780509 15.5989 1.2369 16.1761 1.81263C16.7533 2.38835 17.2114 3.07213 17.5244 3.82491C17.8373 4.5777 17.999 5.38476 18 6.20001V10.1C17.9997 10.4949 17.9204 10.8857 17.7666 11.2495C17.6129 11.6132 17.388 11.9426 17.105 12.218L16 13.322V14.328C16.0029 14.5469 16.0784 14.7586 16.2147 14.9298C16.351 15.1011 16.5404 15.2221 16.753 15.274C18.251 15.6548 19.5797 16.5232 20.5298 17.7424C21.4798 18.9617 21.997 20.4624 22 22.008V23C22 23.2652 21.8946 23.5196 21.7071 23.7071C21.5196 23.8946 21.2652 24 21 24ZM4 22H20C19.9954 20.8996 19.6249 19.8319 18.9469 18.9651C18.2689 18.0983 17.3219 17.4816 16.255 17.212C15.6125 17.0494 15.0423 16.6779 14.6341 16.1558C14.2259 15.6337 14.0028 14.9907 14 14.328V12.908C14.0001 12.6428 14.1055 12.3885 14.293 12.201L15.703 10.792C15.7965 10.7026 15.8711 10.5952 15.9221 10.4763C15.9731 10.3574 15.9996 10.2294 16 10.1V6.20001C16.0017 5.09492 15.5671 4.03383 14.7907 3.24737C14.0144 2.46092 12.959 2.01265 11.854 2.00001C10.8264 2.04117 9.85379 2.47507 9.1367 3.21225C8.41962 3.94943 8.01275 4.93367 8 5.96201V10.1C7.99979 10.2266 8.0249 10.352 8.07384 10.4688C8.12278 10.5856 8.19458 10.6914 8.285 10.78L9.707 12.2C9.89455 12.3875 9.99994 12.6418 10 12.907V14.327C9.99724 14.9896 9.77432 15.6325 9.3663 16.1545C8.95827 16.6766 8.3883 17.0482 7.746 17.211C6.67872 17.4804 5.73137 18.0972 5.05318 18.9642C4.37498 19.8313 4.00447 20.8993 4 22Z"
                            fill="#fff"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="media-body ml-1">
                      <p className="mb-1 fs-14">Ümumi Müştəri</p>
                      <h3 className="mb-0 font-w600 fs-20">129.000 Şəxs</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 text-md-right">
                  <Link
                    to={"#"}
                    className="btn btn-outline-primary rounded btn-sm px-4"
                  >
                    Aktiv
                  </Link>
                  <Link
                    to={"#"}
                    className="btn btn-secondary rounded ml-2 btn-sm px-4"
                  >
                    Redaktə et
                  </Link>
                  <Link
                    to={"#"}
                    className="btn btn-danger rounded ml-2 btn-sm px-4"
                  >
                    Sil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* {items.map((elem) => {
          return (
            <div
              className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6"
              key={elem.id}
            >
              <div className="card project-boxed">
                <div className="img-bx"></div>
                <div className="card-header align-items-start">
                  <div>
                    <p className="fs-14 mb-2 text-primary">#{elem.id}</p>
                    <h6 className="fs-18 font-w500 mb-3">
                      <a
                        href="javascript:void(0);"
                        className="text-black user-name"
                      >
                        Build Branding Persona for Etza
                      </a>
                    </h6>
                    <div className="text-dark fs-14 text-nowrap">
                      <i
                        className="fa fa-calendar-o mr-3"
                        aria-hidden="true"
                      ></i>
                      Sentyabr, 2020 tarixində yaradılmışdır
                    </div>
                  </div>
                  <Dropdown className="">
                    <Dropdown.Toggle
                      variant=""
                      as="div"
                      className="btn-link i-false"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      alignRight={true}
                      className="dropdown-menu-right"
                    >
                      <Dropdown.Item onClick={() => editItem(elem.id)}>
                        Redaktə et
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="text-danger"
                        onClick={() => deleteItem(elem.id)}
                      >
                        Sil
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body p-0 pb-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <span className="mb-0 title">Son tarix</span> :
                      <span className="text-black ml-2">{elem.dline}</span>
                    </li>
                    <li className="list-group-item">
                      <span className="mb-0 title">Müştəri adı</span> :
                      <span className="text-black ml-2">{elem.name}</span>
                    </li>
                    <li className="list-group-item">
                      <span className="mb-0 title">İşğal</span> :
                      <span className="text-black desc-text ml-2">
                        {elem.occupat}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </>
  );
};

export default PostPage;
