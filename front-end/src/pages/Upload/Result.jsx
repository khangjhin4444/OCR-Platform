import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Field from "./Field";
import "./Result.css";
import downloadIcon from "../../assets/box-arrow-in-down.png";
import { ocrRes } from "../../data/ocrRes";
import { ocrResTable } from "../../data/ocrResTable";

export default function Result() {
  const location = useLocation();
  const file = location.state?.file;
  const docType = location.state?.type;
  const [previewUrl, setPreviewUrl] = useState(null);

  const [fileName, setFileName] = useState(file.name);
  const [fileTags, setFileTags] = useState(docType);
  const [fields, setFields] = useState(
    ocrRes.map((item) => ({
      field: item.field,
      data: item.data,
      check: true,
    }))
  );

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);

      // Dọn dẹp bộ nhớ khi component unmount
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  function toggleCheck(index) {
    setFields((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, check: !item.check } : item
      )
    );
  }

  function handleSave() {
    const selectedFields = fields
      .filter((item) => item.check)
      .map((item) => ({
        field: item.field,
        data: item.data,
      }));

    console.log("Selected fields:", selectedFields);

    let resJson = {
      fileName,
      tags: fileTags,
      fields: selectedFields,
    };

    console.log("Full JSON to save:", resJson);
  }

  if (!file) return <p>No file uploaded.</p>;

  const fileType = file.type;

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col col-sm-12 col-md-6">
          {fileType.startsWith("image/") && (
            <img
              className="preview img-fluid"
              src={previewUrl}
              alt="Uploaded"
              style={{ height: "auto" }}
            />
          )}

          {fileType === "application/pdf" && (
            <iframe
              className="preview"
              src={previewUrl}
              title="PDF Preview"
              height="630px"
              width="100%"
              style={{ border: "1px solid #ccc" }}
            />
          )}

          {!fileType.startsWith("image/") && fileType !== "application/pdf" && (
            <p>Cannot preview this file type.</p>
          )}
        </div>
        <div className="col col-sm-12 col-md-6">
          <input
            className="fs-4 mb-2 file-name-input"
            type="text"
            value={fileName}
            onChange={(event) => {
              setFileName((fileName) => (fileName = event.target.value));
              console.log(fileName);
            }}
          />
          <p className="fs-5 mb-2">Fields</p>
          <div className="field-grid mb-3">
            {fields.map((ele, index) => {
              return (
                <Field
                  key={index}
                  field={ele.field}
                  data={ele.data}
                  check={ele.check}
                  onToggle={() => toggleCheck(index)}
                />
              );
            })}
          </div>

          <p className="fs-5 mb-3">Table</p>
          <div className="table-container">
            <div className="table-responsive mt-3">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    {ocrResTable.labels.map((label, index) => (
                      <th key={index}>{label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ocrResTable.rows.map((item, index) => (
                    <tr key={index}>
                      <td>{item.description}</td>
                      <td>{item.unitPrice}</td>
                      <td>{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="fs-5 mb-3">Tags</p>
          <input
            className="tag-input"
            type="text"
            value={fileTags}
            onChange={(event) => {
              setFileTags((fileTags) => (fileTags = event.target.value));
            }}
          />

          <div className="d-flex justify-content-end mt-5">
            <button className="down-btn">
              <img src={downloadIcon} alt="Download Icon" />
            </button>

            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
