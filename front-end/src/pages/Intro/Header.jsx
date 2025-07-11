import "./Header.css";

export default function Header() {
  return (
    <div className="d-flex align-items-center">
      <img src="/tensor_logo 1.png" alt="Logo" />
      <h1 className="header-title">OCR Platform for Businesses</h1>
      <div className="ms-auto">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </div>
  );
}
