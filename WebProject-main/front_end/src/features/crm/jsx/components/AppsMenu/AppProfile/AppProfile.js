import React, { Fragment, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
//** Import Image */
import profile01 from "../../../../images/profile/1.jpg";
import profile02 from "../../../../images/profile/2.jpg";
import profile03 from "../../../../images/profile/3.jpg";
import profile04 from "../../../../images/profile/4.jpg";
import profile05 from "../../../../images/profile/5.jpg";
import profile06 from "../../../../images/profile/6.jpg";
import profile07 from "../../../../images/profile/7.jpg";
import profile08 from "../../../../images/profile/8.jpg";
import profile09 from "../../../../images/profile/9.jpg";
import profile from "../../../../images/profile/profile.png";
import PageTitle from "../../../layouts/PageTitle";

const AppProfile = () => {
  const [activeToggle, setActiveToggle] = useState("posts");
  const [sendMessage, setSendMessage] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const [linkModal, setLinkModal] = useState(false);

  const [replayModal, setReplayModal] = useState(false);

  const [selectedRegion, setSelectedRegion] = useState("");

  const regions = [
    { name: "Binəqədi", id: 1 },
    { name: "Xətai", id: 2 },
    { name: "Xəzər", id: 3 },
    { name: "Qaradağ", id: 4 },
    { name: "Nərimanov", id: 5 },
    { name: "Nəsimi", id: 6 },
    { name: "Nizami", id: 7 },
    { name: "Pirallahı", id: 8 },
    { name: "Sabunçu", id: 9 },
    { name: "Səbail", id: 10 },
    { name: "Suraxanı", id: 11 },
    { name: "Yasamal", id: 1 }
  ].sort();

  const options = {
    settings: {
      overlayColor: "#000000"
    }
  };
  return (
    <Fragment>
      <PageTitle activeMenu="Profile" motherMenu="App" />

      <div className="row">
        <div className="col-lg-12">
          <div className="profile card card-body px-3 pt-3 pb-0">
            <div className="profile-head">
              <div className="photo-content">
                <div className="cover-photo" />
              </div>
              <div className="profile-info">
                <div className="profile-photo">
                  <img
                    src={profile}
                    className="img-fluid rounded-circle"
                    alt="profile"
                  />
                </div>
                <div className="profile-details">
                  <div className="profile-name px-3 pt-2">
                    <h4 className="text-primary mb-0">TWC Əməkdaşı</h4>
                    <p>UX / UI Designer</p>
                  </div>
                  <div className="profile-email px-2 pt-2">
                    <h4 className="text-muted mb-0">info@twc.az</h4>
                    <p>Email</p>
                  </div>
                  <Dropdown className="dropdown ml-auto">
                    <Dropdown.Toggle
                      variant="primary"
                      className="btn btn-primary light sharp i-false"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        //    xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="#000000" cx="5" cy="12" r="2" />
                          <circle fill="#000000" cx="12" cy="12" r="2" />
                          <circle fill="#000000" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-user-circle text-primary mr-2" />
                        Hesabı görüntülə
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-users text-primary mr-2" />
                        Yaxın dostlara əlavə et
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-plus text-primary mr-2" />
                        Qrupa əlavə et
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-ban text-primary mr-2" />
                        Block
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="profile-statistics">
                    <div className="text-center">
                      <div className="row">
                        <div className="col">
                          <h3 className="m-b-0">0</h3>
                          <span>İzləyənlər</span>
                        </div>
                        <div className="col">
                          <h3 className="m-b-0">0</h3> <span>İzləyicilər</span>
                        </div>
                        <div className="col">
                          <h3 className="m-b-0">0</h3> <span>Görüntülənmə</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link
                          to="/post-details"
                          className="btn btn-primary mb-1 mr-1"
                        >
                          İzlə
                        </Link>
                        <Button
                          as="a"
                          href="#"
                          className="btn btn-primary mb-1 ml-1"
                          onClick={() => setSendMessage(true)}
                        >
                          Mesaj Göndər
                        </Button>
                      </div>
                    </div>
                    {/* send Modal */}
                    <Modal className="modal fade" show={sendMessage}>
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Mesaj göndər</h5>
                          <Button
                            variant=""
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            onClick={() => setSendMessage(false)}
                          >
                            <span>×</span>
                          </Button>
                        </div>
                        <div className="modal-body">
                          <form
                            className="comment-form"
                            onSubmit={e => {
                              e.preventDefault();
                              setSendMessage(false);
                            }}
                          >
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label
                                    htmlFor="author"
                                    className="text-black font-w600"
                                  >
                                    {" "}Ad <span className="required">*</span>{" "}
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="Author"
                                    placeholder="Müəllif"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label
                                    htmlFor="email"
                                    className="text-black font-w600"
                                  >
                                    {" "}Email{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    name="Email"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label
                                    htmlFor="comment"
                                    className="text-black font-w600"
                                  >
                                    Rəy
                                  </label>
                                  <textarea
                                    rows={8}
                                    className="form-control"
                                    name="comment"
                                    placeholder="Rəy"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <input
                                    type="submit"
                                    value="Rəy yaz"
                                    className="submit btn btn-primary"
                                    name="submit"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h5 className="text-black">Bu günün əsas məqamları</h5>
                </div>
                {/* <div className="card-body pt-3">
                                    <div className="profile-blog ">
                                        <img
                                            src={profile01}
                                            alt="profile"
                                            className="img-fluid  mb-4 w-100"
                                        />
                                        <Link to="/post-details">
                                            {' '}
                                            <h4>
                                                Darwin Creative Agency Theme
                                            </h4>{' '}
                                        </Link>
                                        <p className="mb-0">
                                            A small river named Duden flows by
                                            their place and supplies it with the
                                            necessary regelialia. It is a
                                            paradisematic country, in which
                                            roasted parts of sentences fly into
                                            your mouth.
                                        </p>
                                    </div>
                                </div> */}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h5 className="text-black ">Maraqlı</h5>
                </div>
                {/* <div className="card-body pt-3">
                                    <div className="profile-interest ">
                                        <SRLWrapper options={options}>
                                            <div className="row sp4">
                                                <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                                                    <a
                                                        href={profile04}
                                                        className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col"
                                                    >
                                                        <img
                                                            src={profile04}
                                                            alt="profile"
                                                            className="img-fluid"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </SRLWrapper>
                                    </div>
                                </div> */}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h5 className="text-black">Ən Son Xəbərlərimiz</h5>
                </div>
                {/* <div className="card-body pt-3">
                                    <div className="profile-news">
                                        <div className="media pt-3 ">
                                            <img
                                                src={profile07}
                                                alt=""
                                                className="mr-3 rounded"
                                                width={75}
                                            />
                                            <div className="media-body">
                                                <h5 className="m-b-5">
                                                    <Link
                                                        to="/post-details"
                                                        className="text-black"
                                                    >
                                                        Collection of textile
                                                        samples
                                                    </Link>
                                                </h5>
                                                <p className="mb-0">
                                                    I shared this on my fb wall
                                                    a few months back, and I
                                                    thought.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <div className="profile-tab">
                <div className="custom-tab-1">
                  <ul className="nav nav-tabs">
                    <li
                      className="nav-item"
                      onClick={() => setActiveToggle("posts")}
                    >
                      <Link
                        to="#my-posts"
                        data-toggle="tab"
                        className={`nav-link ${activeToggle === "posts"
                          ? "active show"
                          : ""}`}
                      >
                        Postlar
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => setActiveToggle("aboutMe")}
                    >
                      <Link
                        to="#about-me"
                        data-toggle="tab"
                        className={`nav-link ${activeToggle === "aboutMe"
                          ? "active show"
                          : ""}`}
                      >
                        Haqqımda
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#profile-settings"
                        data-toggle="tab"
                        onClick={() => setActiveToggle("setting")}
                        className={`nav-link ${activeToggle === "setting"
                          ? "active show"
                          : ""}`}
                      >
                        Qurğular
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      id="my-posts"
                      className={`tab-pane fade ${activeToggle === "posts"
                        ? "active show"
                        : ""}`}
                    >
                      <div className="my-post-content pt-3">
                        <div className="post-input">
                          <textarea
                            name="textarea"
                            id="textarea"
                            cols={30}
                            rows={5}
                            className="form-control bg-transparent"
                            placeholder="Zəhmət olmasa istədiyinizi yazın...."
                            defaultValue={""}
                          />
                          <Link
                            to="/app-profile"
                            className="btn btn-primary light px-3 mr-1"
                            data-toggle="modal"
                            data-target="#linkModal"
                            onClick={() => setLinkModal(true)}
                          >
                            <i className="fa fa-link m-0" />{" "}
                          </Link>
                          {/* Modal */}
                          <Modal
                            show={linkModal}
                            onHide={() => setLinkModal(false)}
                            className="modal fade post-input"
                            id="linkModal"
                            aria-hidden="true"
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">
                                  Sosial media linkləri
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  onClick={() => setLinkModal(false)}
                                >
                                  <span>×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <Link
                                  className="btn-social mr-1 facebook"
                                  to="/app-profile"
                                >
                                  <i className="fa fa-facebook" />
                                </Link>
                                <Link
                                  className="btn-social mr-1 google-plus"
                                  to="/app-profile"
                                >
                                  {" "}<i className="fa fa-google-plus" />
                                </Link>
                                <Link
                                  className="btn-social mr-1 linkedin"
                                  to="/app-profile"
                                >
                                  <i className="fa fa-linkedin" />
                                </Link>
                                <Link
                                  className="btn-social mr-1 instagram"
                                  to="/app-profile"
                                >
                                  {" "}<i className="fa fa-instagram" />
                                </Link>
                                <Link
                                  className="btn-social mr-1 twitter"
                                  to="/app-profile"
                                >
                                  <i className="fa fa-twitter" />
                                </Link>
                                <Link
                                  className="btn-social mr-1 youtube"
                                  to="/app-profile"
                                >
                                  <i className="fa fa-youtube" />
                                </Link>
                                <Link
                                  className="btn-social whatsapp"
                                  to="/app-profile"
                                >
                                  <i className="fa fa-whatsapp" />
                                </Link>
                              </div>
                            </div>
                          </Modal>
                          <Link
                            to="/app-profile"
                            className="btn btn-primary light px-3 mr-1"
                            data-toggle="modal"
                            data-target="#cameraModal"
                            onClick={() => setCameraModal(true)}
                          >
                            <i className="fa fa-camera m-0" />{" "}
                          </Link>
                          {/* Modal */}
                          <Modal
                            show={cameraModal}
                            onHide={() => setCameraModal(false)}
                            className="modal fade"
                            id="cameraModal"
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">
                                  Şəkil əlavə edin
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  onClick={() => setCameraModal(false)}
                                >
                                  <span>×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <div className="input-group mb-3">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text">
                                      Yüklə
                                    </span>
                                  </div>
                                  <div className="custom-file">
                                    <input
                                      type="file"
                                      className="custom-file-input"
                                    />
                                    <label className="custom-file-label">
                                      File seç
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Modal>
                          <Link
                            to="/app-profile"
                            className="btn btn-primary ml-1"
                            data-toggle="modal"
                            data-target="#postModal"
                            onClick={() => setPostModal(true)}
                          >
                            Post
                          </Link>
                          {/* Modal */}
                          <Modal
                            show={postModal}
                            onHide={() => setPostModal(false)}
                            className="modal fade"
                            id="postModal"
                          >
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Post</h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  onClick={() => setPostModal(false)}
                                >
                                  <span>×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <textarea
                                  name="textarea"
                                  id="textarea"
                                  cols={30}
                                  rows={5}
                                  className="form-control bg-transparent"
                                  placeholder="Zəhmət olmasa istədiyinizi yazın...."
                                  defaultValue={""}
                                />
                                <Link
                                  className="btn btn-primary btn-rounded mt-1"
                                  to="/app-profile"
                                >
                                  Post
                                </Link>
                              </div>
                            </div>
                          </Modal>
                        </div>

                        <div className="profile-uoloaded-post pb-3">
                          <img
                            src={profile08}
                            alt=""
                            className="img-fluid  w-100"
                          />
                          <Link className="post-title" to="/post-details">
                            <h3 className="text-black">
                              Komanda üzvlərimə minnətdaram!
                            </h3>
                          </Link>
                          <p>
                            Bir təsisçi olaraq ən əsasıda komanda yoldaşınız
                            olaraq bu mühiti sizin kimi komanda üzvləri ilə
                            bölüşdüyüm üçün çox məmnunam daim birlikdə
                            zirvələrdə TWC!
                          </p>
                          <button className="btn btn-primary mr-2">
                            <span className="mr-2">
                              <i className="fa fa-heart" />
                            </span>
                            Bəyən
                          </button>
                          <button
                            className="btn btn-secondary"
                            onClick={() => setReplayModal(true)}
                          >
                            <span className="mr-2">
                              {" "}<i className="fa fa-reply" />
                            </span>
                            Cavab verin
                          </button>
                        </div>
                        {/* Modal */}
                        <Modal
                          show={replayModal}
                          onHide={() => setReplayModal(false)}
                          className="modal fade"
                          id="replyModal"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Cavab Göndər</h5>
                              <button
                                type="button"
                                className="close"
                                onClick={() => setReplayModal(false)}
                              >
                                <span>&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <textarea className="form-control" rows="4">
                                  Mesaj
                                </textarea>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-danger light"
                                onClick={() => setReplayModal(false)}
                              >
                                Bağla
                              </button>
                              <button type="button" className="btn btn-primary">
                                Cavab verin
                              </button>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </div>
                    <div
                      id="about-me"
                      className={`tab-pane fade ${activeToggle === "aboutMe"
                        ? "active show"
                        : ""}`}
                    >
                      <div className="profile-about-me">
                        <div className="pt-4 border-bottom-1 pb-3">
                          <h4 className="text-primary">Haqqımda</h4>
                          {/* <p className="mb-2">
                                                        A wonderful serenity has
                                                        taken possession of my
                                                        entire soul, like these
                                                        sweet mornings of spring
                                                        which I enjoy with my
                                                        whole heart. I am alone,
                                                        and feel the charm of
                                                        existence was created
                                                        for the bliss of souls
                                                        like mine.I am so happy,
                                                        my dear friend, so
                                                        absorbed in the
                                                        exquisite sense of mere
                                                        tranquil existence, that
                                                        I neglect my talents.
                                                    </p>
                                                    <p>
                                                        A collection of textile
                                                        samples lay spread out
                                                        on the table - Samsa was
                                                        a travelling salesman -
                                                        and above it there hung
                                                        a picture that he had
                                                        recently cut out of an
                                                        illustrated magazine and
                                                        housed in a nice, gilded
                                                        frame.
                                                    </p> */}
                        </div>
                      </div>
                      <div className="profile-skills mb-5">
                        <h4 className="text-primary mb-2">Bacarıqlar</h4>

                        {/* <Link
                                                    to="/app-profile"
                                                    className="btn btn-primary light btn-xs mb-1 mr-1"
                                                >
                                                    Crypto
                                                </Link> */}
                      </div>
                      <div className="profile-lang  mb-5">
                        <h4 className="text-primary mb-2">Dil</h4>
                        <Link
                          to="/app-profile"
                          className="text-muted pr-3 f-s-16"
                        >
                          <i className="flag-icon flag-icon-us" />
                          İngilis
                        </Link>
                      </div>
                      <div className="profile-personal-info">
                        <h4 className="text-primary mb-4">Şəxsi məlumatlar</h4>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              {" "}Ad
                              <span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>TWC Əməkdaşı</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              Email
                              <span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>info@twc.az</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              {" "}İş rejimi
                              <span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>Full Time</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              Yaş
                              <span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>27</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              {" "}Lokasiya
                              <span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>Live location</span>
                          </div>
                        </div>
                        <div className="row mb-2">
                          <div className="col-3">
                            <h5 className="f-w-500">
                              Təcrübə/il
                              <span className="pull-right">:</span>
                            </h5>
                          </div>
                          <div className="col-9">
                            <span>07 il təcrübə</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="profile-settings"
                      className={`tab-pane fade ${activeToggle === "setting"
                        ? "active show"
                        : ""}`}
                    >
                      <div className="pt-3">
                        <div className="settings-form">
                          <h4 className="text-primary">Hesab Qurğuları</h4>
                          <form onSubmit={e => e.preventDefault()}>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label>Email</label>
                                <input
                                  type="email"
                                  placeholder="Email"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label>Şifrə</label>
                                <input
                                  type="password"
                                  placeholder="Şifrə"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Adres</label>
                              <input
                                type="text"
                                placeholder="Şəhər/Rayon/Küçə"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group">
                              <label>Adres 2</label>
                              <input
                                type="text"
                                placeholder="Bina, Mərtəbə, və ya Mənzil"
                                className="form-control"
                              />
                            </div>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label>Şəhər</label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="form-group col-md-4">
                                <label>Rayonlar</label>
                                <select
                                  className="form-control"
                                  id="inputState"
                                  defaultValue={selectedRegion}
                                  onChange={e =>
                                    setSelectedRegion(e.target.defaultValue)}
                                >
                                  <option selected>Seçin</option>
                                  {regions.map(region => {
                                    return (
                                      <option
                                        key={region.id}
                                        value={region.name}
                                      >
                                        {region.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                              <div className="form-group col-md-2">
                                <label>Poçt/index</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="gridCheck"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="gridCheck"
                                >
                                  Yoxla{" "}
                                </label>
                              </div>
                            </div>
                            <button className="btn btn-primary" type="submit">
                              Daxil olun
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AppProfile;
