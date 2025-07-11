import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import homeBlue from "../assets/house-door-fill-blue.png"
import home from '../assets/house-door-fill.png'
import upload from '../assets/file-earmark-plus-fill.svg'
import uploadBlue from '../assets/file-earmark-plus-fill-blue.png'
import document from '../assets/folder-fill.png'
import documentBlue from '../assets/folder-fill-blue.png'

export default function Sidebar({ collapsed, setCollapsed }) {
  const location = useLocation();

  const items = [
    {
      icon: (
        <img className="sidebar-icon" src={home} />
      ),
      label: "Home",
      path: "/",
      alt_icon: (
        <img
          className="sidebar-icon"
          src={homeBlue}
        />
      ),
    },
    {
      icon: (
        <img
          className="sidebar-icon"
          src={upload}
        />
      ),
      label: "Upload/OCR",
      path: "/upload",
      alt_icon: (
        <img
          className="sidebar-icon"
          src={uploadBlue}
        />
      ),
    },
    {
      icon: <img className="sidebar-icon" src={document} />,
      label: "My Documents",
      path: "/documents",
      alt_icon: (
        <img className="sidebar-icon" src={documentBlue} />
      ),
    },
  ];

  return (
    <div
      className={`d-flex flex-column sidebar ${
        collapsed ? "collapsed" : ""
      }`}
    >
      <div className="h-100">
        <div className="d-flex align-items-center">
          <img className="logo" src="/tensor_logo 1.png" alt="" />

          {!collapsed && <p className="title">OCR Platform</p>}
        </div>
        {items.map((item) => (
          <div key={item.label} className="side-link align-item-center">
            <Link to={item.path} className={`text-decoration-none`}>
              {'/' + location.pathname.split('/')[1] === item.path ? item.alt_icon : item.icon}
              {!collapsed && (
                <span
                  className={`label ${
                    '/' + location.pathname.split('/')[1] === item.path ? "active" : ""
                  }`}
                >
                  {item.label}
                </span>
              )}
            </Link>
          </div>
        ))}
      </div>
      <div className="side-link align-item-center">
        <Link to={"/setting"} className={`text-decoration-none`}>
          {/* {location.pathname === item.path?item.alt_icon: item.icon} */}
          <img
            className="sidebar-icon"
            src="../src/assets/gear-fill.png"
            alt=""
          />
          {!collapsed && (
            <span
              className={`label ${
                location.pathname === "/setting" ? "active" : ""
              }`}
            >
              Setting
            </span>
          )}
        </Link>
      </div>
      <button
        className={`p-2 w-100 d-flex border-0 justify-content-${
          !collapsed ? "end" : "center"
        }`}
        style={{ backgroundColor: "#F4F4F4" }}
        onClick={() => setCollapsed(!collapsed)}
      >
        <img
          className="chevron-img"
          src={
            collapsed
              ? "../src/assets/chevron-double-right.png"
              : "../src/assets/chevron-double-left.png"
          }
          alt="Chevron img"
        />
      </button>
    </div>
  );
}
