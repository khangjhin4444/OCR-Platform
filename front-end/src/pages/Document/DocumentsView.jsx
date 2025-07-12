import { useState, useRef } from "react";
import "./DocumentsView.css";
import DocumentTable from "./DocumentTable";

export default function DocumentsView() {
  const nameRef = useRef(null);
  const dateRef = useRef(null);
  const [inputSearch, setInputSearch] = useState("");

  let data = [
    {
      name: "a",
      tags: "invoice,east_repair",
      date: "03 Jul 2025",
    },
    {
      name: "b",
      tags: "invoice,east_repair",
      date: "04 Jul 2025",
    },
    {
      name: "c",
      tags: "invoice,east_repair",
      date: "05 Jul 2025",
    },
  ];

  const [tableData, setTableData] = useState(data);

  function handleChangeName(value) {
    if (value === "asc") {
      setTableData((tableData) =>
        [...tableData].sort((a, b) => a.name.localeCompare(b.name))
      );
    } else {
      setTableData((tableData) =>
        [...tableData].sort((a, b) => b.name.localeCompare(a.name))
      );
    }
    dateRef.current.value = "default";
  }

  function handleChangeDate(value) {
    if (value === "asc") {
      setTableData((tableData) =>
        [...tableData].sort((a, b) => new Date(a.date) - new Date(b.date))
      );
    } else {
      setTableData((tableData) =>
        [...tableData].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    }
    nameRef.current.value = "default";
  }

  function handleSearch() {}

  return (
    <>
      <h2 className="fs-4">Document Storage</h2>
      <div className="container-fluid px-md-5">
        <div className="row d-flex w-100 gx-3 justify-content-center gy-2">
          <div className="col-sm-12 col-md-10">
            <input
              type="text"
              className="search-input w-100"
              placeholder="Enter name or tag to search"
              onChange={(event) => {
                setInputSearch(
                  (inputSearch) => (inputSearch = event.target.value)
                );
              }}
            />
          </div>
          <div className="col-sm-12 col-md-2">
            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="sort-container mt-3 fs-5">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-4">
            <p>Sort by:</p>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelectName"
                ref={nameRef}
                onChange={(event) => {
                  handleChangeName(event.target.value);
                }}
              >
                <option value="default" defaultValue={"default"}>
                  Default
                </option>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
              </select>
              <label htmlFor="floatingSelectName">Name</label>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelectDate"
                ref={dateRef}
                onChange={(event) => {
                  handleChangeDate(event.target.value);
                }}
              >
                <option value="default" defaultValue={"default"}>
                  Default
                </option>
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
              </select>
              <label htmlFor="floatingSelectDate">Date</label>
            </div>
          </div>
        </div>
      </div>
      <DocumentTable data={tableData} />
    </>
  );
}
