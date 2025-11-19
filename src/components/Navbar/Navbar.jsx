
import './Navbar.css'
import Button from '../Buttons'
import Logo  from '../Logo/Logo'

function Navbar() {

  return (
    <>
        <nav className='nav'>
            <div className='logo'>
              <Logo />
            </div>
            <ul className='nav-links'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div className='buttons'>
                <Button name="Login"/>
                <Button name="Signup"/>
            </div>
        </nav>
    </>
  )
}

export default Navbar
