import './Footer.css'
import logo from '../../assets/tensor_logo 2.png'
import facebook from '../../assets/facebook 1.png'
import linkedin from '../../assets/linkedin 1.png'

export default function Footer() {
  return(
    <>
      <div className="container-fluid mt-5" style={{backgroundColor: "#6c93e7"}}>
        <div className="row">
          <div className="col col-sm-12 col-md-2">
            <img src={logo} alt="" />
          </div>
          <div className="col col-sm-12 col-md-3 pt-4 px-5 gy-2" style={{color: "white"}}>
            <p className='fs-4 fw-bold'>TENSOR</p>
            <p>About</p>
            <p>Privacy Policy</p>
            <p>Term of Services</p>
          </div>
          <div className="col col-sm-12 col-md-5 pt-4 px-5 gy-2" style={{color: "white"}}>
            <p className='fs-4 fw-bold'>CONTACT INFO</p>
            <p>+84123456789</p>
            <p>info@tensor.com</p>
            <p>123 Ly Thuong Kiet, Dien Hong ward, Ho Chi Minh City</p>
          </div>
          <div className="col col-sm-12 col-md-2 px-5 pt-3 mb-2 d-flex align-items-center gap-2">
            <img style={{width: '40px', height:'40px'}} src={facebook} alt="" />
            <img style={{width: '40px', height:'40px'}} src={linkedin} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}