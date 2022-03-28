import Logo from '../assets/logo.svg'
import Image from 'next/image'

const Navbar = () => (

    <nav className="navbar navbar-expand-sm navbar-light bg-white mt-4">
        <div className="container">
          <a className="navbar-brand p-0 pt-2" href="#">
                <Image src={Logo}  width="121" height="33" layout="fixed"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Resources</a>
              </li>
            </ul>

              <a className="nav-link" href="#">Login</a>
              <button className="cstm_btn" style={{fontSize:'85%'}}>Sign Up</button>
          </div>
        </div>
      </nav>

);

export default Navbar;
