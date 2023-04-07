import './NavigationBar.scss'
import { useState, useEffect } from 'react'

import { RxHamburgerMenu as OpenMenu } from "react-icons/rx"
import { CgClose as HideMenu} from 'react-icons/cg' 

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      window.innerWidth > 1200 && setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <nav className="navBar">
        <div className="leftSection">
          <a href='' target={'_blank'} style={{textDecoration: "none", outline: "none"}}>
            <div className='companyLogo'>
              <img src='../src/images/globeIcon.png'/>
              <h1>Astrology</h1>
            </div>
          </a>
            <div className="navBtns">
              <div className="navDropdown">
                <button>About Us</button>
        
              </div>
              <div className="navDropdown">
                <button>Services</button>
                
              </div>
              <button>Community</button>
              <button>Blog</button>
              <button>News</button>
            </div>
        </div>
        <div className='rightSection'>
          
          <div className="menuSection">
            {
              !menuOpen ? 
                <OpenMenu className='menuBtn' onClick={() => setMenuOpen(true)}/> : 
                <HideMenu className='hideBtn' onClick={() => setMenuOpen(false)}/>
            }
          </div>
        </div>
        <div className="sideMenu" style={{display: (!menuOpen || width > 1200) ? 'none' : 'flex'}}>
          <div className="sideMenuSiteSections">
            <button>About Us</button>
            <button>Services</button>
            <button>Community</button>
            <button>Blog</button>
            <button>Contact Us</button>
          </div>
          
        </div>
      </nav>
    </>
  )
}

export default NavigationBar
