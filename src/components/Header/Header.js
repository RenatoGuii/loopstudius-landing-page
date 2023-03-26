import "./Header.css"

import Navbar from "../Navbar/Navbar"

const Header = () => {
  return (
    <div className="container-fluid header">
        <Navbar />
        <div className="container text">
          <div className="text-header">
            <p>immersive <br/> experiences <br/> that deliver</p>
          </div>
        </div>
    </div>
  )
}

export default Header