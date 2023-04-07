import { useEffect, useRef } from 'react'
import './AboutSection.scss'

const AboutSection = () => {
  const aboutImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(aboutImageRef.current)
  }, [])

  return (
    <section className='aboutSection'>
      <div className="aboutLeft">
        <img 
          src='../src/images/aboutUsImage.png' 
          className='aboutImage'
          ref={aboutImageRef} 
          width={750} height={450}/>
      </div>
      <div className="aboutRight">
        <div className="header">
        About Astrology
        </div>
        <div className="body">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum .

        </div>
        <div className="button">
          <button>Read More</button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
