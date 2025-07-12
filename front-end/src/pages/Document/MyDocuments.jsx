import { docType } from "../../data/docType";
import folderImg from "../../assets/folder2-open.svg";
import { useNavigate } from "react-router-dom";
import "./MyDocument.css";

export default function Dashboard() {
  const navigate = useNavigate()

  function handleClick(link) {
    navigate(`/documents/${link}`)
  }

  return (
    <>
      <h2 className="fs-4">Document Storage</h2>
      <div className="container-fluid px-4">
        <div className="row gx-4 gy-3">
          {docType.map((ele, index) => {
            return (
              <div className="col col-sm-12 col-md-4 col-lg-3 col-xl-3" key={index} onClick={() => {
                handleClick(ele.link)
              }}>
                <div className="folder-container">
                  <img className="folder-img" src={folderImg} alt="" />
                  <p className="folder-name fs-5">{ele.title}</p>
                </div>
              </div>
            );
          })}

          
        </div>
      </div>
    </>
  );
}
