import landingImg from "../../assets/landing.png";
import "./IntroBody.css";
import personWorkspace from "../../assets/person-workspace.png";
import clock from "../../assets/clock.png";
import hypnotize from "../../assets/hypnotize.png";
import listCheck from "../../assets/list-check.png";
import feedback from "../../assets/feedback.png"

export default function IntroBody() {
  return (
    <>
      <section>
        <div
          className="row"
          style={{
            marginLeft: "100px",
            marginRight: "100px",
            marginTop: "100px",
            marginBottom: "100px",
          }}
        >
          <div className="col-12 col-md-6">
            <img className="img-fluid" src={landingImg} alt="" />
          </div>
          <div className="col-12 col-md-6">
            <p className="fs-4">
              <span style={{ color: "#2563EB", fontWeight: "bold" }}>
                OCR Platform for Businesses
              </span>{" "}
              is an intelligent document digitization solution that helps
              companies extract data from invoices, contracts, and other
              paperwork with just a few clicks.
              <br />
              <br />
              Featuring a user-friendly interface, powerful AI technology, and
              smart document management tools, our platform helps save time,
              reduce manual errors, and boost productivity across your
              organization.
            </p>
            <button className="start-btn">Get Started</button>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="d-flex justify-content-center align-item-center mb-5">
          <h2 className="fs-2 fw-bold mb-5">Our Features</h2>
        </div>

        <div className="container">
          <div
            className="row gx-5 gy-5 d-flex-justify-content-center"
            style={{ paddingLeft: "100px", paddingRight: "100px" }}
          >
            <div className="col col-sm-12 col-md-6">
              <img src={personWorkspace} alt="" />
              <h3 className="mb-3 mt-3">Best OCR and user friendly</h3>
              <p className="fs-5">
                We provide the best OCR tool that converts image or files to
                text using A.I techniques.
                <br />
                Comfortable experience with drag and drop features
              </p>
            </div>

            <div className="col col-sm-12 col-md-6">
              <img src={clock} alt="" />
              <h3 className="mb-3 mt-3">No daily limit</h3>
              <p className="fs-5">
                Convert unlimited pictures and files into text with no daily limit
              </p>
            </div>

            <div className="col col-sm-12 col-md-6">
              <img src={hypnotize} alt="" />
              <h3 className="mb-3 mt-3">Support various type</h3>
              <p className="fs-5">
                Our OCR converter can get text from images, scanned documents and different type of files
              </p>
            </div>

            <div className="col col-sm-12 col-md-6">
              <img src={listCheck} alt="" />
              <h3 className="mb-3 mt-3">Provide management for business</h3>
              <p className="fs-5">
                Control access, organize documents by tags or status, and track changes — all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{marginTop: "50px"}}>
        <div className="d-flex justify-content-center align-item-center">
          <h2 className="fs-2 fw-bold mb-5">Feedback from out customers</h2>
        </div>
        <div className="row w-100 d-flex justify-content-center text-center gy-4">
          <div className="col col-md-12 col-xl-4">
            <img src={feedback} alt="" />
          </div>
          <div className="col col-md-12 col-xl-4">
            <img src={feedback} alt="" />
          </div>
          <div className="col col-md-12 col-xl-4">
            <img src={feedback} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
