import { useEffect, useRef } from "react"
import './ServicesSection.scss'

const ServicesSection = () => {
  const serviceImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(serviceImageRef.current)
  }, [])

  return (    
    <section className="serviceSection">
      <div className="serviceText">
        <div className="motto">
          Services
        </div>
        <div className="mottoSubtitle">
        Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut labore etesde dolore magna aliquapspendisse and the gravida.
        </div>
        <div className="serviceButtons">
          <button>Learn More</button>
        </div>
      </div>
      <div className="imageSection">
        <img 
          src='../src/images/servicesImage.png' 
          className='serviceImage'
          ref={serviceImageRef} 
          width={515} height={515}/>
      </div>
    </section>
  )
}

export default ServicesSection
