import "./Header.css"
import profilePic from '../assets/person-circle.png'

export default function Header() {
  return(
    <div className="d-flex justify-content-end mb-2 mt-2">
      <img className="profile-img" src={profilePic} alt="Profile picture" />
    </div>
  )
}