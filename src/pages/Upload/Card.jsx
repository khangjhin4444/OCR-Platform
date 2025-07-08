import "./Card.css"

export default function Card({imgSrc, title}) {
  return(
    <>
      <div className="card-container d-flex flex-column justify-content-center">
        <img src={imgSrc} alt="" />
        <p>{title}</p>
      </div>
    </>
  )
}