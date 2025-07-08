import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import "./FileUploader.css"; 

export default function FileUploader() {
  const navigate = useNavigate();
  const onDrop = useCallback((acceptedFiles) => {
    console.log("Dropped or selected files:", acceptedFiles);
    // TODO: Gửi file lên server hoặc xử lý tại đây
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
  });

  return (
    <div className="m-3">
      <div className="upload-container mb-5" {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="upload-icon">
          <img className="img-fluid" src="../src/assets/upload.png" alt="" />
        </div>
        <p className="fs-5 fw-bold">
          Drop files here, or{" "}
          <span className="upload-link" onClick={open}>
            click here to upload
          </span>
        </p>

        <div className="mt-4">
          <select className="dropdown-select">
            <option value="all">All Information</option>
            <option value="invoice">Invoice</option>
            <option value="purchase">Purchase Order</option>
            <option value="contract">Contract</option>
          </select>
        </div>
      </div>
      <button className="back-btn mt-4 d-flex align-item-center justify-content-around" onClick={() => {
        navigate('/upload');
      }}>Go Back</button>
    </div>
  );
}
