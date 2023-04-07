import { useEffect, useRef } from 'react'
import './ChooseUsSection.scss'

import { AiOutlineBarChart as Chart } from 'react-icons/ai'
import { RiComputerLine as Service } from 'react-icons/ri'
import { MdSupportAgent as Support} from 'react-icons/md'
import { FaPeopleCarry as Community } from 'react-icons/fa'

const ChooseUsSection = () => {
  const cardsRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(cardsRef.current)
  }, [])

  return (
    <section className="chooseUsSection">
      <div className="sectionTitle">
        Why Choose Us
      </div>
      <div className="reasonCards" ref={cardsRef}>
        <div className="card">
          <div className="cardSymbol">
            <Chart size={'100px'} color={'rgb(127, 127, 127)'}/>
          </div>
          <div className="cardTitle">
          Kundli Dosha
          </div>
          <div className="cardDesc">
          Lorem ipsum dolor sit amet, consectetur
          </div>
        </div>
        <div className="card">
          <div className="cardSymbol">
            <Service size={'100px'} color={'rgb(127, 127, 127)'}/>
          </div>
          <div className="cardTitle">
          Kundli Dosha
          </div>
          <div className="cardDesc">
            Lorem ipsum dolor sit amet, consectetur 
          </div>
        </div>
        <div className="card">
          <div className="cardSymbol">
            <Community size={'100px'} color={'rgb(127, 127, 127)'}/>
          </div>
          <div className="cardTitle">
          Kundli Dosha
          </div>
          <div className="cardDesc">
            Lorem ipsum dolor sit amet, consectetur 
          </div>
        </div>
        <div className="card">
          <div className="cardSymbol">
            <Support size={'100px'} color={'rgb(127, 127, 127)'}/>
          </div>
          <div className="cardTitle">
          Kundli Dosha
          </div>
          <div className="cardDesc">
            Lorem ipsum dolor sit amet, consectetur 
          </div>
        </div>
      </div>
    </section>
  )
}
export default ChooseUsSection
