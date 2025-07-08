import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ collapsed, setCollapsed }) {
  const location = useLocation();

  const items = [
    {
      icon: (
        <img className="sidebar-icon" src="../src/assets/house-door-fill.png" />
      ),
      label: "Home",
      path: "/",
      alt_icon: (
        <img
          className="sidebar-icon"
          src="../src/assets/house-door-fill-blue.png"
        />
      ),
    },
    {
      icon: (
        <img
          className="sidebar-icon"
          src="../src/assets/file-earmark-plus-fill.svg"
        />
      ),
      label: "Upload/OCR",
      path: "/upload",
      alt_icon: (
        <img
          className="sidebar-icon"
          src="../src/assets/file-earmark-plus-fill-blue.png"
        />
      ),
    },
    {
      icon: <img className="sidebar-icon" src="src\assets\folder-fill.png" />,
      label: "My Documents",
      path: "/documents",
      alt_icon: (
        <img className="sidebar-icon" src="src\assets\folder-fill-blue.png" />
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
          <img className="logo" src="../src/assets/tensor_logo 1.png" alt="" />

          {!collapsed && <p className="title">OCR Platform</p>}
        </div>
        {items.map((item) => (
          <div key={item.label} className="side-link align-item-center">
            <Link to={item.path} className={`text-decoration-none`}>
              {location.pathname === item.path ? item.alt_icon : item.icon}
              {!collapsed && (
                <span
                  className={`label ${
                    location.pathname === item.path ? "active" : ""
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
