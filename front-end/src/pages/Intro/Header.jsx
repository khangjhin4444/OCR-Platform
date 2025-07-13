import "./Header.css";

export default function Header() {
  return (
    <div className="container-fluid">
      <div className="row  d-flex align-items-center">
        <div className="col-3 col-sm-3 col-md-2 col-lg-1">
          <img src="/tensor_logo 1.png" alt="Logo" />
        </div>
        <div className="col-9 col-sm-9 col-md-5 col-lg-5">
          <h1 className="header-title">OCR Platform for Businesses</h1>
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-6">
          <div className="ms-auto d-flex justify-content-end gap-2 btn-container">
            <button className="login-btn">Login</button>
            <button className="register-btn">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
