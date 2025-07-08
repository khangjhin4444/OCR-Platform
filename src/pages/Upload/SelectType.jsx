import Card from "./Card";
import { docType } from "../../data/docType";
import { Link } from "react-router-dom";

export default function Upload() {
  return (
    <>
      <h2 className="fs-4">Recently use</h2>
      <div className="row mx-4 mb-3">
        <div className="col col-md-4 col-lg-3 col-xl-2">
          <Card
            imgSrc="./src/assets/purchase.png"
            title="Purchase Orders"
          ></Card>
        </div>
      </div>

      <h2 className="fs-4 mb-0">Select type of document</h2>
      <p>Chose a specific type for more OCR accuracy</p>
      <div className="row mx-4 gy-4">
        {docType.map((item, index) => {
          return (
            <div key={index} className="col col-md-4 col-lg-3 col-xl-2">
              <Link to={`/upload/${item.link}`}
                style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card imgSrc={item.img} title={item.title}></Card>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
