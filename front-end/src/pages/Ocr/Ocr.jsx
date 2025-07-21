import { ocrQueue } from "../../data/ocrQueue";
import pending from "../../assets/pending.png";
import completed from "../../assets/complete.png";
import "./Ocr.css";

export default function Ocr() {
  function handleClick() {
    console.log("OCR Result Clicked");
  }

  return (
    <div className="container-fluid">
      <h2 className="fs-4">OCR Result</h2>
      <div className="table-responsive mt-3">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ocrQueue.map(
              (item, index) =>
                (item.status === "Pending" || item.status === "Completed") && (
                  <tr key={index} className={item.status == 'Completed'? 'complete': ""} onClick={() => {
                    if (item.status === "Completed") {
                      handleClick();
                    }
                  }}>
                    <td>{item.filename}</td>
                    <td>{item.tag}</td>
                    <td>{item.date}</td>
                    <td>
                      {item.status === "Pending" ? (
                        <img
                          src={pending}
                          alt="Pending"
                          style={{ width: "20px", height: "20px" }}
                        />
                      ) : (
                        <img
                          src={completed}
                          alt="Completed"
                          style={{ width: "20px", height: "20px" }}
                        />
                      )}{" "}
                      {item.status}
                    </td>
                    <td>
                      {/* <div className="d-flex gap-3">
                        <button className='download-btn'>
                          <img src={download} alt="" />
                        </button>
                        <button className='edit-btn'>
                          <img src={edit} alt="" />
                        </button>
                      </div> */}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
