import { useEffect, useRef } from "react"
import './DownloadSection.scss'

const DownloadSection = () => {
  const downloadImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(downloadImageRef.current)
  }, [])
  
  return (
    <section className="downloadSection">
      <div className="imageSection">
        <img 
          src='../src/images/about.jpg' 
          className='downloadImage'
          ref={downloadImageRef} 
          width={576} height={360}/>
      </div>
      <div className="downloadText">
        <div className="downloadTitle">
        Consectetur adipiscing elit, sed do eiusmod tempor .
        </div>
        <div className="downloadSubtitle">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.”
        </div>
        
      </div>
    </section>
  )
}

export default DownloadSection
