import { useEffect, useRef } from 'react'
import './WelcomeSection.scss'

const WelcomeSection = () => {
  const welcomeImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(welcomeImageRef.current)
  }, [])

  return (    
    <section className="welcomeSection">
      <div className="welcomeText">
        <div className="motto">
        Trust our experience
        </div>
        <div className="mottoSubtitle">
        Start control of your professional destiny
        </div>
        <div className="mottoSubtitle">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
        </div>
        <div className="mottoSubtitle">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
        </div>
        <div className="welcomeButtons">
          <button>Learn More</button>
          <button>Watch Intro Video</button>
        </div>
      </div>
      <div className="imageSection">
        <img 
          src='../src/images/welcomeImage.png' 
          className='welcomeImage'
          ref={welcomeImageRef} 
          width={576*1.1} height={360*1.1}/>
      </div>
    </section>
  )
}

export default WelcomeSection
