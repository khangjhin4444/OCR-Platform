import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./FileUploader.css"; // Tùy chỉnh giao diện giống ảnh

export default function FileUploader() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log("Dropped or selected files:", acceptedFiles);
    // TODO: Gửi file lên server hoặc xử lý tại đây
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({ onDrop, noClick: true, noKeyboard: true });

  return (
    <div className="upload-container" {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="upload-icon">⬆️</div>
      <p>
        Drop files here, or{" "}
        <span className="upload-link" onClick={open}>click here to upload</span>
      </p>

      <div className="dropdown">
        <select className="dropdown-select">
          <option value="all">All Information</option>
          <option value="invoice">Invoice</option>
          <option value="purchase">Purchase Order</option>
          <option value="contract">Contract</option>
        </select>
      </div>
    </div>
  );
}
